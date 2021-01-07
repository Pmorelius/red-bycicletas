const nodemailer = require('nodemailer');

const mailConfig = {
	host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'savanah.thompson@ethereal.email',
        pass: '5668DwAst7V1Wap3B6'
    }
};


module.exports = nodemailer.createTransport(mailConfig);



