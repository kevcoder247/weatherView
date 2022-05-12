
//VARIABLES
//working api link=====================
// const URL = "https://api.openweathermap.org/data/2.5/weather?q=New%20york,us&units=imperial&APPID=8f3fc16f81290ad9120f68d8c7b94646";
//====================================
//Figure out how to modify the api when input is sumbitted so the right call is made when different cities are inputted
const URL = "https://api.openweathermap.org/data/2.5/weather?q=APPID=8f3fc16f81290ad9120f68d8c7b94646";
// https://api.openweathermap.org/data/2.5/weather?q=boston,us&units=imperial&APPID=8f3fc16f81290ad9120f68d8c7b94646
                
const $temp = $('#temp');
const $name = $('#name');
const $high = $('#high');
const $low = $('#low');
const $form = $('form');
const $input = $(`input[type="text"]`)


//ELEMENT REFERENCES
$form.on('submit', handleGetData)


//EVENT LISTENERS

//FUNCTIONS

function link(query){
    return encodeURI(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=imperial&APPID=8f3fc16f81290ad9120f68d8c7b94646`);
}

function handleGetData(event){
    
    event.preventDefault()
    const userInput = $input.val();

    $.ajax(link(userInput)).then(function (data) {
        console.log('weather is ready')
        console.log(data)
        $temp.text(data.main.temp);
        $name.text(data.name);
        $high.text(data.main.temp_max);
        $low.text(data.main.temp_min);
    }, function(error){
        console.log('something is wrong');
        console.log(error)
    })
}



