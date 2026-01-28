import { Controller, Get, Post, Body } from "@nestjs/common";
import { CreateCatDto } from "./dto/create-cat.dto";
import { CatsService } from "./cats.service";
import { Cat } from "./interfaces/cat.interface";
import { BikeService } from "src/app.service";


@Controller('cats')
export class CatsController {
    constructor(private catsService : CatsService) {}

    @Post()
    async create(@Body() createCatDto : CreateCatDto) {
        this.catsService.create(createCatDto);
    }

    @Get()
    async findAll(): Promise<Cat[]> {
        return this.catsService.findAll();
    }
}

@Controller('bike')
export class BikeController {
    constructor(private readonly catService : CatsService) {}
    BikeService: any;
    @Get()
    async bikenow() : Promise<string> {
        return this.BikeService.getBike();
    }

}