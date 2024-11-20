import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Warehouse, WarehouseDocument } from './warehouse.model';

@Injectable()
export class WarehousesService {
  constructor(@InjectModel(Warehouse.name) private warehouseModel: Model<WarehouseDocument>) {}

  async create(warehouse: Warehouse): Promise<Warehouse> {
    return new this.warehouseModel(warehouse).save();
  }

  async findAll(): Promise<Warehouse[]> {
    return this.warehouseModel.find().exec();
  }

  async findOne(id: string): Promise<Warehouse> {
    return this.warehouseModel.findById(id).exec();
  }

  async update(id: string, warehouse: Warehouse): Promise<Warehouse> {
    return this.warehouseModel.findByIdAndUpdate(id, warehouse, { new: true }).exec();
  }

  async delete(id: string): Promise<Warehouse> {
    return this.warehouseModel.findByIdAndDelete(id).exec();
  }
}
