import { CartItem } from './entities/interface/CartItem';

export class Product implements CartItem {
  constructor(public name: string, public price: number) {}
}
