import { Sequelize } from "sequelize";

const sequelize = new Sequelize('demodb', 'root', '12345678@m', {
  host: 'localhost',
  port:3306,
  dialect: 'mysql'
});

const dbConnection =async ()=>{

try {
  await sequelize.authenticate();
  console.log('DB Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
}

export {dbConnection,sequelize};


