import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
@ApiTags('用户鉴权')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @ApiOperation({
    summary: '鉴权', 
  })
  @HttpCode(HttpStatus.OK)
  @Post('login')
  async signIn(@Body() signInDto: Record<string, any>) {
    try {
     const { access_token } = await this.authService.signIn(signInDto.username, signInDto.password);
     return { 
      token: access_token 
    };
    }catch (error) {
      throw new Error(error.message);
    }
  }
}
