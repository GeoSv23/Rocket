const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "svidchenko23@gmail.com", // Ваш адрес электронной почты
      pass: "g.s.230596", // Пароль от электронной почты
    },
  });

  const mailOptions = {
    from: "svidchenko23@gmail.com",
    to: "svidchenko23@gmail.com", // Адрес электронной почты получателя
    subject: "Новое сообщение от формы",
    text: `Имя: ${name}\nE-mail: ${email}\nСообщение: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send("Ошибка при отправке сообщения");
    } else {
      console.log("Email отправлен: " + info.response);
      res.status(200).send("Сообщение успешно отправлено");
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
