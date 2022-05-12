
//VARIABLES
const URL = "https://api.openweathermap.org/data/2.5/weather?q=New%20york,us&units=imperial&APPID=8f3fc16f81290ad9120f68d8c7b94646";
const $temp = $('#temp');
const $name = $('#name');
const $high = $('#high');
const $low = $('#low');



//ELEMENT REFERENCES

//EVENT LISTENERS

//FUNCTIONS

function handleGetData(){
    $.ajax(URL).then(function (data) {
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

