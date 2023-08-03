import { Messaging } from './services/messaging';
import { Order } from './entities/order';
import { Persistency } from './services/persistency';
import { Product } from './product';
import { ShoppingCart } from './entities/shopping-cart';

const cart = new ShoppingCart();
const messaging = new Messaging();
const persisteny = new Persistency();
const order = new Order(cart, messaging, persisteny);

cart.addItem(new Product('teste1', 50));
cart.addItem(new Product('teste2', 45.2));
cart.addItem(new Product('teste3', 37.6));

console.log(cart.items);
console.log(cart.total());
console.log(order.orderStatus);
console.log(order.checkout());
console.log(order.orderStatus);
