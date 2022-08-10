import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function start() {
  const PORT = process.env.PORT || 5500;

  try {
    const app = await NestFactory.create(AppModule);
    app.enableCors();
    const config = new DocumentBuilder()
      .setTitle('ToDo Server')
      .setDescription('NESTJS Server for my SimpleToDo app.')
      .setVersion('1.0.0')
      .addTag('Navfront.ru')
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/api/docs', app, document);

    await app.listen(PORT, () => {
      console.log(`Server starts on ${PORT} port!`);
    });
  } catch (e) {
    console.log(e);
  }
}

start();
