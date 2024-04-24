/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/entity/User';
import { UserService } from 'src/services/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.findOne(username);
    if (!user) {
      throw new Error('User not found');
    }
    if (user.password === password) {
      return await this.gerarToken(user);
    }
    throw new Error('Invalid password');
  }

  async gerarToken(payload: User) {
    return {
      access_token: this.jwtService.sign(
        {
          username: payload.username,
          sub: payload.id,
        },
        { secret: 'secret', expiresIn: '1d' },
      ),
    };
  }
}
