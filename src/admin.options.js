const { default: AdminBro } = require('admin-bro');
const AdminBroMongoose = require('admin-bro-mongoose');

AdminBro.registerAdapter(AdminBroMongoose);

const AdminCompany = require('./companies/company.admin');
const User = require('./users/users.admin');
/** @type {import('admin-bro').AdminBroOptions} */
const options = {
  resources: [AdminCompany, User],
};

module.exports = options;
