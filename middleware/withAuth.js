const bcrypt = require('bcryptjs')
const Users = require('../data/helpers')


function withAuth(req, res, next) {
    let { username, password } = req.headers;

    if (username && password) {
        Users.findUser(username)
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                next();
            } else {
                res.status(401).json({ message: 'You shall not pass!'})
            }
        })
        .catch(error => {
            console.log('login error', error);
            res
              .status(500)
              .json({ message: 'ran into an error, please try later' });
          });
    } else {
        res.status(400).json({ error: 'Please provide username and password' })
    }
}

module.exports = withAuth;