import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
@ApiTags('用户模块')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  @ApiOperation({
    summary: '添加用户', // 接口描述信息
  })
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  async findAll(
    @Query('current') current: number = 1,
    @Query('pageSize') pageSize: number = 10,) {

    const { data, total } = await this.userService.findAll(current, pageSize);
    console.log(data, total)
    return {
      data,
      success: true,
      total,
    };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
