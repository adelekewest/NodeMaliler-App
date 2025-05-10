const nodemailer =require('nodemailer');

const sendEmail = async (to, messageContent) => {
    try {
        //create a trasnporter
        const transporter = nodemailer.createTransport({
            host:'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user:'adelekeolugbenga505@gmail.com',
                pass:'sfexwkmbqdkdjjbi'
        }
    })

        //message obj
        const message = {
            to,
            subject: "New Message from Nodemailer App",
            html: `
            <h3>You have received a new meessage from Nodemailer App</h3>
            <p>${messageContent}</p>
            `
        }

        //send the email
        const info = await transporter.sendMail(message);
        console.log("Message sent", info.messageId);
    
    } catch (error) {
        console.log("error");
        throw new Error("Email could not be sent");
    }
};

module.exports = sendEmail;