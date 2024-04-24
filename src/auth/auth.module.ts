import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.auth';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entity/User';
import { UserService } from 'src/services/user.service';
import { JwtStrategy } from './jwt.strategy';
import { AuthController } from 'src/controllers/auth.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User]), PassportModule, JwtModule],
  controllers: [AuthController],
  providers: [AuthService, UserService, LocalStrategy, JwtStrategy],
})
export class AuthModule {}
