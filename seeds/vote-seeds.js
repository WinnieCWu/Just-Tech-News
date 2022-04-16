const {Vote} = require('..modules/vote');
const votedata =[
    {
        user_id:2,
        post_id:7
    },
    {
        user_id:5,
        post_id:3
    },
    {
        user_id:4,
        post_id:1
    },
    {
        user_id:4,
        post_id:5
    }
];

const seedVotes = () => Vote.bulkCreate(votedata, seed);

module.exports = seedVotes;