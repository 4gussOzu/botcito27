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

            case "Si":
                alert("Genial!!! Jugaremos piedra, papel o tijera");
                while(respuesta=="Si"){
                let juego1 = prompt("elije piedra, papel o tijera");
                switch(juego1){
                    case "piedra":
                        alert("EMPATEEEE!!!!");
                        alert("suerte la proxima");
                        break;
                    case "Piedra":
                        alert("EMPATEEEE!!!!");
                        alert("suerte la proxima");
                        break;
                    case "PIEDRA":
                        alert("EMPATEEEE!!!!");
                        alert("suerte la proxima");
                        break;
                    case "papel":
                        alert("NOOOOO, me ganasteee");
                        alert("bien jugado, me diverti mucho, hasta la proxima");
                        break;
                    case "Papel":
                        alert("NOOOOO, me ganasteee");
                        alert("bien jugado, me diverti mucho, hasta la proxima");
                        break;
                    case "PAPEL":
                        alert("NOOOOO, me ganasteee");
                        alert("bien jugado, me diverti mucho, hasta la proxima");
                        break;
                    case "tijera":
                        alert("GANEEEEE");
                        alert("mejor suerte la proxima :b");
                        break;
                    case "Tijera":
                        alert("GANEEEEE");
                        alert("mejor suerte la proxima :b");
                        break;
                    case "TIJERA":
                        alert("GANEEEEE");
                        alert("mejor suerte la proxima :b");
                        break;
                    default:
                        prompt("elije piedra, papel o tijera");
                        break;
                }
                }
            break;

            case "si":
                alert("Genial!!! Jugaremos piedra, papel o tijera");
                while(respuesta=="si"){
                let juego2 = prompt("elije piedra, papel o tijera");
                switch(juego2){
                    case "piedra":
                        alert("EMPATEEEE!!!!");
                        alert("suerte la proxima");
                        break;
                    case "Piedra":
                        alert("EMPATEEEE!!!!");
                        alert("suerte la proxima");
                        break;
                    case "PIEDRA":
                        alert("EMPATEEEE!!!!");
                        alert("suerte la proxima");
                        break;
                    case "papel":
                        alert("NOOOOO, me ganasteee");
                        alert("bien jugado, me diverti mucho, hasta la proxima");
                        break;
                    case "Papel":
                        alert("NOOOOO, me ganasteee");
                        alert("bien jugado, me diverti mucho, hasta la proxima");
                        break;
                    case "PAPEL":
                        alert("NOOOOO, me ganasteee");
                        alert("bien jugado, me diverti mucho, hasta la proxima");
                        break;
                    case "tijera":
                        alert("GANEEEEE");
                        alert("mejor suerte la proxima :b");
                        break;
                    case "Tijera":
                        alert("GANEEEEE");
                        alert("mejor suerte la proxima :b");
                        break;
                    case "TIJERA":
                        alert("GANEEEEE");
                        alert("mejor suerte la proxima :b");
                        break;
                    default:
                        prompt("elije piedra, papel o tijera");
                        break;
                }
                }
            break;

            case "no":
                alert("gracias por participar");
                break;
            
            case "No":
                alert("gracias por participar");
                break;

            default:
                prompt("responde si o no");
                break;
        }
    } 
    