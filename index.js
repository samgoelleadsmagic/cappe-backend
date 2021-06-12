require("dotenv").config();
//const articles = require("./routes/article.routes");
const express = require("express");
const Sequelize = require("sequelize");

const app = express();
const port = process.env.SERVER_PORT;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const dbConfig = require("./config/db.config");


const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });



app.get("/", (req, res) => {
  res.send(`<h1>Hello!</h1>`);
});

app.listen(port, () => {
  console.log(`Application is listening at port ${port}`);
});
