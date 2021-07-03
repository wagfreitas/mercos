export class Vendas {
  constructor(
    public order_id: number,
    public status: string,
    public date: string,
    public products: Produtos[],
  ) {}
}

export class Fotos {
  constructor(
    public id: number,
    public pequena: string,
    public media: string,
    public grande: string
  ) {}
}

export class Produtos {
  constructor(
    public product_id: number,
    public sku: string,
    public parent_id: [],
    public qty: string
  ) {}
}

export class Pagination {
  constructor(
    public page: number,
    public perPage: number,
    public prePage: number,
    public nextPage: number,
    public total: number,
    public totalPages: number
  ) {}
}
