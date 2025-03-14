const menu = [
    { name: "Margherita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Hawaiian", price: 10 },
    { name: "Veggie", price: 9 }, 
]


const cashInRegister = 100;

const orderQueue = [];


function addNewPizza(pizzaObject) {
    menu.push(pizzaObject);
}

// Write a utility function, placeOrder, that takes a pizza name parameter and: 
// 1. Finds that pizza object in the menu,
// 2. Adds the income to the cashInRegister
//3. PUshes a new "order object" to the orderqueue
// (e.g {pizza: selectedPizzaObjectFromStep1, status: "ordered"})
//4. returns the new order object (just in case we need it later)

function placeOrder(pizzaName) {
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName);
    cashInRegister += selectedPizza.price;
    const newOrder = {pizza: selectedPizza, status: "ordered"}
    orderQueue.push(newOrder)
    return newOrder
}

/*
Challenge: write another utility function, completeOrder, that takes an orderId as a parameter,
- finds the correct order in teh orderQueue, and marks its status as 'completed for good measure
- Return the found order from teh function.

Note: you'll need to ensure that we're adding Ids to our orders when we create new orders. you can use a global 'nextOrderId' variable and increment it every time a new order is created to simulate real IDs being managed by us by a database

*/