import { Module } from '@nestjs/common';
import { ToDoListController } from './to-do-list.controller';
import { ToDoListService } from './to-do-list.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AddToDo, AddToDoSchema } from './schema/addToDo.schema';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [
    UserModule,
    MongooseModule.forFeature([{ name: AddToDo.name, schema: AddToDoSchema }]),
  ],
  controllers: [ToDoListController],
  providers: [ToDoListService],
})
export class ToDoListModule {}
