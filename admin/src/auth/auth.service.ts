import { Injectable,  UnauthorizedException, } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
 

  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService
  ) { }

  async signIn(username, pass) {
    const user = await this.userService.findOneByUsername(username);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
