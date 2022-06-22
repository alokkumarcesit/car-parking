import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { LoginResult, UserLoginInput } from './dto/auth.input';

import * as bcrypt from 'bcrypt';
import { User, UserRole } from '../users/entities/user.entity';

export interface JwtPayload {
  email: string;
  _id: number;
  expiration?: Date;
}

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UsersService)) private _userService: UsersService,
    private _jwtService: JwtService
  ) {}

  async validateUserByPassword(
    login: UserLoginInput
  ): Promise<LoginResult | undefined> {
    let user: User;
    if (login.email) {
      user = await this._userService.findOneByEmail(login.email);
    }

    if (user?.isActive === false || user?.role !== UserRole.ADMIN)
      return undefined;
    try {
      if (await bcrypt.compare(login.password, user.password)) {
        const token = this.createJWT(user).token;
        const result: LoginResult = {
          email: user.email,
          token,
        };
        return result;
      }
    } catch (error) {
      return undefined;
    }
  }
  createJWT(user: User): { data: JwtPayload; token: string } {
    const expiresIn = parseInt(process.env.jwtExpiresIn);
    let expiration: Date | undefined;

    if (expiresIn) {
      expiration = new Date();
      expiration.setTime(expiration.getTime() + expiresIn * 1000);
    }

    const data: JwtPayload = {
      email: user.email,
      _id: user.id,
      expiration,
    };

    const token = this._jwtService.sign(data);
    return {
      data,
      token,
    };
  }

  async validateJwtPayload(payload: JwtPayload): Promise<User | undefined> {
    const user = await this._userService.findOneByEmail(payload.email);
    if (user?.isActive) {
      return user;
    }
    return undefined;
  }
}
