const {Post} = require('../models');

const postdata = [
    {
        title:'Welcome Home',
        post_url: 'postinghere.com', 
        user_id:2
    },
    {
        title:'Learning is Cool',
        post_url: 'learningiscool.com', 
        user_id:4
    },
    {
        title:'Singing in the Shower',
        post_url: 'musicmelodies.com', 
        user_id:3
    },
    {
        title:'Dancing in the moonlight',
        post_url: 'musicmelodies.com.com', 
        user_id:3
    },
    {
        title:'La da da',
        post_url: 'wee.com', 
        user_id:7
    },
    {
        title:'Destination',
        post_url: 'postinghere.com', 
        user_id:8
    },
];

const seedPosts = () => Post.bulkCreate(seeddata);

module.exports = seedPosts;