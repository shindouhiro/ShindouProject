import { IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @IsString()
  @Length(4, 20)
  @ApiProperty({ description: '用户名' })
  username: string;

  @IsString()
  @Length(6, 20)
  @ApiProperty()
  @ApiProperty({ description: '密码' })
  password: string;
}
