$(document).ready(function(){
    $.getJSON('generated.json', function(dato, status, xhr){
        console.log("datos: " + dato +"\nStatus: " + " " + xhr.status);
    })
    
})