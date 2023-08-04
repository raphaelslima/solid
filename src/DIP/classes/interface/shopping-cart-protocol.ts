import { CartItem } from './cartItem';

export interface ShoppingCartProtocol {
  items: Readonly<CartItem[]>;

  addItem(product: CartItem): void;

  removeItem(index: number): void;

  total(): number;

  totalWithDescont(): number;

  isEmpty(): boolean;

  clear(): void;
}
