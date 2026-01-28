import { NestFactory } from '@nestjs/core';  // importing nestls engine that can create our app
import { AppModule } from './app.module';
import { StoresModule } from './stores/stores.module';

async function bootstrap() {
  const app = await NestFactory.create(StoresModule, { abortOnError: false });  // just like the file const app = express(); in express abortonError false krne se ye code 1 ke sath exit nhi krega blki ek error throw krega 
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
