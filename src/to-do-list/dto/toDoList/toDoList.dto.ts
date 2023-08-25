import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTaskRequestDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;
}

// export class CreateTaskResponseDto {
//   @ApiProperty({ example: 200 })
//   status: number;

//   @ApiProperty({ example: 'Success' })
//   message: string;

//   @ApiProperty({
//     example: {
//       id: 2,
//       adminId: 8,
//       name: 'Payroll Cycle 1',
//       from: '2020-07-10T10:00:00.000Z',
//       to: '2020-07-10T10:00:00.000Z',
//       applyToNewHires: true,
//       updatedAt: '2023-03-19T18:37:24.009Z',
//       createdAt: '2023-03-19T18:37:24.009Z',
//     },
//   })
//   data: {};

//   @ApiProperty({ example: null })
//   errors: [];
// }
