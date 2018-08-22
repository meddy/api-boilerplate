module.exports = {
  client: 'postgresql',
  connection: {
    host: 'localhost',
    user: 'postgres',
    password: 'postgres',
    database: 'postgres'
  },
  asyncStackTraces: process.env.NODE_ENV === 'development'
};
