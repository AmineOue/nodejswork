const password = require('generate-password')

const generate_password =  password.generate({
    length:11,
    numbers:true
});
console.log(generate_password)