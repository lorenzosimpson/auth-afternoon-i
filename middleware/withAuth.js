function withAuth(req, res, next) {
    if (req.session && req.session.username) {
        next()
    } else {
        res.status(401).json({ error: 'You shall not pass!'})
    }
}

module.exports = withAuth;