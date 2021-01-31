
const geocode = require('./back')
const chalk = require('chalk');


const address = process.argv[2]

if (!address) {
    console.log('Please provide an add')
} 
else {
    geocode(address, (error, data) => {
        if (error) {
            return console.log(error)
        }
            console.log(chalk.blue(data.body))
        })
    }

