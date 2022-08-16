import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsString,
} from 'class-validator';

export class CreateHotelDto {
  @IsNumber()
  readonly bedrooms: number;

  @IsString({ message: 'city - cityId string' })
  @IsNotEmpty()
  readonly city: string;

  @IsString({ message: 'description - string' })
  readonly description: string;

  @IsArray({ message: 'goods - array strings' })
  readonly goods: string[];

  @IsString({ message: 'host - userId string' })
  @IsNotEmpty()
  readonly host: string;

  @IsArray({ message: 'images - array strings' })
  readonly images: string[];

  @IsBoolean({ message: 'isFavorite - boolean' })
  readonly is_favorite: boolean;

  @IsBoolean({ message: 'isPremium - boolean' })
  readonly is_premium: boolean;

  @IsObject({ message: 'location - object {latitude / logitude / zoom}' })
  readonly location: {
    readonly latitude: number;
    readonly logitude: number;
    readonly zoom: number;
  };

  @IsNumber()
  readonly max_adults: number;

  @IsString({ message: 'preview_image - string' })
  readonly preview_image: string;

  @IsNumber()
  readonly price: number;

  @IsNumber()
  readonly rating: number;

  @IsString({ message: 'title - string' })
  readonly title: string;

  @IsString({ message: 'type - string' })
  readonly type: string;
}
