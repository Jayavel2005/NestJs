import {Body, Controller, Get, HttpCode, HttpStatus, Param, Post, UsePipes, ValidationPipe} from '@nestjs/common';
import {ProductsService} from "./products.service";
import {Product} from "./types/Product";
import {CreateProductDto} from "./dto/create-product.dto";

@Controller('products')
export class ProductsController {
    constructor(private readonly productService : ProductsService) {}

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @UsePipes(new ValidationPipe())
    addProduct(
        @Body() body: CreateProductDto
    ):{id: string}{
        const id: string = this.productService.insertProduct(body);
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

    @Post("middleware")
    testMiddleware(
        @Body("title") title: string
    ){
        return title;
    }
}
