const db = require('./db-config.js')


function find() {
    return db('users').select('*')
}

module.exports = {
    find
};