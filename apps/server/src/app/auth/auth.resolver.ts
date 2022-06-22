import { BadRequestException, UnauthorizedException } from '@nestjs/common';
import { Args, Context, Query, Resolver } from '@nestjs/graphql';
import { User } from '../users/entities/user.entity';
import { AuthService } from './auth.service';
import { LoginResult, UserLoginInput } from './dto/auth.input';

type Login = {
  email?: string;
  token?: string;
};

@Resolver('Auth')
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Query(() => LoginResult)
  async loginuser(@Args('userLogin') userLogin: UserLoginInput) {
    const result = await this.authService.validateUserByPassword(userLogin);
    if (result) return result;
    throw new BadRequestException(
      'Could not log-in with the provided credentials'
    );
  }

  @Query(() => String)
  async refreshToken(@Context('req') request: any): Promise<string> {
    const user: User = request.user;

    if (!user)
      throw new UnauthorizedException(
        'Could not log-in with the provided credentials'
      );
    const result = await this.authService.createJWT(user);

    if (result) return result.token;

    throw new UnauthorizedException(
      'Could not log-in with the provided credentials'
    );
  }
}
