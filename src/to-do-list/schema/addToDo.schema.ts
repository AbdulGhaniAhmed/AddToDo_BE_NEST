import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class AddToDo {
  @Prop()
  name: string;
}

export const AddToDoSchema = SchemaFactory.createForClass(AddToDo);
