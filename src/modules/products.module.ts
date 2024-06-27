import { Module } from '@nestjs/common';
import { ProductsController } from 'src/controller/products.controller';
import { ProductsService } from 'src/services/products.service';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
