module.exports = {
  HOST: 'localhost',
  USER: '',
  PASSWORD: '',
  DB: 'company_db_dev',
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
