const user = require('./user');
const post = require('./post');
const comment = require('./comment');

user.hasMany(post, {
    foreignKey: 'user_id'
});

post.belongsTo(user, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

comment.belongsTo(user, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

comment.belongsTo(post, {
    foreignKey: 'post_id',
    onDelete: 'SET NULL'
});

user.hasMany(comment, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

post.hasMany(comment, {
    foreignKey: 'post_id'
});

module.exports = { user, post, comment }