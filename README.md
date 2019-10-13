# email-server-true

> Check if the domain mail is correct or exists

## Install

```
$ npm install @jonathankablan/email-server-true
```

## Usage

```js
const email = require('@jonathankablan/email-server-true')

// You can use a string
email('johndoe') // return 'undefined' if email is invalid 

email('johndoe@helloworld.fr') // return 'false' if email not match

email('johndoe@gmail.com') // return 'true' if email match

// list of domains verify
"gmail.com",
"yahoo.fr",
"hotmail.fr",
"hotmail.com",
"outlook.fr",
"live.fr",
"live.com",
"outlook.com",
"orange.fr",
"sfr.fr",
"icloud.com",
"me.com",
"mac.com",
"labanquepostale.fr",
"laposte.net",
"wanadoo.fr"

// you can also add your domain list
var newDomain = [
    'discord.com',
    'enterprise.net'
];

email('johndoe@discord.com', newDomain) // return true
```

## Resources
- [Regexr](https://regexr.com/) - Application regexr

## License
MIT © Jonathan Kablan

