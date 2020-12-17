const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=c6a54a76969972b0e828dcef3473b9c1&query=' + latitude + ',' + longitude + '&units=f'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_code+ ' It is currently ' + body.current.temperature + ' degress out. There is a ' + body.current.wind_speed + '% chance of rain.')
        }
    })
}

module.exports = forecast