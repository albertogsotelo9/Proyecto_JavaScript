/*


let nombre ="Alberto";
var a = 3;

let nombreIngresado = prompt("Ingrese su nombre");


alert ("hola" +" "+ nombreIngresado + " "+ "Bienvenido!")

var numero = 1;
console.log(numero === 1);
*/
var respuesta = prompt("Hiciste la tarea?");

if(respuesta.toLowerCase() === "si"){
    alert ("puedes salir")
}else{
    alert("NO puede salir")
}
var edad = parseInt(prompt ("Ingrese su edad"));

if(edad<= 12){
    alert("no puedes entrar")
}else if(edad > 12 && edad <18){
    alert ("podés entrar con un adulto")
}else{
    alert("podés entrar")
}

/*
var salir = true;
var comer = false;

console.log(salir && !comer);
*/