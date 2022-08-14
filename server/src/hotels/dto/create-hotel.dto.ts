import {
  IsArray,
  IsBoolean,
  IsNumber,
  IsObject,
  IsString,
} from 'class-validator';

export class CreateHotelDto {
  @IsNumber()
  readonly bedrooms: number;

  @IsObject({ message: 'city - obj with {location, name}' })
  readonly city: {
    readonly location: {
      readonly latitude: number;
      readonly logitude: number;
      readonly zoom: number;
    };
    name: string;
  };

  @IsString({ message: 'description - string' })
  readonly description: string;

  @IsArray({ message: 'goods - array strings' })
  readonly goods: string[];

  @IsObject({ message: 'host - obj avatar_url / id / is_pro / name' })
  readonly host: {
    readonly avatar_url: string;
    readonly id: string;
    readonly is_pro: boolean;
    readonly name: string;
  };

  @IsArray({ message: 'images - array strings' })
  readonly images: string[];

  @IsBoolean({ message: 'isFavorite - boolean' })
  readonly is_favorite: boolean;

  @IsBoolean({ message: 'isPremium - boolean' })
  readonly is_premium: boolean;

  @IsObject({ message: 'location - obj latitude / logitude / zoom' })
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
