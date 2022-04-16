const {Comment} = require('../models');

const commentdata = [
    {
        comment_text: 'Hi, this is a test.',
        user_id: 7,
        post_id:1
    },
    {
        comment_text: `You're doing wonderful!`,
        user_id: 2,
        post_id:3
    },
    {
        comment_text: 'Hope you are living in the moment.',
        user_id: 9,
        post_id:4
    },
    {
        comment_text: 'Sunsets are beautiful.',
        user_id: 3,
        post_id:9
    },
    {
        comment_text: 'Music is life.',
        user_id: 3,
        post_id:6
    }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;