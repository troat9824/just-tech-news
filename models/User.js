const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create user model
class User extends Model {}

// define table columns and configuration
User.init(
    {
        // table column definitions
        id: {
            // use the special sequelize datatypes object to provide what type of data it is
            type: DataTypes.INTEGER,
            // equivalent of `NOT  NULL`
            allowNull: false,
            // this is primary key
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [4]
            }
        }
    },
    {
        // table configuration options

        // pass in imported sequelize connection
        sequelize,
        // don't automatically create createdAt/updatedAt timestamp fields
        timestamps: false,
        // don't pluralize name of database table
        freezeTableName: true,
        // user underscores instead of camel-casing
        underscored: true,
        // make it so model name stays lowercase in database
        modelName: 'user'
    }
);

module.exports = User;