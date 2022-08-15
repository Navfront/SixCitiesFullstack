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
  foods: string[];

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

type HTL = {
  bedrooms: 3;
  city: {
    location: {
      latitude: 52.370216;
      longitude: 4.895168;
      zoom: 10;
    };
    name: 'Amsterdam';
  };
  description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.';
  goods: [
    'Heating',
    'Kitchen',
    'Cable TV',
    'Washing machine',
    'Coffee machine',
    'Dishwasher',
  ];
  host: {
    avatar_url: 'img/1.png';
    id: 3;
    is_pro: true;
    name: 'Angelina';
  };
  id: 1;
  images: ['img/1.png', 'img/2.png'];
  is_favorite: false;
  is_premium: false;
  location: {
    latitude: 52.35514938496378;
    longitude: 4.673877537499948;
    zoom: 8;
  };
  max_adults: 4;
  preview_image: 'img/1.png';
  price: 120;
  rating: 4.8;
  title: 'Beautiful & luxurious studio at great location';
  type: 'apartment';
};

export const HotelSchema = SchemaFactory.createForClass(Hotel);
