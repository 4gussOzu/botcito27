const seccionBatalla = document.getElementById('campo-batalla');
const imgAtaqueJugador = document.getElementById('img-ataque-jugador');
const imgAtaquePc = document.getElementById('img-ataque-pc');
const btnPiedra = document.getElementById('btn-piedra');
const btnPapel = document.getElementById('btn-papel');
const btnTijeras = document.getElementById('btn-tijeras');

let opcionJugador;
let opcionPc;
let imgJugador;
let imgPc;

const imagenes = [
    {
        name: "Piedra",
        url: "img/Piedra.PNG" 
    },
    {
        name: "Papel",
        url: "img/Papel.PNG" 
    },
    {
        name: "Tijeras",
        url: "img/Tijeras.PNG" 
    }
];



function iniciar(){
    seccionBatalla.style.display = 'none';
};

btnPiedra.addEventListener('click', function(){
    opcionJugador = "Piedra";
    opPc();
});

btnPapel.addEventListener('click', function(){
    opcionJugador = "Papel";
    opPc();
});

btnTijeras.addEventListener('click', function(){
    opcionJugador = "Tijeras";
    opPc();
})


function opPc(){
    var aleaorio = nAleatorio();

    if(aleaorio == 0){
        opcionPc = "Piedra";
    }else if(aleaorio == 1){
        opcionPc = "Papel";
    }else if(aleaorio == 2){
        opcionPc = "Tijeras"
    };

    batalla();

};

function batalla(){
    if(opcionJugador == opcionPc){
        swal({
            title: "Empate",
            text: "toca el boton para seguir jugando!",
            icon: "info",
            button: "retry!",
          });
    }else if(opcionJugador == "Piedra" && opcionPc == "Tijeras"){
     
        swal({
            title: "Ganaste!",
            text: "toca el boton para seguir jugando!",
            icon: "success",
            button: "retry!",
          });
    }else if(opcionJugador == "Papel" && opcionPc == "Piedra"){
    
       swal({
        title: "Ganaste!",
        text: "toca el boton para seguir jugando!",
        icon: "success",
        button: "retry!",
      });
    }else if(opcionJugador == "Tijeras" && opcionPc == "Papel"){
     
       swal({
        title: "Ganaste!",
        text: "toca el boton para seguir jugando!",
        icon: "success",
        button: "retry!",
      });
    }else{
    
        swal({
            title: "Perdiste",
            text: "toca el boton para seguir jugando!",
            icon: "error",
            button: "retry!",
          });
    };

    addImagenes();

}


function nAleatorio(){
    let n = Math.floor(Math.random() * 3);
    return n;
}


function addImagenes(){
    for(let i=0;i<imagenes.length;i++){
        if(opcionJugador == imagenes[i].name){
            imgJugador = imagenes[i].url;
            var inserta = `<img class="img-batalla" src=${imgJugador} alt="">`;
            imgAtaqueJugador.innerHTML = inserta;
        };
        
        if(opcionPc == imagenes[i].name){
            imgPc = imagenes[i].url;
            var inserta = `<img class="img-batalla" src=${imgPc} alt="">`;
            imgAtaquePc.innerHTML = inserta;
        };
        
    };


    seccionBatalla.style.display = 'flex';
    
};


window.addEventListener('load', iniciar);