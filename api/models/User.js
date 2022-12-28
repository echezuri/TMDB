const Model = require("sequelize");
const bcrypt = require("bcrypt");

const S = require("sequelize");
const db = require("../db");

class User extends S.Model {
  hash(password, salt) {
    return bcrypt.hash(password, salt);
  }

  validatePassword(password) {
    return this.hash(password, this.salt).then(
      (newHash) => newHash === this.password
    );
  }
}

User.init(
  {
    name: { type: S.STRING, allowNull: false },
    lastName: { type: S.STRING, allowNull: false },
    email: { type: S.STRING, allowNull: false, validate: { isEmail: true } },
    password: { type: S.STRING, allowNull: false },
    salt: {
      type: S.STRING,
    },
    favs: {
      type: S.ARRAY(S.JSON),
      defaultValue: [],
    },
    vistas: {
      type: S.ARRAY(S.JSON),
      defaultValue: [],
    },
    // favorites: { type: S.ARRAY(S.INTEGER), defaultValue: [] },
  },
  { sequelize: db, modelName: "users" }
);

User.beforeCreate((user) => {
  const salt = bcrypt.genSaltSync();

  user.salt = salt;

  return user.hash(user.password, salt).then((hash) => {
    user.password = hash;
  });
});
module.exports = User;
