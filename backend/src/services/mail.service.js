import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth:{
        type: "OAuth2",
        user : process.env.GOOGLE_USER,
        clientId : process.env.GOOGLE_CLIENT_ID,
        clientSecret : process.env.GOOGLE_CLIENT_SECRET,
        refreshToken : process.env.GOOGLE_REFRESH_TOKEN,
        accessToken: process.env.GOOGLE_ACCESS_TOKEN, // 👈 important
    },
});

// Verify the connection configuration
transporter.verify((error,success)=>{
    if(error){
        console.log('error connecting to email server',error);
    }else{
        console.log('Email server is ready to take messages');
    }
});

export async function sendEmail({to,subject,text,html}){
    const mailOptions = {
        from :  process.env.GOOGLE_USER,
        to,
        subject,
        html,
        text
    };
    const details = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully",details);
    
}
