const salida= () =>{
    if(confirm("¿Desea finalizar el Juego?")){
        return true;
    }
    return false;
}

let pc=Math.floor(Math.random()*101);
alert("<< ADIVINA EL NÚMERO ESCONDIDO >>\n Este juego consiste en adivinar un número que el computador a seleccionado de forma aleatoria en un rango de 0 al 100...\n"+
"Iniciará con 200 puntos y por cada intento fallido perderá un monto que inicia en 5 puntos e incrementará 5 puntos adicionales por cada intento, es decir en la primer intento fallido pierde 5 puntos, luego 10, 15, 20...etc.\nEl juego finalizará al perder todos los puntos o al adivinar el número escondido...JUGUEMOS.");
let user;
let puntaje=200;
let puntosPerdidos=5;
let opciones="";
let i=1;
do{        
    user=parseInt(prompt(`INTENTO Número: ${i}.\nNumeros ingresados anteriormente[${opciones}]\nPuntaje actual: << ${puntaje} PUNTOS >>\n\nIngrese su opción:`));            
    if(isNaN(user)){          
        if(salida()){
            break;
        }
    }
    if(user!=pc && !isNaN(user)){
        opciones+=user+", ";
        i++;
        if(user>pc){
            alert(`Pista: el número es menor que ${user}\nPierde ${puntosPerdidos} puntos.`);
        }else{
            alert(`Pista: el número es mayor que ${user}\nPierde ${puntosPerdidos} puntos.`);
        }                
        puntaje-=puntosPerdidos;
        puntosPerdidos+=5;
    }  

}while(user!=pc && puntaje>0);
if(isNaN(user)){
    alert("Gracias por jugar con nosotros");
}else if(user==pc){
    alert(`¡FELICITACIONES!\nAdivinó, el número que buscaba era el ${pc}\nSu puntaje es de: ${puntaje} puntos.`);
}
else{
    alert(`PERDIÓ, sus puntos han llegado a 0`);
}

