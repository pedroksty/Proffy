import knex from 'knex'

const db = knex({
  client: 'pg',
  connection: {
    host: '192.168.1.11',
    port: 5432,
    user: 'postgres',
    password: 'docker',
    database: 'proffy'
  },
  useNullAsDefault: true
})

export default db
