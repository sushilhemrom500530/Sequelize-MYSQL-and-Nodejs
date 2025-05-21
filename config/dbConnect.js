import { Sequelize } from "sequelize";


const dbConnection =async ()=>{
    // Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('demodb', 'root', '12345678@m', {
  host: 'localhost',
  port:3306,
  dialect: 'mysql'/* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});
try {
  await sequelize.authenticate();
  console.log('DB Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
}

export default dbConnection;


