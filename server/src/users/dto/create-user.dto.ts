import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'Имя пользователя должен быть строкой' })
  @Length(1, 10, { message: 'Не менее 1 и не более 10 символов' })
  readonly username: string;
  @IsEmail({ message: 'Введите правильный Email!' })
  readonly email: string;
  @IsString({ message: 'Пароль должен быть строкой' })
  @Length(4, 16, { message: 'Не менее 4 и не более 16 символов' })
  readonly password: string;
}
