import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

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
}

export const UserSchema = SchemaFactory.createForClass(User);
