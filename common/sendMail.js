const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "myfeedbackapp05@gmail.com",
    pass: "dpfnaohhnwoiaale",
  },
});

async function mailTo(title, file, issueId, issue, description, client) {
  const info = await transporter.sendMail({
    from: "myfeedbackapp05@gmail.com",
    to: client,
    subject: `${title} [${issue}]`,
    html: {
      path: `${process.env.SERVER_URL}/template/${file}?issueId=${issueId}&issue=${issue}&description=${description}`,
    },
  });

  console.log("Message sent: %s", info.messageId);
}

module.exports = mailTo;
