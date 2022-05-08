import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from '../mail-adapter'

const transport = nodemailer.createTransport({
   host: "smtp.mailtrap.io",
   port: 2525,
   auth: {
      user: "8f28a35ea7e757",
      pass: "6e2b52ebc9fb83"
   }
})

export class NodemailerMailAdapter implements MailAdapter {
   async sendMail ({ subject, body }: SendMailData) {
      await transport.sendMail({
         from: 'Equipe Feedget<oi@feedget.com>',
         to: 'Isra <israeldsouza13@gmail.com>',
         subject,
         html: body
      })
   }
}