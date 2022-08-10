import { Module } from '@nestjs/common';
import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';
import { AuthModule } from './../auth/auth.module';
@Module({
  controllers: [TodosController],
  providers: [TodosService],
  imports: [AuthModule],
})
export class TodosModule {}
