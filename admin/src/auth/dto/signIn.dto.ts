import { IsNotEmpty, IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SignInDto {
  @IsString()
  @Length(4, 20)
  @IsNotEmpty()
  @ApiProperty({ example: 'Shindou', description: '用户名' })
  username: string;

  @IsString()
  @Length(6, 20)
  @IsNotEmpty()
  @ApiProperty({ example: '123456', description: '密码' })
  password: string;
}
