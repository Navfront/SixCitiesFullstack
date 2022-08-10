import model from './app.model';

export interface Todo {
  todoId: string;
  title: string;
  isDone: boolean;
}

export interface User {
  userId: string;
  username: string;
  password: string;
  todos?: Todo[];
}

const user: User = {
  userId: 'user1',
  username: 'admin',
  password: '$2b$05$DDP8zfsro6vNXSNtZGiZo.6wGDaA3odsenjhpm4aJCsRPilazkUsO',
  todos: [
    { todoId: 'a1', title: 'hello', isDone: false },
    { todoId: 'a2', title: 'goodbuy', isDone: true },
    { todoId: 'a3', title: 'whaat', isDone: true },
  ],
};

const newTodo: Todo = {
  todoId: '2',
  title: 'helloWorld',
  isDone: false,
};

const todoToUpdate: Todo = {
  todoId: 'a2',
  title: 'goodmorning',
  isDone: false,
};

const gettedAll = [
  { todoId: 'a2', title: 'goodmorning', isDone: false },
  { todoId: 'a3', title: 'whaat', isDone: true },
  { todoId: '2', title: 'helloWorld', isDone: false },
];

describe('DataModel tests', () => {
  test('findOne works', async () => {
    expect(await model.findUserByName('admin')).toEqual(user);
  });

  test('addTodo works', async () => {
    const res = await model.addTodo('user1', 'helloWorld');
    expect(res).toEqual(newTodo);
  });

  test('removeTodo works', async () => {
    const user = await model.findUserByName('admin');
    expect(await model.removeTodo('user1', 'a1')).toEqual(true);
    expect(user.todos).not.toContainEqual({
      todoId: 'a1',
      title: 'hello',
      isDone: false,
    });
  });

  test('updating works', async () => {
    expect(await model.updateTodo('user1', todoToUpdate)).toEqual(todoToUpdate);
  });

  test('gettingTodos works', async () => {
    expect(await model.getTodos('user1')).toEqual(gettedAll);
  });
});
