import { Injectable } from '@nestjs/common';

type Product = {
    id: string,
    title: string,
    description: string,
    price: number
}

@Injectable()
export class ProductsService {
    private products: Product[] = [];

    insertProduct (title: string, description: string, price: number){
        const id: string = new Date().toISOString();
        const product: Product = {
            id,
            title,
            description,
            price
        }

        this.products.push(product)
    }

    getAllProducts(): Product[]{
        return this.products;
    }
}
