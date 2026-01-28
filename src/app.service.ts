import { Injectable } from '@nestjs/common';

@Injectable()  // ye ek method h by default jo return krdega hello world 
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  findAll() : string {
    return "this action return all cats";
  }
}


@Injectable()
export class BikeService {
  getBike() : string {
    return 'This is a bike';
  }
}