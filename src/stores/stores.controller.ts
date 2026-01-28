import { Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { StoresService } from './stores.service';
import { StoresProducer } from './stores.producer';

@Controller('stores')
export class StoresController {
  constructor(
    private readonly storesService: StoresService,
    private readonly storesProducer: StoresProducer,
  ) {}

  @Get()
  getStores(): string {
    return this.storesService.getAllStores();
  }

  @Post()
  createStore(): string {
    const serviceMsg = this.storesService.createStore();
    const producerMsg = this.storesProducer.emitStoreCreated();

    return `${serviceMsg} | ${producerMsg}`;
  }

  @Put(':id')
  updateStore(@Param('id') id: string): string {
    const serviceMsg = this.storesService.updateStore(id);
    const producerMsg = this.storesProducer.emitStoreUpdated();

    return `${serviceMsg} | ${producerMsg}`;
  }

  @Delete(':id')
  deleteStore(@Param('id') id: string): string {
    return this.storesService.deleteStore(id);
  }
}
