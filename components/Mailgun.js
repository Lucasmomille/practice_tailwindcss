//const express = require('express');

const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);
const domain = 'sandbox0372ec5f80a344c4a4127b58bb216010.mailgun.org'

const mg = mailgun.client({
    username: 'api',
    key: process.env.MAILGUN_API_KEY || '75fe2e533fec92af97ee26a1745d8b9e-b6d086a8-d066dd74',
    public_key: process.env.MAILGUN_PUBLIC_KEY || 'pubkey-e2983dbcac7a6f28f7ac75b3041f7379'
});

const data = {
	from: 'Myself <lucas@lewys.io>',
	to: 'lucas@lewys.io',
	subject: 'Hello',
	text: 'Testing some Mailgun awesomness!'
};

mg.messages.create(domain, data)
  .then(msg => console.log(msg)) // logs response data
  .catch(err => console.log(err)); // logs any error