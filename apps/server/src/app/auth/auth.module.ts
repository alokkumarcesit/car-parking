import { forwardRef, Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from '../users/users.module';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    forwardRef(() => UsersModule),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env.secret,
      signOptions: {
        expiresIn: `${process.env.jwtExpiresIn}s`,
      },
    }),
  ],
  providers: [AuthService, JwtStrategy, AuthResolver],
  exports: [AuthService],
})
export class AuthModule {}
