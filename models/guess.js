module.exports = function (sequelize, DataTypes) {
  var Guess = sequelize.define("Guess", {
    guess: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // The userId field is not a FK and is updated manually
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    rating: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  });

  Guess.associate = function (models) {
    Guess.belongsTo(models.Drawing, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Guess;
};
