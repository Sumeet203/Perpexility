import userModel from "../models/user.model.js";
import jwt from 'jsonwebtoken';
import { sendEmail } from "../services/mail.service.js";

export async function register(req,res){
    const {username,email,password} = req.body;
    const isUserExist = await userModel.findOne({
        $or : [{email},{username}]
    });
    if(isUserExist){
        return res.status(400).json({
            message : "User with this email or username already exists",
            success : false,
            err : "User already exists"
        });
    };
    const user = await userModel.create({
        username,email,password
    });
    await sendEmail({
        to : email,
        subject : "Welcome to Perpexility",
        html : `<h1>Welcome to Perpexility, ${username}!</h1>
        <p>Thank you for registering with us. We're excited to have you on board!</p>
        <p>Best regards,<br/>The Perpexility Team</p>`
    });
    res.status(201).json({
        message : "User created successfully",
        success : true,
        user : {
            id : user._id,
            username : user.username,
            email : user.email
        }
    })
}
