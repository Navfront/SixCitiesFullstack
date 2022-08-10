import { IsString, Length } from 'class-validator';

export class GetTodosById {
  @Length(1, 10, { message: 'Не менее 1 и не более 10 символов' })
  @IsString({ message: 'Должен быть строкой' })
  readonly userId: string;
}
