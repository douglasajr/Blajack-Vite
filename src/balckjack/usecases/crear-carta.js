const crearCarta = (carta, divCartasJugador) => {
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');
    divCartasJugador.append( imgCarta );
}

export default crearCarta