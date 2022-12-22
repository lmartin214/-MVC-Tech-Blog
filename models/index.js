//Define relationships between each model
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

//User can have multiple Post
User.hasMany(Post, {
    foreignKey: 'user_id'
})

Post.belongsTo(User, {
    foreignKey: 'user_id'
})
//User can have mulitple Comment
User.hasMany(Comment, {
    foreignKey: 'user_id'
})

Comment.belongsTo(User, {
    foreignKey: 'user_id',
});

//Post can have multiple Comment
Post.hasMany(Comment, {
    foreignKey: 'post_id',
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
});

module.exports = { User, Post, Comment };