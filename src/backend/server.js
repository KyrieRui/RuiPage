const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3001;

// 中间件，用于解析请求体中的 JSON 数据
app.use(bodyParser.json());

// 跨域处理，如果前端与后端不在同一个域上，需要处理跨域问题
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// POST 请求处理程序，用于接收来自前端的邮件发送请求
app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  // 创建一个Nodemailer传输对象
  let transporter = nodemailer.createTransport({
    // 设置您的SMTP服务提供商的SMTP服务器地址
    host: "smtp.example.com",
    port: 587, // 默认SMTP端口为587
    secure: false, // true for 465, false for other ports
    auth: {
      user: "your_email@example.com", // 您的邮箱地址
      pass: "your_password", // 您的邮箱密码
    },
  });

  // 邮件选项
  let mailOptions = {
    from: "your_email@example.com", // 发件人邮箱地址
    to: "recipient@example.com", // 收件人邮箱地址
    subject: "New Contact Message", // 邮件主题
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `, // 邮件正文
  };

  // 发送邮件
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).json({ success: false, message: "Error sending email" });
    } else {
      console.log("Email sent: " + info.response);
      res
        .status(200)
        .json({ success: true, message: "Email sent successfully" });
    }
  });
});

// 启动Express服务器
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
