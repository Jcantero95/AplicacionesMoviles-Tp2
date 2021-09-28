function validar(){
    var form = document.form;
    var nombre = form.nombre.value;
    var apellido = form.apellido.value;
    var fechadenac = form.fec_de_nac.value;
    var sexo = form.sexo;
    var correo = form.correo.value;

    validarTexto(nombre, apellido);

    validarFormatoFecha(fechadenac);

    validarSexo(sexo);

    validarEmail(correo);


    if((nombre!="")&&(apellido!="")&&(fechadenac !="")&&(correo!="")){
        //alert(nombre, apellido, fechadenac, correo)
        alert("Los datos ingresados son:\n"+nombre+"\n"+apellido+"\n"+fechadenac+"\n"+correo);
        form.submit();
    }else{
        pass;
    }

}

function validarTexto(valor, valor2){
    if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
        alert("Completa el campo nombre");

        }
    if( valor2 == null || valor2.length == 0 || /^\s+$/.test(valor2) ) {
        alert("Completa el campo Apellido");
        
        }

    else{
        return valor, valor2;
    }
}

function validarFormatoFecha(campo) {
    //Expresión regular contra la que comparar formato de fechas, 2 valores para dia, 2 para mes y 4 para al
      var RegExPattern = /^\d{1,2}\/\d{1,2}\/\d{2,4}$/;
      //match() hace lo mismo que test() y comparo para que sea distinto de vacio
      if ((campo.match(RegExPattern)) && (campo!='')) {
            return campo;
      } else {
            alert("Formato inválido");
      }
}

function validarSexo(sexo){
    if (sexo[0].checked == true) {
        sexo = "Mujer";
        return sexo;
    } 
    
    if (sexo[1].checked ==true) {
        sexo = "Hombre";
        return sexo
    }  
    
    if (sexo[2].checked == true) {
        sexo = "No dice";
        return sexo;
    }
    else{
        alert("Complete el campo sexo");
    }
}

function validarEmail(correo){
    //Expresión regular contra la que comparar mails
    var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    //Busca ocurrencias entre la expresión regular y el correo ingresado
    var esValido= expReg.test(correo);
    if(esValido==true){
        return esValido;
    }
    else{
        alert("Correo invalido");
    }
}



function CancelarEncuesta(){
	var respuesta = confirm("¿Desea cancelar?");
	if (respuesta==true){
		history.back();
	}
	else{
		return false;
	}
}

//JQUERY

$(document).ready(opacidad);




//la funcion opacidad contiene el evento click, creo una variable global "detectarOpacidad" en false, en funcion a ella doy o quito la opacidad
function opacidad(){
	var detectarOpacidad = false;
	$(".Producto").click(function(){
		if(detectarOpacidad){
			$(this).css('background-color','purple');
			$(this).fadeTo(1, 0.75);
			detectarOpacidad=false;
		}else{
			$(this).fadeTo(1, 1);
			$(this).css('background-color','');
			detectarOpacidad=true;
		}
	});
};



/*function getDatos(nombre, apellido, fechadenac, correo){
    //llamo a las variables globales y las muestro en un alert
    alert("Los datos ingresados son:\n"+nombre+"\n"+apellido+"\n"+fechadenac+"\n"+correo);
}*/
