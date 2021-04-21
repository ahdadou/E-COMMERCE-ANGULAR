import { Product } from './ProductModule';
export class CartLocalStrage{
    count: number;
  products: [{
      id: number;
      qte: number;
  }
  ];
}


export class CartFrontEnd{
    count: number;
    products: [{
        product: Product,
        qte: number;
    }
    ];
}
