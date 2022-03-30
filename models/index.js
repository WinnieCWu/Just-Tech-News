const Vote = require('./Vote');
const User = require('./User');
const Post = require('./Post');

// create associations
User.hasMany(Post, {
    foreignKey: 'user_id'
  });

Post.belongsTo(User, {
    foreignKey: 'user_id',
  });

//Connect User to Vote
Vote.belongsTo(User, {
    foreignKey: 'user_id'
  });
  
Vote.belongsTo(Post, {
    foreignKey: 'post_id'
  });
  
User.hasMany(Vote, {
    foreignKey: 'user_id'
  });
  
Post.hasMany(Vote, {
    foreignKey: 'post_id'
  });

module.exports = { User, Post, Vote };
