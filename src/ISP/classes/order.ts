import { OrderStatus } from './interface/orderStatus';
import { ShoppingCart } from './shopping-cart';
import { Messaging } from '../services/messaging';
import { Persistency } from '../services/persistency';
import { IndividualCustomer } from './customer';

export class Order {
  private _orderStaus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoppingCart,
    private readonly messaging: Messaging,
    private readonly persistency: Persistency,
    private readonly customer: IndividualCustomer,
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStaus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Seu carrinho está vazio');
    } else {
      this._orderStaus = 'closed';
      this.messaging.sendMessage(
        `Seu pedido com toal ${this.cart.totalWithDescont()}foi recebido`,
      );
      this.persistency.saveOrder();
      this.cart.clear();
      console.log(
        'O cliente é ' + this.customer.getName() + ' ' + this.customer.getIDN(),
      );
    }
  }
}
