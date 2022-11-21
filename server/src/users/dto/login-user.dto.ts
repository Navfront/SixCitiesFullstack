import { IsEmail, IsString, Length } from 'class-validator';

export class LoginUserDto {
  @IsEmail({ message: 'Введите правильный Email!' })
  readonly email: string;
  @IsString({ message: 'Пароль должен быть строкой' })
  @Length(4, 16, { message: 'Не менее 4 и не более 16 символов' })
  readonly password: string;
}
