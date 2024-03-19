import express from 'express';
import nodemailer from 'nodemailer';
const router = new express.Router();


router.post('/users', (req,res) =>{
    const data = req.body;
    const fullName = data.fullName;
    const vehicle = data.vehicle;
    const mobile = data.mobile;
    
    try {
        const transporter  = nodemailer.createTransport({
            service: "gmail",
            auth:{
                user: process.env.EMAIL, // Enter Your Email Address for send to other email address
                pass: process.env.PASSWORD // Enter Your Password
            }
        })
        
        const mailOptions = {
            from: process.env.EMAIL, 
            to: process.env.SHOW_EMAIL, 
            subject: "Contact Form",
            text: `Name: ${fullName} \n Vehicle: ${vehicle} \n Mobile: ${mobile}`
        }
        
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
            } else {
                console.log("Email sent: " + info.response);
                res.status(200).send(info.response);
            }
        })
    } catch (error) {
        
        console.log(error);
        res.status(500).send(error);
        
    }
})

export default router;