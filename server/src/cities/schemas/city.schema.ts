import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Hotel } from 'src/hotels/schemas/hotel.schema';
import { Location } from './location.schema';

export type CityDocument = City & Document;

@Schema()
export class City {
  @Prop({ required: true })
  name: string;

  @Prop({ type: Types.ObjectId, ref: 'Location' })
  location: Location;

  @Prop({ type: Types.Array })
  hotels: Hotel[];
}

// city: {
//   location: {
//     latitude: 52.370216;
//     longitude: 4.895168;
//     zoom: 10;
//   };
//   name: 'Amsterdam';
// };

export const CitySchema = SchemaFactory.createForClass(City);
