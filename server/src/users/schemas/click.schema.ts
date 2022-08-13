import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = Click & Document;

@Schema()
export class Click {
  @Prop({ required: true })
  clickDate: string;
}

export const ClickSchema = SchemaFactory.createForClass(Click);
