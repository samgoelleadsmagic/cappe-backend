/*

User Services

    User Services tell the 


*/

const db = require('../models/index');
db.sequelize.sync();
const User = db.user;


module.exports = class UserService {
  static async getAllUsers() {
    try {
        
      const allUsers = await User.findAll();
      return allUsers;
    } catch (error) {
      console.log(`Could not fetch Users ${error}`);
    }
  }
  static async addUser(data) {
    try {
        console.log('User = ', User);

      const newUser = {
        name: data.name,
        email: data.email,
        phone: data.phone,
      };
      const response = await User.create(newUser);
      return response;
    } catch (error) {
      console.log(error);
    }
  }



};
