const sendEmail = require('gmail-send')({
    user : 'nurrukhans@gmail.com',
    pass : 'vupxlupgrkgbheoy',
    to : 'rukhansaputra225@gmail.com',
    subject : 'hai, kenalin aku adalah akunmu yang satu lagi'
});
sendEmail({
    html:    `
            <h1>Testing</h1>
            <h2>Menggunakan modul</h2>
            `,
  }, (error, result, fullResult) => {
    if (error) console.error(error);
    console.log(result);
});
module.exports = sendEmail;