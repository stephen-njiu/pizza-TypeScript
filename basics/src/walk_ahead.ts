type Pizza = {
    id: number
    name: string,
    price: number
}

type order = {
    id: number,
    pizza: Pizza,
    status: "ordered" | "completed"
}

const menu = [ // array with objects inside
    { id:1, name: "Margherita", price: 8 },
    { id:2, name: "Pepperoni", price: 10 },
    { id:3, name: "Hawaiian", price: 10 },
    { id:4, name: "Veggie", price: 9 }, 
];

let cashInRegister = 100; // balance
let nextOrderId = 1; // order IDs

const orderQueue: { id: number; Pizza?: { name: string; price: number }; status: string }[] = []; // array queue 

function addNewPizza(pizzaObject: Pizza) {
    menu.push(pizzaObject); // add the pizza object to the menu
}

function placeOrder(pizzaName: string) {
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName);
    if (!selectedPizza) {
        console.error(`${pizzaName} does not exist in the menu`);
        return;
    }
    cashInRegister += selectedPizza.price; // update the cash register
    const newOrder:order = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" };
    orderQueue.push(newOrder); // add to order queue
    return newOrder; // return the latest completed order
}

function completeOrder(orderId: number) { // checks if an order is complete
    const order = orderQueue.find(order => order.id === orderId);
    if (!order) {
        console.error(`Order ID ${orderId} not found.`);
        return;
    }
    order.status = "completed";
    return order;
}


// getPizzaDetail

function getPizzaDetail(identifier: string | number) {
    if (typeof identifier === "string"){
        return menu.find(pizza => pizza.name.toLowerCase() === identifier.toLowerCase())
    } else {
        return menu.find(pizza => pizza.id === identifier)
    }
}














// Corrected pizza objects (using `price` instead of `cost`)
addNewPizza({ id: 1, name: "Chicken Bacon Ranch", price: 12 });
addNewPizza({ id: 2, name: "Cake Pineapple", price: 12 });
addNewPizza({ id: 3, name: "Spicy Sausage", price: 11 });

placeOrder("Chicken Bacon Ranch");
completeOrder(1); // Pass as a number, not a string

console.log("Menu:", menu);
console.log("Cash in register:", cashInRegister);
console.log("Order queue:", orderQueue);


console.log("Hello world, This is the Mystical Typescript")
