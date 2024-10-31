import mongoose from "mongoose";
import { UserModel } from "./models/UserSchema";

mongoose.connect("mongodb+srv://arthurschneider:admin@users.hb1t4.mongodb.net/?retryWrites=true&w=majority&appName=Users");

const userCreate = async () => {
    await UserModel.create({
        name: "John Doe",
        email: "johndoe@gmail.com",
        password: "password",
    })
};
