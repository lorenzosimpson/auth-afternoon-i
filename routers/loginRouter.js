const router = require('express').Router();
const Users = require('../data/helpers');
const bcrypt = require('bcryptjs')

router.post('/', (req, res) => {
    const { username, password } = req.body;

    Users.findUser(username)
    .first()
    .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
            res.status(200).json({ message: `Welcome ${user.username}!` });
        }
        else {
            res.status(401).json({ message: 'Invalid Credentials' });
        }
    })
    .catch(err => res.status(500).json({ error: 'Login error'}))
})

module.exports = router;