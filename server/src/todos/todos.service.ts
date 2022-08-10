import { Injectable } from '@nestjs/common';
import appModel, { Todo } from 'src/app.model';

@Injectable()
export class TodosService {
  async getTodosByUserId(userId: string) {
    return await appModel.getTodos(userId);
  }

  async addNewTodo(userId: string, title: string) {
    return await appModel.addTodo(userId, title);
  }

  async updateTodo(userId: string, todo: Todo) {
    return await appModel.updateTodo(userId, todo);
  }

  async deleteTodo(userId: string, todoId: string) {
    return await appModel.removeTodo(userId, todoId);
  }
}
