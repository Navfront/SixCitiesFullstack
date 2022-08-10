import { IsString, Length } from 'class-validator';

export class DeleteTodo {
  @IsString({ message: 'Должен быть строкой' })
  @Length(1, 10, { message: 'Не менее 1 и не более 10 символов' })
  readonly userId: string;
  @IsString({ message: 'Должен быть строкой' })
  @Length(1, 10, { message: 'Не менее 1 и не более 10 символов' })
  readonly todoId: string;
}
