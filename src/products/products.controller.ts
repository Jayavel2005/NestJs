import {Body, Controller, Get, Post} from '@nestjs/common';
import {ProductsService} from "./products.service";

@Controller('products')
export class ProductsController {
    constructor(private readonly productService : ProductsService) {}

    @Post()
    addProduct(
        @Body('title') title: string,
        @Body('description') description: string,
        @Body('price') price: number
    ):{message: string}{
        this.productService.insertProduct(title, description, price);
        return {
            message: "Product Added Sucessfully",
        }
    }

    @Get()
    getProducts(){
        return {
            products: this.productService.getAllProducts()
        }
    }
}
