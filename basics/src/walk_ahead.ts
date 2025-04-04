type Pizza = {
    id: number
    name: string,
    price: number
}

type Order = {
    id: number,
    pizza: Pizza,
    status: "ordered" | "completed"
}
let cashInRegister = 100; // balance
let nextOrderId = 1; // order IDs
let nextPizzaId = 1 // pizza ids

const menu = [ // array with objects inside
    { id:nextPizzaId++, name: "Margherita", price: 8 },
    { id:nextPizzaId++, name: "Pepperoni", price: 10 },
    { id:nextPizzaId++, name: "Hawaiian", price: 10 },
    { id:nextPizzaId++, name: "Veggie", price: 9 }, 
];


const orderQueue: { id: number; Pizza?: { name: string; price: number }; status: string }[] = []; // array queue 

// void functions does not return anything
function addNewPizza(pizzaObject: Pizza) : void {
    menu.push(pizzaObject); // add the pizza object to the menu
}

function placeOrder(pizzaName: string): Order | undefined {
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName);
    if (!selectedPizza) {
        console.error(`${pizzaName} does not exist in the menu`);
        return;
    }
    cashInRegister += selectedPizza.price; // update the cash register
    const newOrder:Order = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" };
    orderQueue.push(newOrder); // add to order queue
    return newOrder; // return the latest completed order
}

function completeOrder(orderId: number) : Order| undefined { // checks if an order is complete
    const order = orderQueue.find(order => order.id === orderId);
    if (!order) {
        console.error(`Order ID ${orderId} not found.`);
        return
    }
    order.status = "completed";
    return order as Order
} 


// getPizzaDetail

export function getPizzaDetail(identifier: string | number): Pizza | undefined {
    if (typeof identifier === "string"){
        return menu.find(pizza => pizza.name.toLowerCase() === identifier.toLowerCase())
    } else if (typeof identifier === "number"){
        return menu.find(pizza => pizza.id === identifier)
    }else {
        console.error("Undefined type. Parameter must be either a string or a number ")
        return
    }
}
 













// Corrected pizza objects (using `price` instead of `cost`)
addNewPizza({ id: nextPizzaId++, name: "Chicken Bacon Ranch", price: 12 });
addNewPizza({ id: nextPizzaId++, name: "Cake Pineapple", price: 12 });
addNewPizza({ id: nextPizzaId++, name: "Spicy Sausage", price: 11 });

placeOrder("Chicken Bacon Ranch");
completeOrder(1); // Pass as a number, not a string

console.log("Menu:", menu);
console.log("Cash in register:", cashInRegister);
console.log("Order queue:", orderQueue);


console.log("Hello world, This is the Mystical Typescript")
