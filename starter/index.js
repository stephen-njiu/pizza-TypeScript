var menu = [
    { name: "Margherita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Hawaiian", price: 10 },
    { name: "Veggie", price: 9 },
];
var cashInRegister = 100; // balance
var nextOrderId = 1; // order IDs
var orderQueue = []; // array queue 
function addNewPizza(pizzaObject) {
    menu.push(pizzaObject); // add the pizza object to the menu
}
function placeOrder(pizzaName) {
    var selectedPizza = menu.find(function (pizzaObj) { return pizzaObj.name === pizzaName; });
    if (!selectedPizza) {
        console.error("".concat(pizzaName, " does not exist in the menu"));
        return;
    }
    cashInRegister += selectedPizza.price; // update the cash register
    var newOrder = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" };
    orderQueue.push(newOrder); // add to order queue
    return newOrder; // return the latest completed order
}
function completeOrder(orderId) {
    var order = orderQueue.find(function (order) { return order.id === orderId; });
    if (!order) {
        console.error("Order ID ".concat(orderId, " not found."));
        return;
    }
    order.status = "completed";
    return order;
}
// Corrected pizza objects (using `price` instead of `cost`)
addNewPizza({ name: "Chicken Bacon Ranch", price: 12 });
addNewPizza({ name: "Cake Pineapple", price: 12 });
addNewPizza({ name: "Spicy Sausage", price: 11 });
placeOrder("Chicken Bacon Ranch");
completeOrder(1); // Pass as a number, not a string
console.log("Menu:", menu);
console.log("Cash in register:", cashInRegister);
console.log("Order queue:", orderQueue);
