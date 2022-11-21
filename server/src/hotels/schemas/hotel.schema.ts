import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { City } from './../../cities/schemas/city.schema';
import { User } from './../../users/schemas/user.schema';
import { Location } from './../../cities/schemas/location.schema';

export type HotelDocument = Hotel & Document;

@Schema()
export class Hotel {
  @Prop({ required: true })
  bedrooms: string;

  @Prop({ type: Types.ObjectId, ref: 'City', required: true })
  city: City;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  goods: string[];

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  host: User;

  @Prop({ required: true })
  images: string[];

  @Prop({ required: true })
  is_favorite: boolean;

  @Prop({ required: true })
  is_premium: boolean;

  @Prop({ type: Types.ObjectId, ref: 'Location', required: true })
  location: Location;

  @Prop({ required: true })
  max_adults: number;

  @Prop({ required: true })
  preview_image: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  rating: number;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  type: string;
}

export const HotelSchema = SchemaFactory.createForClass(Hotel);
