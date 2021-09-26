'use strict';

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(
  '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'
);

const sendMail = (email, html) => {
  const msg = {
    to: email,
    from: {
      email: 'ntthanh.fit.hcmus@gmail.com',
      name: 'JBDesks',
    },
    subject: 'Forgot Password',
    text: html,
    html: html,
  };
  sgMail.send(msg).then(
    () => {},
    (error) => {
      console.error(error);

      if (error.response) {
        console.error(error.response.body);
      }
    }
  );
};

const SendGridService = {
  sendMail,
};

module.exports = SendGridService;
