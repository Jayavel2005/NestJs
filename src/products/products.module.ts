import {MiddlewareConsumer, Module, NestModule, RequestMethod} from '@nestjs/common';
import {ProductsController} from './products.controller';
import {ProductsService} from './products.service';
import {ProductMiddleware} from "./middlewares/product.middleware";

@Module({
  controllers: [ProductsController],
  providers: [ProductsService]
})
export class ProductsModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ProductMiddleware).forRoutes({
      path : "products/middleware",
      method : RequestMethod.POST
    })
  }
}
