import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

@Schema({
    toJSON: { virtuals: true }
})
export class Exercise extends Document {
    @Prop()
    @ApiProperty()
    name: string;

    @Prop()
    @ApiProperty()
    description: string;

    @Prop()
    @ApiProperty()
    type: number;
}

export const ExerciseSchema = SchemaFactory.createForClass(Exercise);
