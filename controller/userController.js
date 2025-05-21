import { UserModel } from "../model/userModel.js";

const insert = async (req, res) => {
  const data = {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    password: "securePassword123",
    age: 30,
    mobileNumber: "1234567890",
    isActive: true,
  };
  const result = UserModel.create(data);
//   console.log("result :",result)
  return result
};

export const userController = {
  insert,
};
