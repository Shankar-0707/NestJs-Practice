import { Controller, Get, HttpCode, Post, Header, Redirect, Query, Param, Body} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateCatDto } from './cats/dto/create-cat.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()  // single route in app.controller.ts by default from the documentation
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/2')
    gethii2() : string {
      return "hii2";
    }
}

// @Controller('cats')
// export class CatsController {
//   constructor(private readonly appService: AppService) {}
//   @Get()
//   findAll(): string {
//     return this.appService.findAll();
//   }

// // @Post('/create')
// // @Header('Cache-Control', 'no-store')
// // @HttpCode(201)
// // create() {
// //   return 'This action adds a new cat';
// // }

// // @Post('/create')
// // @Header('Cache-Control', 'no-store')
// // create() {
// //   return { message: 'Cat created' };
// // }


// @Get('/docs')
// @Redirect('https://nestjs.com', 301)
// redirectToNest(){
//   return {message : "Redirected"};
// };


// @Get('docs')
// @Redirect('https://docs.nestjs.com', 302)
// getDocs(@Query('version') version) {
//   if (version && version === '5') {
//     return { url: 'https://docs.nestjs.com/v5/' };
//   }
// }


// // @Get(':id')
// // findOne(@Param() params: any): string {
// //   console.log(params.id);
// //   return `This action returns a #${params.id} cat`;
// // }

// // @Get(':name')
// // findOne(@Param('name') name : any) : String {
// //   console.log(name);
// //   return `${name}`;
// // }


// @Get('async')
// async haveAsync(): Promise<any[]> {
//   return [];
// }

// @Post('posting')
// async create(@Body() createCatDto: CreateCatDto) {
//   return 'This action adds a new cat';
// }



// @Get('query')
// async findAllquery(@Query('age') age: number, @Query('breed') breed: string) {
//   return `This action returns all cats filtered by age: ${age} and breed: ${breed}`;
// }


// }



// @Controller({ host: 'admin.example.com' })
// export class AdminController {
//   @Get()
//   index(): string {
//     return 'Admin page';
//   }
// }





// Full Resource Sample 


// import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
// import { CreateCatDto, UpdateCatDto, ListAllEntities } from './dto';

// @Controller('cats')
// export class CatsController {
//   @Post()
//   create(@Body() createCatDto: CreateCatDto) {
//     return 'This action adds a new cat';
//   }

//   @Get()
//   findAll(@Query() query: ListAllEntities) {
//     return `This action returns all cats (limit: ${query.limit} items)`;
//   }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return `This action returns a #${id} cat`;
//   }

//   @Put(':id')
//   update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
//     return `This action updates a #${id} cat`;
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return `This action removes a #${id} cat`;
//   }
// }

