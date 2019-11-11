const db = require('./db-config.js')


function find() {
    return db('users').select('*')
}

function addUser(user) {
    return db('users')
    .insert(user)
}

function findUser(username) {
    return db('users')
    .select('*')
    .where('username', username)
}


module.exports = {
    find,
    addUser,
    findUser
};