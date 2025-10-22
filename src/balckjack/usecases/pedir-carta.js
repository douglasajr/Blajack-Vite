/**
 * 
 * @param {Array<String>} deck ['3C'AS'..''''''']
 * @returns {String} 3C
 */

const pedirCarta = (deck) => {

    if ( !deck || deck.length === 0 ) {
        throw new Error('No hay cartas en el deck');
    }
    const carta = deck.pop();
    return carta;
}

export default pedirCarta