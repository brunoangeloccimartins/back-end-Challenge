import { Body, Controller, Delete, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { User } from 'src/entity/User';
import { UserService } from 'src/services/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createUser(@Body() user: User): Promise<User> {
    return this.userService.createUser(user);
  }

  @Put()
  @UseGuards(JwtAuthGuard)
  updateUser(@Body() user: User): Promise<User> {
    return this.userService.update(user);
  }

  @Delete('id')
  @UseGuards(JwtAuthGuard)
  deleteUser(@Body() id: number): Promise<void> {
    return this.userService.delete(id);
  }
}
