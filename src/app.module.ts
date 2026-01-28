import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { BikeController, CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';

// @Module({  // root module of the application
//   imports: [],
//   controllers: [AppController, CatsController, AdminController],
//   providers: [AppService],
// })
// export class AppModule {}

@Module({
  controllers: [CatsController, BikeController],
  providers: [CatsService],
})

export class AppModule {}
