console.log("bienvenido")
alert("bienvenido, dejame presentarme");
alert("mi nombre es botcito27, soy una calculadora programada para entretenerte");

let nombredeUsuario = prompt("¿cual es tu nombre?");

    if(nombredeUsuario ==""){
        nombredeUsuario = prompt("no podemos iniciar si no pones un nombre :)");
    }
    
    while(nombredeUsuario ==""){
        nombredeUsuario = prompt("porfavor pon un nombre >:[");
    }  
   

    if (nombredeUsuario !="") {
        let respuesta = prompt("Hola " + nombredeUsuario + " ¿quieres jugar un juego?");
        switch(respuesta){

            case ("si"):
                alert("Genial!!! Jugaremos piedra, papel o tijera");
                let i = 1;
                while(i==1){
                let juego = prompt("elije piedra, papel o tijera");
                switch(juego){
                    case "piedra":
                        alert("EMPATEEEE!!!!");
                        alert("suerte la proxima");
                        i=0;
                        break;
                    case "papel":
                        alert("NOOOOO, me ganasteee");
                        alert("bien jugado, me diverti mucho, hasta la proxima");
                        i=0;
                        console.log("fin")
                        break;
                    case "tijera":
                        alert("GANEEEEE");
                        alert("mejor suerte la proxima :b");
                        i=0;
                        console.log("fin")
                        break;
                    default:
                        prompt("elije piedra, papel o tijera");
                        i=1;
                        console.log("repetir")
                        break;
                    }}
                break;
            case "no":
                alert("gracias por participar");
                break;
            default:
                prompt("responde si o no");
                break;
        }
}
alert("muy bien "+nombredeUsuario+", ahora.... vayamos a lo realmente interasante");
alert("esto fue solo una prueba, el juego real viene ahora")
alert("por favor "+nombredeUsuario+", presiona el sigt boton para pasar al verdadero juego");