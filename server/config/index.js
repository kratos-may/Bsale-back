/*este archivo me exporta del .env las variables y si esta en produccion no las utiliza */
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
module.exports = {
  PORT: process.env.PORT,
  HOST: process.env.HOST,
  FRONT_URL: process.env.FRONT_URL,
  DB_SQL: process.env.DB_SQL,
  USER_DB_SQL: process.env.USER_DB_SQL,
  PASSWORD_DB_SQL: process.env.PASSWORD_DB_SQL,
  DIALECT_DB_SQL: process.env.DIALECT_DB_SQL,
  HOST_DB_SQL: process.env.HOST_DB_SQL,
};