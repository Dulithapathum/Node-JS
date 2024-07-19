import "dotenv/config";
import { createTransport } from "nodemailer";

const mailServer = createTransport({
  service: "gmail",
  auth: {
    user: process.env.FROM_EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

mailServer.sendMail(
  {
    from: process.env.FROM_EMAIL,
    to: process.env.TO_EMAIL,
    subject: "Test mg",
    text: "This is test massage",
    html: `<h1>Dulitha pathum</h1>`,
  },
  (error, info) => {
    if (error) {
      console.log("can not send email");
    } else {
      console.log("send mail");
    }
  }
);
