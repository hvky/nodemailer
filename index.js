const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: "smtp.mail.yahoo.com",
  port: 465,
  service: "yahoo",
  secure: false,
  auth: {
    user: process.env.USER,
    pass: process.env.PASSWORD,
  },
  debug: false,
  logger: true,
  tls: {
    rejectUnauthorized: false,
  },
});

let message = {
  from: process.env.USER,
  to: process.env.USER_DESTINY,
  subject: "Message title",
  html: "<h1>Hello World?</h1>",
};

//***** CONNECTION CHECK *****
transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
}); 

//***** MESSAGE SENT *****
transporter.sendMail(message, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
