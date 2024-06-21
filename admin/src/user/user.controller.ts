import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { ApiPaginationAndAuthQueries } from 'src/common/decorators/swagger';
@ApiTags('用户模块')
@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }
  @ApiOperation({
    summary: '添加用户',
  })
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @ApiOperation({
    summary: '用户列表',
  })
  @Get()
  @ApiPaginationAndAuthQueries()
  async findAll(
    @Query('current') current: number = 1,
    @Query('pageSize') pageSize: number = 10,
    @Query('username') username: string,
    @Query('password') password: string, 
  ) {
    try {
      const { data, total } = await this.userService.findAll({
        current, 
        pageSize,
        username,
        password
      });
      return {
        list: data,
        success: true,
        total,
      };
    } catch (error) {
      console.error('Error fetching user data:', error);
      return {
        list: [],
        success: false,
        total: 0,
        error: error.message || 'An unexpected error occurred',
      };
    }
  }

  @ApiOperation({
    summary: '查找指定用户',
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @ApiOperation({
    summary: '修改用户',
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @ApiOperation({
    summary: '删除用户',
  })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result =await this.userService.remove(+id);
    console.log({ result })
    return {
      result,
      success: true,
    }
  }
}
