const allRoles = {
  superAdmin: [],
  admin: ['getUsers', 'manageUsers'],
  user: [],
  monitor: [],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
