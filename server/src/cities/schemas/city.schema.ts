import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Hotel } from 'src/hotels/schemas/hotel.schema';
import { Location } from './location.schema';

export type CityDocument = City & Document;

@Schema()
export class City {
  @Prop({ required: true })
  name: string;

  @Prop({ type: Types.ObjectId, ref: 'Location', required: true })
  location: Location;

  @Prop([Hotel])
  hotels: [Hotel];
}

export const CitySchema = SchemaFactory.createForClass(City);
