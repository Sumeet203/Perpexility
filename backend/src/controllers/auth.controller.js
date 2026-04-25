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
      to: email,
      subject: "Welcome to Perpexility",
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Welcome to Perpexility</title>
</head>

<body style="margin:0; padding:0; background-color:#f4f6f8; font-family:Arial, sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f6f8; padding:20px;">
    <tr>
      <td align="center">

        <!-- Main Container -->
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:10px; overflow:hidden; box-shadow:0 4px 10px rgba(0,0,0,0.05);">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(90deg, #4f46e5, #6366f1); padding:20px; text-align:center; color:white;">
              <h1 style="margin:0; font-size:24px;">🚀 Perpexility AI</h1>
              <p style="margin:5px 0 0; font-size:14px;">Your Smart AI Chat Companion</p>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding:30px; color:#333;">
              <h2 style="margin-top:0;">Welcome, ${username}! 👋</h2>
              
              <p>
                We're excited to have you on board with <strong>Perpexility</strong> — your intelligent AI chatbot 
                designed to assist, guide, and empower your daily tasks.
              </p>

              <p>
                Whether you want help with coding, content creation, problem-solving, or just exploring ideas, 
                our AI is here for you 24/7.
              </p>

              <ul style="padding-left:20px;">
                <li>💡 Instant answers & smart suggestions</li>
                <li>⚡ Fast and interactive conversations</li>
                <li>🧠 Built to boost your productivity</li>
              </ul>

              <!-- CTA Button -->
              <div style="text-align:center; margin:30px 0;">
                <a href="#" style="background:#4f46e5; color:white; padding:12px 25px; text-decoration:none; border-radius:6px; font-weight:bold;">
                  Start Chatting 🚀
                </a>
              </div>

              <p>
                If you have any questions, feel free to reach out. We're here to help!
              </p>

              <p>
                Best regards,<br/>
                <strong>The Perpexility Team</strong>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f9fafb; padding:20px; text-align:center; font-size:12px; color:#777;">
              <p style="margin:0;">© ${new Date().getFullYear()} Perpexility. All rights reserved.</p>
              <p style="margin:5px 0;">
                Follow us:
                <a href="#" style="color:#4f46e5; text-decoration:none;">Twitter</a> |
                <a href="#" style="color:#4f46e5; text-decoration:none;">LinkedIn</a>
              </p>
              <p style="margin:5px 0;">You received this email because you signed up for Perpexility.</p>
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>
`,
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
