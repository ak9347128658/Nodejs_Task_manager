const {DataTypes} = require('sequelize');
const db =require('../configure/db');

const Task = db.define('task',{
   id:{
         type: DataTypes.UUID,
         primaryKey: true,
         defaultValue: DataTypes.UUIDV4
    },
    title:{
        type: DataTypes.STRING,
        allowNull: false
    },
    description:{
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
timestamps: true
});

module.exports = Task;


//create table tasks(
//   id UUID PRIMARY KEY DEFAULT UUIDV4,
//   title VARCHAR(255) NOT NULL,
//   description VARCHAR(255) NOT NULL,
//   createdAt TIMESTAMP WITH TIME ZONE NOT NULL,
//   updatedAt TIMESTAMP WITH TIME ZONE NOT NULL
//);