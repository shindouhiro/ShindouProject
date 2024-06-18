import { IsString, Length, IsOptional } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiPropertyOptional({ description: '用户名', example: 'testuser' })
  @IsOptional()
  @IsString()
  @Length(4, 20)
  username?: string;

  @ApiPropertyOptional({ description: '密码', example: 'testpassword' })
  @IsOptional()
  @IsString()
  @Length(6, 20)
  password?: string;
}
