module.exports = function (sequelize, DataTypes) {
  var Drawing = sequelize.define("Drawing", {
    drawing: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    drawing_descriptor: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Drawing.associate = function (models) {
    Drawing.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  Drawing.associate = function (models) {
    Drawing.hasMany(models.Guess, {
      onDelete: "cascade"
    });
  };
  
  return Drawing;
};
