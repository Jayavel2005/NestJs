import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {ProductsService} from "./products.service";
import {Product} from "./types/Product";

@Controller('products')
export class ProductsController {
    constructor(private readonly productService : ProductsService) {}

    @Post()
    addProduct(
        @Body('title') title: string,
        @Body('description') description: string,
        @Body('price') price: number
    ):{id: string}{
        const id: string = this.productService.insertProduct(title, description, price);
        return { id }
    }

    @Get()
    getProducts(): {products: Product[]}{
        return {
            products: this.productService.getAllProducts()
        }
    }

    @Get(":id")
    getProductById(
        @Param("id") id: string
    ): string | Product{
        return this.productService.getProductById(id);
    }
}
