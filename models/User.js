const {DataTypes} = require('sequelize');
const db = require('../configure/db');  

const User = db.define('user',{
    id:{
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        email: true
        // unique: true
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
   timestamps: true 
});


module.exports = User;

//create table users(
//   id UUID PRIMARY KEY DEFAULT UUIDV4,
//   username VARCHAR(255) NOT NULL,
//   password VARCHAR(255) NOT NULL,
//   createdAt TIMESTAMP WITH TIME ZONE NOT NULL,
//   updatedAt TIMESTAMP WITH TIME ZONE NOT NULL
//);



