module.exports = function (sequelize, DataTypes) {
  var Drawings = sequelize.define("Drawings", {
    drawing: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    drawing_descriptor: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Drawings.associate = function (models) {
    Drawings.belongsTo(models.Users, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  Drawings.associate = function (models) {
    Drawings.hasMany(models.Guesses, {
      onDelete: "cascade"
    });
  };

  return Drawings;
};
