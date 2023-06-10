import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  username: string;

  @Prop()
  description: string;

  @Prop({ default: Date.now })
  dateCreated: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
