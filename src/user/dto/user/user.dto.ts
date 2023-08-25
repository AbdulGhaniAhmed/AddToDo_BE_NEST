import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class SignUpRequestDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsEmail({}, { message: 'Enter valid email' })
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  readonly password: string;
}

export class SignUpResponseDto {
  name: 'Ghani';
  email: 'ghaniahmed12@gmail.com';
  password: '$2a$10$Ey3uXcL5xJDQa7unuOT.OeTi7xOap9ASquwB6S0yCiIWL3Wlsf8JO';
  _id: '64e7c0d5f3c652506453d70b';
  createdAt: '2023-08-24T20:43:01.831Z';
  updatedAt: '2023-08-24T20:43:01.831Z';
  __v: 0;
}

export class LoginRequestDto {
  @IsNotEmpty()
  @IsEmail({}, { message: 'Enter valid email' })
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  readonly password: string;
}
