module.exports = function (sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
    user_id: {
      type: DataTypes.STRING,
      allowNull: true
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_score: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  });

  Users.associate = function (models) {
    Users.hasMany(models.Drawings, {
      onDelete: "cascade"
    });
  };

  // Cannot get userID in both guesses and drawings
  // Users.associate = function(models) {
  //     Users.hasMany(models.Guesses, {
  //         onDelete: "cascade"
  //     });
  // };

  return Users;
};
