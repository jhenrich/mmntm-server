import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

@Schema({
  toJSON: { virtuals: true }
})
export class Member extends Document {
  @ApiProperty()
  @Prop({ unique: true })
  public email: string;

  @ApiProperty()
  @Prop()
  public firstName: string;

  @ApiProperty()
  @Prop()
  public lastName: string;

  @ApiProperty()
  @Prop()
  public password: string;

  @ApiProperty()
  @Prop()
  public dateOfBirth: Date;

  @ApiProperty()
  @Prop()
  public gender: string;

  @ApiProperty()
  @Prop()
  public houseNr: number;

  @ApiProperty()
  @Prop()
  public state: string;

  @ApiProperty()
  @Prop()
  public street: string;

  @ApiProperty()
  @Prop()
  public zip: string;

  @ApiProperty()
  @Prop()
  public city: string;
}

export const MemberSchema = SchemaFactory.createForClass(Member);
