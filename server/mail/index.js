import mail from './mail'

const mailobject = {
  from: 'MiwaSoft <miwasoft@gmail.com>',
  to: 'Viet Hung <muaiphone123@gmail.com>',
  subject: 'Test email!',
  title: {
    thank: 'Xin cám ơn bạn đã mua hàng của chúng tôi'
  },
}

mail.send(mailobject)
