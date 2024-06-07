const Task = require('./Task');
const User = require('./User');
// const Author = require('./Author');
// cont Book = require('./Book');


User.hasMany(Task, {foreignKey: 'userId', onDelete: 'CASCADE'});
Task.belongsTo(User, {foreignKey: 'userId',onDelete: 'CASCADE'});


module.exports = {
    Task,User
};