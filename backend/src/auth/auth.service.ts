import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { User } from '../users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private usersService: UsersService,
  ) {}

  generateToken(req: any) {
    console.log('generate token', req);
    return {
      access_token: this.jwtService.sign({ name: req.name, sub: req.id }),
    };
  }

  async validateUserCreds(email: string, password: string): Promise<User> {
    const user = await this.usersService.findUser(email);
    if (!user) throw new BadRequestException();
    if (!(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
