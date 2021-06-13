/*
User:-
  The basic data model that describes the attributes
  a table holds

*/
const userModel=(sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    name: {
      type: Sequelize.STRING,
    },

    email: {
      type: Sequelize.STRING,
    },

    phone: {
      type: Sequelize.INTEGER,
    },
  },{});
  return User;
}
module.exports = userModel;

  

