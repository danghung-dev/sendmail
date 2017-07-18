import nodemailer from 'nodemailer';
import path from 'path'
import config from '../../config/config'

const EmailTemplate = require('email-templates').EmailTemplate

const templatesDir = path.resolve(__dirname, '..', 'templates')
const template = new EmailTemplate(path.join(templatesDir, 'bill'))

// create reusable transporter object using the default SMTP transport
const transport = nodemailer.createTransport({
  host: config.nodeMailer.host,
  port: config.nodeMailer.port,
  auth: {
    user: config.nodeMailer.user,
    pass: config.nodeMailer.password
  }
})
// let locals = {
//   email: 'muaiphone123@gmail.com',
//   name: {
//     first: 'Hung',
//     last: 'Viet'
//   }
// }

// // Send a single email
// template.render(locals, function (err, results) {
//   if (err) {
//     return console.error(err)
//   }

//   transport.sendMail({
//     from: 'MiwaSoft <miwasoft@gmail.com>',
//     to: locals.email,
//     subject: 'Test eamil!',
//     html: results.html,
//     text: results.text
//   }, (err2, responseStatus) => {
//     if (err2) {
//       return console.error(err2)
//     }
//     console.log(responseStatus.message)
//   })
// })

function send(mailObject) {
  template.render(mailObject, (error, results) => {
    if (error) {
      return console.log('there was an error while trying render', error)
    }
    transport.sendMail({
      from: mailObject.from ? mailObject.from : 'MiwaSoft <miwasoft@gmail.com>',
      to: mailObject.to,
      subject: mailObject.subject ? mailObject.subject : 'Test eamil!',
      html: results.html,
      text: results.text
    }, (err2, responseStatus) => {
      if (err2) {
        return console.log('there was an error while trying send mail', err2)
      }
      console.log('status of email', responseStatus)
    })
  })
}

module.exports = {
  send,
}
