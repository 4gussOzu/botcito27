console.log("bienvenido")
let nombredeUsuario = prompt("bienvenido mi nombre es botcito27 ¿cual es el tuyo?");

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
                while(respuesta=="si"){
                let juego = prompt("elije piedra, papel o tijera");
                switch(juego){
                    case "piedra":
                        alert("EMPATEEEE!!!!");
                        alert("suerte la proxima");
                        respuesta="";
                        break;
                    case "papel":
                        alert("NOOOOO, me ganasteee");
                        alert("bien jugado, me diverti mucho, hasta la proxima");
                        respuesta="";
                        break;
                    case "tijera":
                        alert("GANEEEEE");
                        alert("mejor suerte la proxima :b");
                        respuesta="";
                        break;
                    default:
                        prompt("elije piedra, papel o tijera");
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
    