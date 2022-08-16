import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Hotel } from 'src/hotels/schemas/hotel.schema';

export type LocationDocument = Location & Document;

@Schema()
export class Location {
  @Prop({ required: true })
  latitude: number;

  @Prop({ required: true })
  longitude: number;

  @Prop({ required: true })
  zoom: number;

  @Prop({ type: Types.ObjectId, ref: 'Hotel' })
  hotelId: Hotel;
}

export const LocationSchema = SchemaFactory.createForClass(Location);
