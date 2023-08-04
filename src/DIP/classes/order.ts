import { OrderStatus } from './interface/orderStatus';
import { IndividualCustomer } from './customer';
import { ShoppingCartProtocol } from './interface/shopping-cart-protocol';
import { MessagingProtocol } from './interface/messaging-protocol';
import { PersistencyProtocol } from './interface/persistency-protocol';

export class Order {
  private _orderStaus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoppingCartProtocol,
    private readonly messaging: MessagingProtocol,
    private readonly persistency: PersistencyProtocol,
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
