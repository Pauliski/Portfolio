import nodemailer from "nodemailer";
import mailGun from "nodemailer-mailgun-transport";
import dotenv from 'dotenv'

dotenv.config()


const auth = {
  auth: {
    api_key: process.env.API_KEY,
    domain: process.env.DOMAIN,
  },
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (username, email, messageBody, cb) => {
  const mailOptions = {
    from: email,
    to: "arokoola92@yahoo.com",
    subject: `Job Offer from ${username}`,
    text: messageBody

  };

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, data);
    }
  });
};

export default sendMail;
