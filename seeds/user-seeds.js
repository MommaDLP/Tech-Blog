const { User } = require('../models');

const userData = [{
        username: 'James',
        email: 'James@example.com',
        password: 'blahblah'
    },
    {
        username: 'Gabby',
        email: 'Gabby@example.com',
        password: 'foodfood'
    },
    {
        username: 'Love',
        email: 'Love@example.com',
        password: 'lettterrs'
    }
];

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;