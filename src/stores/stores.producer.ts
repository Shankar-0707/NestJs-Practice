import { Injectable } from '@nestjs/common';

@Injectable()
export class StoresProducer {
  emitStoreCreated(): string {
    return 'Producer: store created event emitted';
  }

  emitStoreUpdated(): string {
    return 'Producer: store updated event emitted';
  }
}

