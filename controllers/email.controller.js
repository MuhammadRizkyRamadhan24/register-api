const nodemailer = require('nodemailer');

const emailController = {

    postHandler : (req,res) => {
    let payload = {
        email: req.body.email
    }

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'zidan.muh88@gmail.com',
            pass: 'gangbang123',
        }
    });
    var mailOptions = { 
        from: 'unknown',
        to: req.body.email,
        subject: 'Reset Password',
        html: ' <a href=" http://localhost:9000/</a>'
      };
      transporter.sendMail (mailOptions, (err, info) => {
        if (err) throw err;
        console.log('Email sent: ' + info.response);
      });
      res.send("Check your email");
    },
}

module.exports = emailController;