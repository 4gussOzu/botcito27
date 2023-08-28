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

let victorias = [];
let derrotas = [];

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

const marcadorVictorias = document.createElement('p');
marcadorVictorias.textContent = `Victorias: ${victorias.length}`;
marcadorVictorias.classList.add('marcador');

const marcadorDerrotas = document.createElement('p');
marcadorDerrotas.textContent = `Derrotas: ${derrotas.length}`;
marcadorDerrotas.classList.add('marcador');

const marcadoresDiv = document.createElement('div');
marcadoresDiv.id = "marcador"; // Agrega un id al div contenedor de marcadores
marcadoresDiv.appendChild(marcadorVictorias);
marcadoresDiv.appendChild(marcadorDerrotas);
document.body.insertBefore(marcadoresDiv, seccionBatalla);

function iniciar() {
    seccionBatalla.style.display = 'none';
    cargarDatosLocalStorage();
}

btnPiedra.addEventListener('click', function() {
    opcionJugador = "Piedra";
    opPc();
});

btnPapel.addEventListener('click', function() {
    opcionJugador = "Papel";
    opPc();
});

btnTijeras.addEventListener('click', function() {
    opcionJugador = "Tijeras";
    opPc();
});

function opPc() {
    var aleatorio = nAleatorio();

    if (aleatorio == 0) {
        opcionPc = "Piedra";
    } else if (aleatorio == 1) {
        opcionPc = "Papel";
    } else if (aleatorio == 2) {
        opcionPc = "Tijeras";
    }

    batalla();
}

function batalla() {
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

    if (opcionJugador == "Piedra" && opcionPc == "Tijeras" ||
        opcionJugador == "Papel" && opcionPc == "Piedra" ||
        opcionJugador == "Tijeras" && opcionPc == "Papel") {
        victorias.push({ jugador: opcionJugador, pc: opcionPc });
        guardarDatosLocalStorage();
    } else if (opcionJugador !== opcionPc) {
        derrotas.push({ jugador: opcionJugador, pc: opcionPc });
        guardarDatosLocalStorage();
    }

    marcadorVictorias.textContent = `Victorias: ${victorias.length}`;
    marcadorDerrotas.textContent = `Derrotas: ${derrotas.length}`;

    addImagenes();
}

function guardarDatosLocalStorage() {
    localStorage.setItem('victorias', JSON.stringify(victorias));
    localStorage.setItem('derrotas', JSON.stringify(derrotas));
}

function cargarDatosLocalStorage() {
    const victoriasData = localStorage.getItem('victorias');
    const derrotasData = localStorage.getItem('derrotas');

    if (victoriasData) {
        victorias = JSON.parse(victoriasData);
    }

    if (derrotasData) {
        derrotas = JSON.parse(derrotasData);
    }
}

function nAleatorio() {
    let n = Math.floor(Math.random() * 3);
    return n;
}

function addImagenes() {
    for (let i = 0; i < imagenes.length; i++) {
        if (opcionJugador == imagenes[i].name) {
            imgJugador = imagenes[i].url;
            var inserta = `<img class="img-batalla" src=${imgJugador} alt="">`;
            imgAtaqueJugador.innerHTML = inserta;
        }

        if (opcionPc == imagenes[i].name) {
            imgPc = imagenes[i].url;
            var inserta = `<img class="img-batalla" src=${imgPc} alt="">`;
            imgAtaquePc.innerHTML = inserta;
        }
    }

    seccionBatalla.style.display = 'flex';
}

window.addEventListener('load', iniciar);
