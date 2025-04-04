// const menu = [ // array with objects inside
//     { name: "Margherita", price: 8 },
//     { name: "Pepperoni", price: 10 },
//     { name: "Hawaiian", price: 10 },
//     { name: "Veggie", price: 9 }, 
// ]

// const cashInRegister = 100; // bal
// const nextOrderId = 1 // order ids
// const orderQueue = []; // array queue 

// function addNewPizza(pizzaObject) {
//     menu.push(pizzaObject); // this one needs to be an object.. like a key with a value
// }

// function placeOrder(pizzaName) {
//     const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName); // bug
//     cashInRegister += selectedPizza.price; // update the cash in 
//     const newOrder = {id: nextOrderId++, pizza: selectedPizza, status: "ordered"}
//     orderQueue.push(newOrder) // arrays of completed orders
//     return newOrder // return the latest completed order
// }

// function completeOrder(orderId) { // checks if an order is complete
//     const order = orderQueue.find(order => order.id === orderId)
//     order.status = "completed" // bug needs an if statement
//     return order
// }

// addNewPizza({name: "Chicken Bacon Ranch", cost: 12})
// addNewPizza({name: "Cake Pineapple", cost: 12})
// addNewPizza({name: "Spicy Sausage", cost: 11})


// placeOrder("Chicken Bacon Ranch")
// completeOrder("1")


// console.log("Menu:", menu)
// console.log("Cash in register:", cashInRegister)
// console.log("Order queue:", orderQueue)