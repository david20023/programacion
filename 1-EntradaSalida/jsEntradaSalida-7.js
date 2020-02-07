/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var Uno ;
    var Dos ;

    Uno = parseInt(document.getElementById("numeroUno").value);

    Dos = parseInt(document.getElementById("numeroDos").value);

    alert(Uno+Dos)
}

function restar()
{
    var Tres  ;
    var Cuatro;

    Tres = parseInt(document.getElementById("numeroUno").value);
    Cuatro = parseInt(document.getElementById("numeroDos").value);

    alert(Tres-Cuatro);

}

function multiplicar()
{ 
    var Cinco;
    var Seis;

    Cinco = parseInt(document.getElementById("numeroUno").value);
    Seis = parseInt(document.getElementById("numeroDos").value);

    alert(Cinco*Seis);
}

function dividir()
{
    var Siete;
    var Ocho;

    Siete = parseInt(document.getElementById("numeroUno").value);
    Ocho = parseInt(document.getElementById("numeroDos").value);

    alert(Siete/Ocho);
}

