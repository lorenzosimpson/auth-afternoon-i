const db = require('./db-config.js')


function find() {
    return db('users').select('*')
}

function addUser(user) {
    return db('users')
    .insert(user)
}

module.exports = {
    find,
    addUser
};