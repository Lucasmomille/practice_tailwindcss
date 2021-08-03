//const express = require('express');

const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);
const domain = 'your domain'

const mg = mailgun.client({
  username: 'api',
  key: process.env.MAILGUN_API_KEY || 'YOUR API KEY',
  url: 'https://api.eu.mailgun.net',
  public_key: process.env.MAILGUN_PUBLIC_KEY || 'YOUR PUblic KEY'
});

//const mgTest = mailgun.client({username: 'api', key: process.env.MAILGUN_API_KEY || 'YOUR API KEY', url: 'https://api.eu.mailgun.net'});

const sendEmail = (firstname, mail) => {

  const data = {
    from: 'SOME MAIL',
    to: 'SOME MAIL',
    subject: 'SOME SUBJECT',
    text: `${firstname} souhaite s'inscrire avec cette adresse mail ${mail}`
  };

  mg.messages.create(domain, data)
    .then(msg => console.log(msg)) // logs response data
    .catch(err => console.log(err)); // logs any error
}

export default sendEmail