const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/send-email", (req, res) => {
  const { input1, input2 } = req.body;

  // Настройте транспорт для отправки электронных писем (в примере используется Gmail)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "svidchenko23@gmail.com", // Ваш адрес электронной почты
      pass: "svidchenkog.s.2305", // Ваш пароль от электронной почты
    },
  });

  // Настройте содержимое электронного письма
  const mailOptions = {
    from: "svidchenko23@gmail.com",
    to: "svidchenko23@gmail.com", // Адрес электронной почты получателя
    subject: "Новое сообщение от формы",
    text: `Имя: ${input1}\nE-mail: ${input2}`,
  };

  // Отправьте электронное письмо
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

app.listen(5173, () => {
  console.log("Сервер запущен на порту 3000");
});
