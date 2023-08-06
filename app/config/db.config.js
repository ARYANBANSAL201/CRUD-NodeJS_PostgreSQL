module.exports = {
    HOST: "localhost",
    USER: "aryan",
    PASSWORD: "aryanbansal",
    DB: "testdb",
    PORT: 5432,
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };