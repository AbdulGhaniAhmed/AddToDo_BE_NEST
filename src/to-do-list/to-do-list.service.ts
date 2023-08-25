import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AddToDo } from './schema/addToDo.schema';
import * as mongoose from 'mongoose';

@Injectable()
export class ToDoListService {
  constructor(
    @InjectModel(AddToDo.name)
    private addToDoModel: mongoose.Model<AddToDo>,
  ) {}

  async addTask(task: AddToDo): Promise<AddToDo> {
    const newtask = await this.addToDoModel.create(task);
    return newtask;
  }

  async findAll(): Promise<AddToDo[]> {
    const tasks = await this.addToDoModel.find();
    return tasks;
  }
}
