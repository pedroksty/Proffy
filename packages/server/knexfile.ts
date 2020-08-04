import path from 'path'

module.exports = {
  client: 'pg',
  connection: {
    host: '192.168.1.11',
    port: 5432,
    user: 'postgres',
    password: 'docker',
    database: 'proffy'
  },
  migrations: {
    directory: path.resolve(__dirname, 'src', 'database', 'migrations')
  },
  useNullAsDefault: true
}
