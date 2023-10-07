let makeTransaction = quantity;
makeTransaction= pricePerDroid;
const totalPrice= pricePerDroid*quantity;
const message = `You ordered ${quantity} droids worth ${totalPrice} credits!`;
console.log(makeTransaction(5, 3000));
console.log(makeTransaction(3, 1000));
console.log(makeTransaction(10, 500));