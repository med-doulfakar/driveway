const { Server } = require('socket.io');
const jwt = require('jsonwebtoken');
const logger = require('./logger');
const Events = require('./events');

const USERS = {};

const socket = (httpServer) => {
  const io = new Server(httpServer, {
    cors: {
      origin: 'http://localhost:4201',
      methods: ['GET', 'POST'],
      credentials: true,
    },
  });

  io.use((soc, next) => {
    if (soc.handshake.auth.token) {
      const { token } = soc.handshake.auth;
      jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
        if (err) {
          logger.info(err);
          return next(new Error('Authentication error'));
        }
        logger.info(JSON.stringify(decoded));
        // eslint-disable-next-line no-param-reassign
        soc.authUser = decoded.userId;
        next();
      });
    } else {
      next(new Error('Authentication error'));
    }
  });

  io.on('connection', (s) => {
    logger.info(`Socket.io is listening`);
    const userId = s.authUser;
    if (!USERS[userId]) {
      USERS[userId] = {
        socketId: s.id,
        userId: s.authUser,
      };
    }

    s.on('session:create', (data) => {
      if (data.users) {
        logger.info('Sending create session, socketId: ');
        data.users.forEach((user) => {
          const u = USERS[user];
          io.to(u.socketId).emit(Events.CREATE_SESSION, data.message);
        });
      }
    });
  });
};

module.exports = socket;
