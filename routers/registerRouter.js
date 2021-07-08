const bcrypt = require('bcryptjs');
const Users = require('../data/helpers');
const router = require('express').Router();

router.post('/', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hash(user.password, 10, (err, hashedPw) => {
        user.password = hashedPw;

        Users.addUser(user)
        .then(added => {
            req.session.username = user.username;
            res.status(200).json({ message: `Welcome, ${user.username}`})
        })
        .catch(err => res.status(500).json({ error: 'An error occurred' }))
    })

})

module.exports = router;
