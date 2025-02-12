let tabla = new Array (10);

tabla[0] = ["Shelby GT 500 1967","shelby.jpg"] ;
tabla[1] = ["BMW E32 740i V8","e32.jpg"] ;
tabla[2] = ["BMW E46 M3","e46.jpg"] ;
tabla[3] = ["Citröen DS 21 (Tiburon)","tiburon.webp"] ;
tabla[4] = ["Citröen C5 2005 MK2","c5.jpg"] ;
tabla[5] = ["Seat Leon MK1","leon.jpg"] ;
tabla[6] = ["BMW E36 M3","e36.jpg"] ;
tabla[7] = ["BMW E60 M5 V10","e60.jpg"] ;
tabla[8] = ["Toyota Supra MK4","supra.jpg"] ;
tabla[9] = ["Nissan r34 Skyline","r34.jpg"] ;

let sumador=-1

let boton = document.getElementById("siguiente");

function f_siguiente(){

if (sumador != 9){
sumador++
}    

console.log(sumador)
document.getElementById("titulo").innerHTML=tabla[sumador][0]
document.getElementById("imagen").src=tabla[sumador][1]  
}


function f_anterior(){
  
if (sumador > 0){
    sumador--
}    

    console.log(sumador)
    document.getElementById("titulo").innerHTML=tabla[sumador][0]
    document.getElementById("imagen").src=tabla[sumador][1]
}








