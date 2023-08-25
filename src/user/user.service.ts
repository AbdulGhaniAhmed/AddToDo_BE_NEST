import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/user.schema';
import mongoose from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { LoginRequestDto, SignUpRequestDto } from './dto/user';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private userModel: mongoose.Model<User>,
    private jwtService: JwtService,
  ) {}

  async signUp(payload: SignUpRequestDto) {
    const { name, email, password } = payload;

    const encryptPassword = await bcrypt.hash(password, 10);
    const newUser = await this.userModel.create({
      name,
      email,
      password: encryptPassword,
    });

    return newUser;
  }

  async signIn(payload: LoginRequestDto): Promise<{ token: string }> {
    const { email, password } = payload;

    const user = await this.userModel.findOne({
      email,
    });

    if (!user) {
      throw new UnauthorizedException('Invalid Email');
    }

    const isPassword = await bcrypt.compare(password, user.password);

    if (!isPassword) {
      throw new UnauthorizedException('Invalid Password');
    }
    const token = this.jwtService.sign({ id: user._id });
    return { token };
  }

  async getUsers() {
    const users = await this.userModel.find();
    return users;
  }
}
