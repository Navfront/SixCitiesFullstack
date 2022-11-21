import { IsDateString, IsNumber, IsString, Length } from 'class-validator';
export class CreateReviewDto {
  @IsString()
  hotelId: string;

  @IsNumber()
  rating: number;

  @IsString({ message: 'Text должен быть строкой' })
  @Length(1, 45, { message: 'Text от 1 до 45 символов!' })
  text: string;

  @IsDateString()
  date: Date;
}
