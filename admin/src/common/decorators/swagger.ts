import { applyDecorators } from '@nestjs/common';
import { ApiQuery } from '@nestjs/swagger';

export function ApiPaginationAndAuthQueries() {
  return applyDecorators(
    ApiQuery({ name: 'current', required: false, type: Number, description: '当前页数', example: 1 }),
    ApiQuery({ name: 'pageSize', required: false, type: Number, description: '每页条数', example: 10, }),
    ApiQuery({ name: 'username', required: false, type: String, description: '用户名' }),
    ApiQuery({ name: 'password', required: false, type: String, description: '密码' }),
  );
}
