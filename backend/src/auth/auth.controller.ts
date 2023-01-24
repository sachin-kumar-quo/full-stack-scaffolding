import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { userInfo } from 'os';
import { User } from '../users/entities/user.entity';
import { AuthService } from './auth.service';
import { JwtAuthGaurd } from './gaurds/jwt-auth.gaurd';
import { LocalAuthGaurd } from './gaurds/local-auth.gaurd';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGaurd)
  @Post('login')
  async login(@Request() req) {
    return this.authService.generateToken(req.user);
  }

  @UseGuards(JwtAuthGaurd)
  @Get('user')
  async userInfo(@Request() req): Promise<User> {
    // TODO document why this async method 'userInfo' is empty
    return req.user;
  }
}
