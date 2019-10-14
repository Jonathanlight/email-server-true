import test from 'ava'
import compare from '.'
const emails = require('./source_emails.json')
var status = true;
var mail = 'johndoa@gmail.com';

var newDomain = ['postman.fr', 'node.com'];

test('throws on invalid parameter', t => {
    t.throws(() => compare('johndoe'))
})

test('email value as string', t => {
    t.deepEqual(compare('johndoe@gmail.com', emails), true)
})

test('email valid', t => {
    for (const email of emails) {
        t.is(compare(mail, emails), status)
    }
})
