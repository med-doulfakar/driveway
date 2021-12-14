const allRoles = {
  superAdmin: [],
  admin: ['manageInstructors', 'manageStudents', 'managePlans'],
  student: ['getSessions'],
  instructor: [],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
