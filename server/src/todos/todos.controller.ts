import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { AddTodo } from './dto/add-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { DeleteTodo } from './dto/delete-todo.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags('ToDo')
@Controller('todos')
export class TodosController {
  constructor(private todosService: TodosService) {}

  @ApiOperation({ summary: 'Получение всех ToDo юзера' })
  @UseGuards(JwtAuthGuard)
  @UsePipes(ValidationPipe)
  @Get('/:id')
  getTodosByUserId(@Param('id') id: string) {
    console.log(id);
    if (id) return this.todosService.getTodosByUserId(id);
  }

  @ApiOperation({ summary: 'Создание ToDo' })
  @UseGuards(JwtAuthGuard)
  @UsePipes(ValidationPipe)
  @Post('/')
  addNewTodo(@Body() dto: AddTodo) {
    if (dto) return this.todosService.addNewTodo(dto.userId, dto.title);
  }

  @ApiOperation({ summary: 'Обновление ToDo' })
  @UseGuards(JwtAuthGuard)
  @UsePipes(ValidationPipe)
  @Put('/')
  updateTodo(@Body() dto: UpdateTodoDto) {
    if (dto) return this.todosService.updateTodo(dto.userId, dto.todo);
  }

  @ApiOperation({ summary: 'Удаление ToDo' })
  @UseGuards(JwtAuthGuard)
  @UsePipes(ValidationPipe)
  @Delete('/')
  deleteTodo(@Body() dto: DeleteTodo) {
    if (dto) return this.todosService.deleteTodo(dto.userId, dto.todoId);
  }
}
