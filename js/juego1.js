const Piedra = 0;
const Papel = 1;
const Tijera = 2;

const EMPATE = 0;
const WIN = 1;
const LOSE = 2;

const piedraBtn = document.getElementById("piedra");
const papelBtn = document.getElementById("papel");
const tijeraBtn = document.getElementById("tijera");
const AnuncioResultados = document.getElementById("texto-importante");
const jugadorImg = document.getElementById("jugadorImg");
const botImg = document.getElementById("botImg");

piedraBtn.addEventListener("click", ()=>{
    console.log("piedra");
    juego(Piedra);
});
papelBtn.addEventListener("click", ()=>{
    console.log("papel");
    juego(Papel);
});
tijeraBtn.addEventListener("click", ()=>{
    console.log("tijera");
    juego(Tijera);
});

function juego(EleccionJugador){
    const randomisador = Math.floor(Math.random() * 3);
    console.log(randomisador);
    const resultados = calculadora(EleccionJugador, randomisador);

    switch(resultados){
        case EMPATE:
            AnuncioResultados.innerHTML = "EMPATEEEE!!!";
            break;
        case WIN:
            AnuncioResultados.innerHTML = "GANASTEEE!!!";
            break;
        case LOSE:
            AnuncioResultados.innerHTML = "PERDSITE >:D"
            break;
    }
}

function calculadora(EleccionJugador, randomisador){
    if(EleccionJugador == randomisador){
        console.log("empate");
        return EMPATE;
        
    }else if(EleccionJugador === Piedra){

        if(randomisador === Papel){    
            console.log("perdiste");
            return LOSE;
        }
        if(randomisador === Tijera){
            console.log("ganaste");
            return WIN;
        }
    }else if(EleccionJugador === Papel){

        if(randomisador=== Tijera){
            console.log("perdiste");
            return LOSE;
        }
        if(randomisador === Piedra){
            console.log("ganaste");
            return WIN;
        }        
    }else if(EleccionJugador === Tijera){

        if(randomisador === Piedra){
            console.log("perdiste");
            return LOSE;
        }
        if(randomisador === Papel){
            console.log("ganaste");
            return WIN;
        }
    }
}