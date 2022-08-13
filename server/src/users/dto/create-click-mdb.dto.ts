import { IsString } from 'class-validator';

export class CreateClickDto {
  @IsString({ message: 'Date must be string' })
  readonly clickDate: string;
}
