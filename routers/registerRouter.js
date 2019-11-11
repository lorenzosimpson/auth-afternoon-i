const bcrypt = require('bcryptjs');
const Users = require('../data/helpers');
const router = require('express').Router();

router.post('/', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hash(user.password, 8, (err, hashedPw) => {
        user.password = hashedPw;

        Users.addUser(user)
        .then(added => res.status(200).json({ message: `Welcome`}))
        .catch(err => res.status(500).json({ error: 'An error occurred' }))
    })

})

module.exports = router;
