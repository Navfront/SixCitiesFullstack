import { IsObject, IsString, Length } from 'class-validator';

export class CreateCityDto {
  @IsString({ message: 'Имя города должен быть строкой' })
  @Length(1, 16, { message: 'Не менее 1 и не более 16 символов' })
  readonly name: string;

  @IsObject()
  readonly location: {
    readonly latitude: number;

    readonly longitude: number;

    readonly zoom: number;
  };
}
