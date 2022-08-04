// OBTENEMOS LA REFERENCIA AL DIV CON id=Resultado
var R=document.getElementById("Resultado");
// SE CREA FUNCION PARA CAMBIAR LAS PROPIEDADES DEL DIV CON id=Resultado
function Propiedades (){
    R.style.borderStyle="solid";
    R.style.textAlign="center";
    R.style.fontFamily="arial";
    R.style.fontSize="30px";
    
}

function Obtenervalores (){
    // OBTENEMOS EL VALOR DEL INPUT TEXT CON  id=numero1
    var n1=document.getElementById("numero1").value;
    // POR OBTENERSE COMO VARIAABLE TIPO CADENA CONVERTIMOS A ENTERO DE BASE 10
    n1=parseInt(n1,10);
    // OBTENEMOS EL VALOR DEL INPUT TEXT CON  id=numero2
    var n2=document.getElementById("numero2").value;
    // POR OBTENERSE COMO VARIABLE TIPO CADENA CONVERTIMOS A ENTERO DE BASE 10
    n2=parseInt(n2,10);
    return[n1,n2];
}

function Sumar (){
    // LLAMAR FUNCION OBTENERVALORES
    [n1,n2]=Obtenervalores();
    // LLAMAR FUNCION PROPIEDADES
    Propiedades();
    // PODEMOS USAR n1 y n2 EN LA FUNCION YA QUE SON VARIABLES GLOBALES
    // DEJAMOS EL RESULTADO EN EL DIV QUE AHORA LO MANEJAMOS CON LA VARIABLE R
    R.innerHTML="El resultado es: "+(n1+n2);
}

function Restar (){
    // LLAMAR FUNCION OBTENERVALORES
    [n1,n2]=Obtenervalores();
    // LLAMAR FUNCION PROPIEDADES
    Propiedades();
    // DEJAMOS EL RESULTADO EN EL DIV QUE AHORA LO MANEJAMOS CON LA VARIABLE R
    R.innerHTML="El resultado es: "+(n1-n2);
}

function Multiplicar (){
    // LLAMAR FUNCION OBTENERVALORES
    [n1,n2]=Obtenervalores();
    // LLAMAR FUNCION PROPIEDADES
    Propiedades();
    // DEJAMOS EL RESULTADO EN EL DIV QUE AHORA LO MANEJAMOS CON LA VARIABLE R
    R.innerHTML="El resultado es: "+(n1*n2);
}

function Division (){
    // LLAMAR FUNCION OBTENERVALORES
    [n1,n2]=Obtenervalores();
    // LLAMAR FUNCION PROPIEDADES
    Propiedades();
    if (n2===0)
        d="Error";
    else
        d=n1/n2;
    // DEJAMOS EL RESULTADO EN EL DIV QUE AHORA LO MANEJAMOS CON LA VARIABLE R
    R.innerHTML="El resultado es: "+(d);
}

function Potenciacion (){
    // LLAMAR FUNCION OBTENERVALORES
    [n1,n2]=Obtenervalores();
    // LLAMAR FUNCION PROPIEDADES
    Propiedades();
    // DEJAMOS EL RESULTADO EN EL DIV QUE AHORA LO MANEJAMOS CON LA VARIABLE R
    R.innerHTML="La potencia de los números es: "+(Math.pow(n1,n2));
}



