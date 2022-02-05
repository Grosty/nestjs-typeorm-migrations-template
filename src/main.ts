import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get('PORT');
  // console.log({
  //   NODE_ENV: configService.get('NODE_ENV'),
  //   PORT: configService.get('PORT'),
  //   POSTGRES_HOST: configService.get('POSTGRES_HOST'),
  //   POSTGRES_PORT: configService.get('POSTGRES_PORT'),
  //   POSTGRES_USER: configService.get('POSTGRES_USER'),
  //   POSTGRES_PASSWORD: configService.get('POSTGRES_PASSWORD'),
  //   POSTGRES_DB: configService.get('POSTGRES_DB'),
  //   RUN_MIGRATIONS: configService.get('RUN_MIGRATIONS'),
  // });
  await app.listen(port);
}
bootstrap();
