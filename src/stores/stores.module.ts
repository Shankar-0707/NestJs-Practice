import { Module } from "@nestjs/common";
import { StoresController } from "./stores.controller";
import { StoresService } from "./stores.service";
import { StoresProducer } from "./stores.producer";


@Module({
    controllers : [StoresController],
    providers : [StoresService, StoresProducer],
})

export class StoresModule {}