import { Injectable } from '@nestjs/common';
import {Product} from "./types/Product";


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
        return id
    }

    getAllProducts(): Product[]{
        return this.products;
    }

    getProductById(id: string): Product | string{
        const product: Product | undefined = this.products.find((product: Product):boolean => product.id === id);

        if (product) return product
        else return "Product Not found";
    }
}
