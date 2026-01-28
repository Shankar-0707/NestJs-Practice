import { Injectable } from '@nestjs/common';

@Injectable()
export class StoresService {
  getAllStores(): string {
    return 'fetched all stores';
  }

  createStore(): string {
    return 'store created';
  }

  updateStore(id: string): string {
    return `store with id ${id} updated`;
  }

  deleteStore(id: string): string {
    return `store with id ${id} deleted`;
  }
}
