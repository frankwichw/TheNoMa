module.exports = function(sequelize, DataTypes) {
    var Users = sequelize.define("Users", {
      user_email: {
        type: DataTypes.STRING,
        allowNull: true
      },
      user_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      user_password: {
          type: DataTypes.STRING,
          allowNull: false
      },
      user_score: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: Now()
      }
    });

    Users.associate = function(models) {
        Users.hasMany(models.Drawings, {
            onDelete: "cascade"
          });
    };
    return Users;
  };

//   user_id INT NOT NULL AUTO_INCREMENT,
//   user_email VARCHAR(50),
//   user_name VARCHAR(50),
//   user_score INT,
//   createdAt DATETIME,
//   PRIMARY KEY (user_id)

