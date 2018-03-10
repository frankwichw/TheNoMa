module.exports = function (sequelize, DataTypes) {
  var Guesses = sequelize.define("Guesses", {
    guess: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // Cannot get userID in both guesses and drawings
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  // Cannot get userID in both guesses and drawings
  // Guesses.associate = function(models) {
  //     Guesses.belongsTo(models.Users, {
  //       foreignKey: {
  //         allowNull: false
  //       }
  //     });
  // };
  Guesses.associate = function (models) {
    Guesses.belongsTo(models.Drawings, {
      foreignKey: {
        allowNull: false
      }
    });
  }
  return Guesses;
};
