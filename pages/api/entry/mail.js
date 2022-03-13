import nodemailer from "nodemailer";
import mailGun from "nodemailer-mailgun-transport";
import fs from "fs";
import path from "path";
import Mustache from "mustache";


const auth = {
  auth: {
    api_key: "72742e693b7bec2020a3d199adf7f35a-45f7aa85-d0478ae9",
    domain: "sandboxdd09af6158b148a6a91d7014ff571236.mailgun.org",
  },
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (username, email, messageBody, cb) => {
  console.log(path.join(__dirname, "email.html"));
  // const emailTemplate = Mustache.render(htmlTemplate, { name: "Pauliski" });
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
