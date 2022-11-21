import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Hotel } from 'src/hotels/schemas/hotel.schema';
import { User } from 'src/users/schemas/user.schema';

export type ReviewDocument = Review & Document;

@Schema()
export class Review {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  userId: User;

  @Prop({ type: Types.ObjectId, ref: 'Hotel', required: true })
  hotelId: Hotel;

  @Prop({ required: true })
  rating: number;

  @Prop({ required: true })
  text: string;

  @Prop()
  date: Date;
}

export const ReviewSchema = SchemaFactory.createForClass(Review);
