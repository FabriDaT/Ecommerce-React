/**
 *
 * this function calculates new price of a new order
 * @param {array} products cartProducts : Array of Objects
 * @returns {number} Total price
 */

export const totalPrice = (products) => {
    
    // take the products from the cart and add the prices
    let sum = 0
    products.forEach(product => {
        sum += product.price * product.quantity
    });
    return sum
}

/**
 * This function obtains current DateTime
 * @returns {number} Date Time
 */

export const dateTime = () => {
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
        
    return dateTime;
}