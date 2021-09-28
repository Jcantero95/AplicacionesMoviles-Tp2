$(document).ready(function(){

    $("#botonComic").click(function(){
        $.ajax({
            url: "./scripts/generated.json",
            type: "GET",
            dataType: "json",
            success: function(datos){
                $("#info").empty();
                $.each(datos, function(index, obj){
                    if(obj.categoria == "Comic"){
                        
                        $("#info").append("<article class='Producto'>" + "<img src=" + obj.picture + " width='200' height='200'></img>" + "<h4>" + obj.articulo + "</h4>" + "<h4>$" + obj.precio + "</h4>" + "<p>" + obj.descripcion + "</article>")
                    }      
            
            })}
            
        })
    }) 

    
    $("#botonBandas").click(function(){
        $.ajax({
            url: "./scripts/generated.json",
            type: "GET",
            dataType: "json",
            success: function(datos){
                $("#info").empty();
                    $.each(datos, function(index, obj){
    
                        if(obj.categoria == "Bandas"){
                            
                            $("#info").append("<article class='Producto'>" + "<img src=" + obj.picture + " width='200' height='200'></img>" + "<h4>" + obj.articulo + "</h4>" + "<h4>$" + obj.precio + "</h4>" + "<p>" + obj.descripcion + "</article>")
                        }
                })
            }   
        })
    })

    $("#botonDeportes").click(function(){
        $.ajax({
            url: "./scripts/generated.json",
            type: "GET",
            dataType: "json",
            success: function(datos){
                $("#info").empty();
                    $.each(datos, function(index, obj){
    
                        if(obj.categoria == "Deportes"){
                            $("#info").append("<article class='Producto'>" + "<img src=" + obj.picture + " width='200' height='200'></img>" + "<h4>" + obj.articulo + "</h4>" + "<h4>$" + obj.precio + "</h4>" + "<p>" + obj.descripcion + "</article>")
                        }
                })
            }   
        })
    })

    $("#botonAcc").click(function(){
        $.ajax({
            url: "./scripts/generated.json",
            type: "GET",
            dataType: "json",
            success: function(datos){
                $("#info").empty();
                    $.each(datos, function(index, obj){
    
                        if(obj.categoria == "Accesorios"){
                            console.log(obj);
                            $("#info").append("<article class='Producto'>" + "<img src=" + obj.picture + " width='200' height='200'></img>" + "<h4>" + obj.articulo + "</h4>" + "<h4>$" + obj.precio + "</h4>" + "<p>" + obj.descripcion + "</article>")
                        }
                })
            }   
        })
    })
})