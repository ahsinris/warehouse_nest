import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WarehousesService } from './warehouses.service';
import { WarehousesController } from './warehouses.controller';
import { Warehouse, WarehouseSchema } from './warehouse.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: Warehouse.name, schema: WarehouseSchema }])],
  controllers: [WarehousesController],
  providers: [WarehousesService],
})
export class WarehousesModule {}
