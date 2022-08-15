import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type HotelDocument = Hotel & Document;

@Schema()
export class Hotel {
  @Prop({ required: true })
  bedrooms: string;
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
