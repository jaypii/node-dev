module.exports = {
    HOST: "localhost",
    USER: "jpadm",
    PASSWORD: null,
    DB: "testdb",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
};