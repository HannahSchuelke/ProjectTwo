module.exports = function (sequelize, DataTypes) {
    var Event = sequelize.define("User", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        eventDate: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    Event.associate = function (models) {
        Event.belongsToMany(User, { through: 'Attendee' })
    }

    return Event;
};