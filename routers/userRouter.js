const Users = require('../data/helpers')
const router = require('express').Router()


router.get('/', (req, res) => {
    Users.find()
    .then(users => res.status(200).json(users))
    .catch(err => res.status(500).json({ error: 'Could not get users'}))
})

module.exports = router;