import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { WarehousesService } from './warehouses.service';
import { Warehouse } from './warehouse.model';

@Controller('warehouses')
export class WarehousesController {
  constructor(private readonly warehousesService: WarehousesService) {}

  @Post()
  async create(@Body() warehouse: Warehouse) {
    return this.warehousesService.create(warehouse);
  }

  @Get()
  async findAll() {
    return this.warehousesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.warehousesService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() warehouse: Warehouse) {
    return this.warehousesService.update(id, warehouse);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.warehousesService.delete(id);
  }
}
