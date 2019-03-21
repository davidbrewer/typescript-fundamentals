type CartItem = {
  name: string;
  price: number;
  qty: number;
}

type CartAPI = {
  length: number;
  total: number;
  add: (name: string, price: number, qty?: number) => CartAPI;
  addItem: (item: CartItem) => CartAPI;
}

export function cashier(): CartAPI {
  let length:number = 0;
  let total:number = 0;

  return {
    get length() {
      return length;
    },
    get total() {
      return total;
    },
    add: function(name, price, qty=1): CartAPI {
      return this.addItem({name, price, qty});
    },
    addItem: function(item): CartAPI {
      length += item.qty;
      total += (item.qty * item.price);
      return this;
    }
  };
}
