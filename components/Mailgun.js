//const express = require('express');

const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);
const domain = 'swiblu.lewys.io'

const mg = mailgun.client({
    username: 'api',
    key: process.env.MAILGUN_API_KEY || 'c0a4665e6ff9c74c23ac3fe57f40b42c-1553bd45-f8e01f40',
    url: 'https://api.eu.mailgun.net',
    public_key: process.env.MAILGUN_PUBLIC_KEY || 'pubkey-5321ec047b91d3f701009b14545fc83a'
});

//const mgTest = mailgun.client({username: 'api', key: process.env.MAILGUN_API_KEY || 'c0a4665e6ff9c74c23ac3fe57f40b42c-1553bd45-f8e01f40', url: 'https://api.eu.mailgun.net'});

const sendEmail = (firstname, mail) => {

  const data = {
    from: 'lucas@lewys.io',
    to: 'maxime@lewys.io',
    subject: 'Inscription swiblu',
    text: `${firstname} souhaite s'inscrire avec cette adresse mail ${mail}`
  };
  
  mg.messages.create(domain, data)
    .then(msg => console.log(msg)) // logs response data
    .catch(err => console.log(err)); // logs any error
}

export default sendEmail