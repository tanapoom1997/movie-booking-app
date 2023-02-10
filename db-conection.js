const Sequelize = require("sequelize");
const sequelize = new Sequelize("storedata", "root", "password", {
  host: "127.0.0.1", //mysql_server for docker
  dialect: "mysql",
  port: 3306,
  logging: false,
  define: {
    timestamps: false
}
});

// const sequelize = new Sequelize('postgres://root:password@postgres_server:5432/storedata');

const connectToMySQL = async () => {
  let retries = 0;
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    if (retries <= 3) {
      setTimeout(async() => {
        await sequelize.authenticate();
      }, 5000);
      retries++;
    }
    else throw error;
  }
};

module.exports = { connectToMySQL, sequelize };
