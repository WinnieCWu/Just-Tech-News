const {User} = require('../models');

const userdata = [
    {
        username:'aaronL',
        email: 'aaron@mail.com',
        password: 'password'
    },
    {
        username:'alexE',
        email: 'alexE@mail.com',
        password: 'password'
    },
    {
        username:'candiceZ',
        email: 'candiceZ@mail.com',
        password: 'password'
    },
];

const seedUsers = () => Users.bulkCreate(userdata);

module.exports = seedUsers;
