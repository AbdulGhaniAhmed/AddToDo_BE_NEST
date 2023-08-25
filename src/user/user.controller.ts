import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { LoginRequestDto, SignUpRequestDto } from './dto/user';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/register')
  async signUp(@Body() payload: SignUpRequestDto) {
    return this.userService.signUp(payload);
  }

  @Post('/login')
  async login(@Body() payload: LoginRequestDto): Promise<{ token: string }> {
    return this.userService.signIn(payload);
  }

  @Get('/list')
  @UseGuards(AuthGuard())
  async findAllUser(@Request() req) {
    return this.userService.getUsers();
  }

  @Get()
  @UseGuards(AuthGuard())
  async getUser(@Request() req) {
    return req?.user;
  }
}
