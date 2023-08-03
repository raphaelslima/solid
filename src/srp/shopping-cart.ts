type CartItem = { name: string; price: number };
type orderStatus = 'open' | 'closed';

export class ShoppingCart {
  private readonly _items: CartItem[] = [];
  private _orderStaus: orderStatus = 'open';

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  get orderStatus(): orderStatus {
    return this._orderStaus;
  }

  addItem(product: CartItem): void {
    this._items.push(product);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  total(): number {
    return +this._items
      .reduce((total, item) => total + item.price, 0)
      .toFixed(2);
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  sendMessage(msg: string): void {
    console.log(msg);
  }

  saveOrder(): void {
    console.log('Pedido salvo com sucesso');
  }

  clear(): void {
    this._items.length = 0;
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log('Seu carrinho está vazio');
    } else {
      this._orderStaus = 'closed';
      this.sendMessage(`Seu pedido com toal ${this.total()}foi recebido`);
      this.saveOrder();
      this.clear();
    }
  }
}

const cart = new ShoppingCart();

cart.addItem({ name: 'teste1', price: 50 });
cart.addItem({ name: 'teste1', price: 50 });
cart.addItem({ name: 'teste1', price: 50 });

console.log(cart.items);
