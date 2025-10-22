import {shuffle} from 'underscore'

/**
 * 
 * @param {Array<string>} tipoCarta Ejemplo: ['C','D','H','S']
 * @param {Array<string>} especialCarta Ejemplo: ['A','J','Q','K']
 * @returns {Array<String>} retorna un nuevo deck
 */

const crearDeck = (tipoCarta, especialCarta) => {
    if (!tipoCarta) throw new Error ('No se pasó de parametro tipo de carta')
    if (!especialCarta) throw new Error ('No se pasó de parametro cartas especiales')
    if (!especialCarta) throw new Error ('No se pasó de parametro cartas especiales')
    if (tipoCarta.length === 0 ) throw new Error ('El arreglo dado no puede ir vacio')
    // if (!(tipoCarta instanceof Array)) throw Error (`${tipoCarta} no es un Arrat`)
    // if (!(especialCarta instanceof Array)) throw Error (`${tipoCarta} no es un Arrat`)

    let deck         = [];
    for (let i = 2; i <= 10; i++) {
        for (let tipo of tipoCarta) {
            deck.push(i + tipo)
        }
        // console.log( deck );
        
    }
    for( let tipo of tipoCarta ) {
            for( let esp of especialCarta ) {
                deck.push( esp + tipo);
            }
        }
        deck = shuffle( deck );
        console.log( deck );
        return deck;
}
        
export default crearDeck