

const URL = "https://api.openweathermap.org/data/2.5/weather?q=New%20york,us&units=imperial&APPID=8f3fc16f81290ad9120f68d8c7b94646"

$.ajax(URL).then(function (data) {
    console.log('weather is ready')
    console.log(data)
})
