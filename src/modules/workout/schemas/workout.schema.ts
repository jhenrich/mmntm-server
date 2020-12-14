import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Workout extends Document {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  type: string;

  // @Prop()
  // rounds: any;

  @Prop()
  timeCap?: number;

  @Prop()
  createdAt?: Date;

  @Prop()
  updatedAt?: Date;
}

export const WorkoutSchema = SchemaFactory.createForClass(Workout);
