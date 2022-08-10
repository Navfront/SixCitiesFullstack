import { Todo } from 'src/app.model';
import { IsString, Length } from 'class-validator';

export class UpdateTodoDto {
  @Length(1, 10, { message: 'Не менее 1 и не более 10 символов' })
  @IsString({ message: 'Должен быть строкой' })
  readonly userId: string;
  readonly todo: Todo;
}
