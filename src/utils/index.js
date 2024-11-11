/**
 *
 * this function calculates new price of a new order
 * @param {array} products cartProducts : Array of Objects
 * @returns {number} Total price
 */


export const totalPrice = (products) => {
    console.log(products)
    // tomar todos los productos del carrito y suma los precios
    let sum = 0
    products.forEach(product => sum += product.price * product.quantity );
    return sum

}