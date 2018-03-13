module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
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

  User.associate = function (models) {
    User.hasMany(models.Drawing, {
      onDelete: "cascade"
    });
  };

  return User;
};
