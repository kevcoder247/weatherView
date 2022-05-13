
//VARIABLES
//working api link=====================
// const URL = "https://api.openweathermap.org/data/2.5/weather?q=New%20york,us&units=imperial&APPID=8f3fc16f81290ad9120f68d8c7b94646";
//====================================
//Figure out how to modify the api when input is sumbitted so the right call is made when different cities are inputted
const key = "8f3fc16f81290ad9120f68d8c7b94646"
// const URL = `https://api.openweathermap.org/data/2.5/weather?q=APPID=`;
const $temp = $('#temp');
const $name = $('#name');
const $high = $('#high');
const $low = $('#low');
const $form = $('form');
const $input = $(`input[type="text"]`)

//ELEMENT REFERENCES
$form.on('submit', GetData)

//EVENT LISTENERS

//FUNCTIONS
//funtion takes api link and concatenates user input(city)
function link(query){
    return encodeURI(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=imperial&APPID=${key}`);
}
function GetData(event){
    //prevents browser from reloading
    event.preventDefault()
    const userInput = $input.val();
    
    $.ajax(link(userInput)).then(function (data) {
        console.log('weather is ready')
        console.log(data)
        $name.html(data.name);
        $temp.text(`${data.main.temp}°`);
        $high.text(`${data.main.temp_max}°`);
        $low.text(`${data.main.temp_min}°`);
    }, function(error){
        console.log('something is wrong');
        console.log(error)
    })
    //clears input after user sumbits city
    $($input).val('');
}



