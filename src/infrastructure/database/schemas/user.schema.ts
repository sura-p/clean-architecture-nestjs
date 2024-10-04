import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import * as bcrypt from 'bcrypt';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true, versionKey: false, collection: 'Users' })
export class User {
  @Prop({ type: String, default: '' })
  firstName: string;

  @Prop({ type: String, default: '' })
  lastName: string;

  @Prop({ type: String, default: '' })
  email: string;

  @Prop({ type: String, default: '' })
  password: string;

  @Prop({ type: Number, default: null })
  phone: number;

  @Prop({ type: Types.ObjectId, ref: 'Roles', default: null })
  role: Types.ObjectId;

  async setPassword(plainTextPassword: string) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(plainTextPassword, salt);
  }

  async validatePassword(candidatePassword: string): Promise<boolean> {
    return await bcrypt.compare(candidatePassword, this.password);
  }
}

export const UserSchema = SchemaFactory.createForClass(User);
