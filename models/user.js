module.exports = function(sequelize, DataTypes) {
      var User = sequelize.define("User", {
          email: {
              type: DataTypes.STRING,
              allowNull: false,
              validate: {
                  isEmail: true
              }
          },
          password: {
              type: DataTypes.STRING,
              allowNull: false,
              validate:  {
                  len: [8,20]
              }
            },
          name: {
              type: DataTypes.STRING,
              allowNull: false
          }
      })

      User.associate = function(models) {
        User.belongsToMany(models.Event, {through: 'Attendee'})
      };

      return User;
  };