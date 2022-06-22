import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { AuthService, JwtPayload } from './auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly _authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.secret,
      ignoreExpiration: false,
    });
  }

  async validate(payload: JwtPayload) {
    const user = await this._authService.validateJwtPayload(payload);
    if (!user)
      throw new UnauthorizedException(
        'Could not log-in with the provided credentials'
      );
    return user;
  }
}
