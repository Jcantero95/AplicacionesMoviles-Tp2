function validarEmail(correo){
    //Expresión regular contra la que comparar mails
    var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    //Busca ocurrencias entre la expresión regular y el correo ingresado
    var esValido= expReg.test(correo);
    if(esValido==true){
    	//si no es vacio lo guardo en una variable global para usarla en el GetDatos
        correo = document.getElementById("correo").value;
    }
    else{
        alert("correo invalido");
    }
}


function validarNombre(nombre){
    var nombre = document.getElementById("nombres").value;

    var nulo = null || nombre.length == 0 || /^\s+$/.test(nombre);
    //console.log(document.getElementById("nombres").value);
    if( nombre != nulo ) {
        nombre = document.getElementById("nombres").value;
        
        //return false;
        }
    else{
        alert("nombre inválido");
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


function validarFormatoFecha3(campo) {
    //Expresión regular contra la que comparar formato de fechas, 2 valores para dia, 2 para mes y 4 para al
      var RegExPattern = /^\d{1,2}\/\d{1,2}\/\d{2,4}$/;
      //match() hace lo mismo que test() y comparo para que sea distinto de vacio
      if ((campo.match(RegExPattern)) && (campo!='')) {
      		//Si el resultado es verdadero, lo guardo en una variable global
            fecha = document.getElementById("fec_de_nac").value;
      } else {
            alert("Formato inválido");
      }
}


function getDatos(){
	//llamo a las variables globales y las muestro en un alert
	alert("Los datos ingresados son:\n"+nombre.value+"\n"+correo.value+"\n"+fecha);
}



