const request = require('request')

const geocode = (address, callback) => {
    const url = 'http://numbersapi.com/' + address

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (response=== 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, response)
        }
    })
}

module.exports = geocode