import express from "express";
import router from "./routes/router.js";
import { dbConnection, sequelize } from "./config/dbConnect.js";
// import { UserModel } from './model/userModel.js';

const app = express();
app.use(express.json());

// UserModel.sync()
// UserModel.sync({ force: true })
// UserModel.sync({ alter: true })
const main = async () => {
  try {
    await sequelize.sync({ force: false });
    console.log("Database synchronized successfully.");
  } catch (error) {
    console.log("Error synchronized successfully.");
  }
};
 main()
app.use("/", router);

app.listen(3000, () => {
  console.log(`Server is listening at port 3000`);
  dbConnection();
});

//file :-
/*
M:- Model
V:- View
C:- Controller

C:- create
R:- read
U:- Update
D:- Delete

*/
