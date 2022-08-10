import { IsString, Length } from 'class-validator';

export class GetUserByLogin {
  @IsString({ message: 'Логин должен быть строкой' })
  @Length(1, 10, { message: 'Не менее 1 и не более 10 символов' })
  readonly login: string;
}
