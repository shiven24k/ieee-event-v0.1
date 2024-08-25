const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  // connect with the smtp
  let transporter = await nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "kashyapshiven2002@gmail.com",
      pass: "pxhqrrgrjkqmfzii",
    },
  });

  let info = await transporter.sendMail({
    from: '"Demo 👻" <demo@gmail.com>', // sender address
    to: "user@gmail.com", // list of receivers
    subject: "Hello ", // Subject line
    text: "Hello how are you", // plain text body
    html: "<b>Hello my name is demo </b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  res.json(info);
};

module.exports = sendMail;