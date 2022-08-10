import { IsString, Length } from 'class-validator';

export class AddTodo {
  @Length(1, 10, { message: 'Не менее 1 и не более 10 символов' })
  readonly userId: string;
  @IsString({ message: 'Должен быть строкой' })
  @Length(1, 30, { message: 'Не менее 1 и не более 30 символов' })
  readonly title: string;
}
