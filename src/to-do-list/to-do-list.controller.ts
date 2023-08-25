import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ToDoListService } from './to-do-list.service';
import { AddToDo } from './schema/addToDo.schema';
import { CreateTaskRequestDto } from './dto/toDoList';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class ToDoListController {
  constructor(private toDoListService: ToDoListService) {}

  @Post('/create-task')
  @UseGuards(AuthGuard())
  async addTasks(@Body() task: CreateTaskRequestDto): Promise<AddToDo> {
    return this.toDoListService.addTask(task);
  }

  @Get('/list-tasks')
  @UseGuards(AuthGuard())
  async getAllTasks(): Promise<AddToDo[]> {
    return this.toDoListService.findAll();
  }
}
