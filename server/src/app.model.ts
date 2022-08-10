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

let instance = null;

class UsersModel {
  #users: User[];
  #idCounter: number;

  constructor() {
    this.#idCounter = 0;
    this.#users = [
      {
        userId: 'user' + this.newId,
        username: 'admin',
        password:
          '$2b$05$DDP8zfsro6vNXSNtZGiZo.6wGDaA3odsenjhpm4aJCsRPilazkUsO',
        todos: [
          { todoId: 'a1', title: 'hello', isDone: false },
          { todoId: 'a2', title: 'goodbuy', isDone: true },
          { todoId: 'a3', title: 'whaat', isDone: true },
        ],
      },
    ];
  }

  private get newId() {
    return String(++this.#idCounter);
  }

  static getInstance(): UsersModel {
    if (!instance) {
      instance = new UsersModel();
    }
    return instance;
  }

  get users() {
    return this.#users;
  }

  async createUser(
    user: Pick<User, 'username' | 'password'>,
  ): Promise<false | User> {
    const findedUser = this.#users.find((it) => it.username === user.username);
    if (findedUser) {
      return false;
    }

    const newUser: User = {
      userId: 'user' + String(++this.#idCounter),
      ...user,
      todos: [],
    };
    this.#users.push(newUser);
    return newUser;
  }

  async findUserByName(username: string): Promise<User | undefined> {
    const user = this.#users.find((user) => user.username === username);
    return user;
  }

  async addTodo(userId: string, title: string) {
    const user = this.#users.find((u) => u.userId === userId);
    if (!user) {
      return false;
    }
    if (!user.todos) {
      user.todos = [];
    }
    const newTodo = { todoId: this.newId, title, isDone: false };
    user.todos.push(newTodo);
    return newTodo;
  }

  async removeTodo(userId: string, todoId: string) {
    console.log(userId, todoId);
    const user = this.#users.find((u) => u.userId === userId);
    if (!user) {
      return false;
    }
    user.todos = user.todos.filter((t) => t.todoId !== todoId);
    return true;
  }

  async getTodos(userId: string) {
    const user = this.#users.find((u) => u.userId === userId);
    if (user.todos) {
      return user.todos;
    }
    return false;
  }

  async updateTodo(userId: string, todo: Todo) {
    const user = this.#users.find((u) => u.userId === userId);
    const index = user.todos.findIndex((t) => t.todoId === todo.todoId);
    user.todos[index] = todo;
    return user.todos[index];
  }
}

export default UsersModel.getInstance();
