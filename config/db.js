const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  logging: false, 
});

sequelize.authenticate()
  .then(() => console.log("✅ Database Connected!"))
  .catch((err) => console.error("❌ Database Connection Error:", err));

module.exports = sequelize;
