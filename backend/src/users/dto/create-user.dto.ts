import { IsNotEmpty, Length, Matches } from 'class-validator';
import { REGEX } from '../../utils/gen.utils';

export class CreateUserDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @Length(8, 24)
  email: string;

  @IsNotEmpty()
  @Length(8, 24)
  // @Matches(RegExp(REGEX.PASSWORD_RULE), { message: 'password criteria failed' }) //TODO
  password: string;

  @IsNotEmpty()
  @Length(8, 24)
  // @Matches(RegExp(REGEX.PASSWORD_RULE), { message: 'password criteria failed' }) //TODO
  confirmPassword: string;
}

export class LoginUserDto {
  @IsNotEmpty()
  @Length(8, 24)
  email: string;

  @IsNotEmpty()
  @Length(8, 24)
  @Matches(REGEX.PASSWORD_RULE)
  password: string;
}
