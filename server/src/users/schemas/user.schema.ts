import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId, Types } from 'mongoose';
import { City } from 'src/cities/schemas/city.schema';
import { Hotel } from 'src/hotels/schemas/hotel.schema';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  avatar_url: string;

  @Prop()
  is_pro: boolean;

  @Prop()
  role: string;

  @Prop([{ type: Types.ObjectId, ref: 'Hotel' }])
  favorites: Types.ObjectId[];
}

export const UserSchema = SchemaFactory.createForClass(User);
