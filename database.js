module.exports = require('knex')({
    client: 'pg',
    connection: process.env.DB_CONNECTION_STRING,
    searchPath: ['knex', 'public'],
});
