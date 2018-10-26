
class Pizza {

  constructor(size, crust) {
    this.toppings = ["cheese"];
    this.sizes = size;
    this.crust = crust;

  }

  addTopping(topping) {
    this.toppings.push(topping);
  }
  pizzaSize(size){
  	this.sizes = size; 
  }

}

let pizza1 = new Pizza('xtra-large','thicc');
let pizza2 = new Pizza('miniature', 'extra thicc');

console.log(pizza1.toppings)
pizza1.addTopping("mushrooms");
pizza1.addTopping("peppers");

console.log(pizza1.toppings,pizza1.sizes, pizza1.crust);

console.log(pizza2.toppings); // ["cheese"]
pizza2.addTopping("more cheese");
console.log(pizza2.toppings, pizza2.sizes, pizza2.crust); // ["cheese", "more cheese"];



