module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "mysql$adm",
    DB: "test_db03",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };