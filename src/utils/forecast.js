const request = require("request")

const forecast = (latitude,longitude, callback) => {

    const url = "http://api.weatherstack.com/current?access_key=acceaf02a723aad704ccd4f1e77e4681&query=" + longitude + "," + latitude
    
    request({url, json:true},(error, { body })=> {
        if (error) {
            callback("Unable to connect to weather service!")
        } else if (body.error) {
            callback("Unable to find location", undefined)
            callback(url)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degrees out. It feels like " + body.current.feelslike + " degrees out.")
        }
    })
}

module.exports = forecast