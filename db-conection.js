const Sequelize = require("sequelize");
const sequelize = new Sequelize("storedata", "root", "password", {
  host: "127.0.0.1",
  dialect: "mysql",
  port: 3306,
  define: {
    timestamps: false
}
});

const connectToMySQL = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = { connectToMySQL, sequelize };
