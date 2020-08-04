const AdminBro = require('admin-bro');
const { Users } = require('./users.entity');

/** @type {AdminBro.ResourceOptions} */
const options = {
  properties: {
        encryptedPassword: {
          isVisible: false,
        },
        password: {
          type: 'string',
          isVisible: {
            list: false, edit: true, filter: false, show: false,
          },
        },
      }
   
}

  

module.exports = {
  options,
  resource: Users,
};
