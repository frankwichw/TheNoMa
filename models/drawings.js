module.exports = function(sequelize, DataTypes) {
    var Drawings = sequelize.define("Drawings", {
      drawing: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      drawing_creator_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      drawing_descriptor: {
        type: DataTypes.STRING,
        allowNull: false
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: Now()
      }
    });
    Drawings.associate = function(models) {
      Drawings.belongsTo(models.Users, {
        foreignKey: {
          allowNull: false
        }
      });
    };
    return Drawings;
  };

  // drawing_id INT NOT NULL AUTO_INCREMENT,
  // drawing blob NOT NULL,
  // drawing_creator_id INT,
  // drawing_descriptor VARCHAR(100),
  // createdAt DATETIME,
  // PRIMARY KEY (drawing_id),
  // FOREIGN KEY (drawing_creator_id) REFERENCES users(user_id)