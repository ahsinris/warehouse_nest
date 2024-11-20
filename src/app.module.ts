import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';
import { WarehousesModule } from './warehouses/warehouses.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/warehouse-inventory'),
    ProductsModule,
    WarehousesModule,
  ],
})
export class AppModule {}
