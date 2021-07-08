const router = require('express').Router();


router.get('/', (req, res) => {
    if (req.session) {
        req.session.destroy();
        res.status(200).json({ message: 'Logged out successfully' })
    } else {
        res.status(400).json({ error: 'No session found'})
    }
})

module.exports = router;