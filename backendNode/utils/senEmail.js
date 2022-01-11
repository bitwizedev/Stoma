const nodemailer = require("nodemailer");



const sendEmail = async(emai, subject, text)=>{
    try{
        const transporter = nodemailer.createTransport({
            service:'gmail',
            port: 587,
            secure:true,
            auth:{
                user:db.user,
                pass: db.pass
            },
        });

        await transporter.sendMail({
            from: 'developmentbitwize@gmail.com',
            to: newuser.email,
            subject: "Welcome to STOMA",
            text: "Test mail"
        });
        console.log("email was sent");
    } catch(error){
        console.log(error, "email not sent");
    }
};

module.exports = sendEmail;