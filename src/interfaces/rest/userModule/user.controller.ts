import {
  BadRequestException,
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Query,
} from '@nestjs/common';
import { UserService } from 'src/domain/service/user.service';
import { CreateUserDto } from '../dtos/user.dto';

@Controller('user-auth')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/sign-up')
  async createUser(@Body() createUserDto: CreateUserDto) {
    try {
      const user: Record<string, any> =
        await this.userService.createUser(createUserDto);
      switch (true) {
        case !user.success:
          throw new BadRequestException(user.message);

        default:
          return {
            message: user.message,
            data: user.data,
          };
      }
    } catch (error) {
      console.log(error);

      if (error instanceof BadRequestException) {
        throw new BadRequestException(error.message);
      }
      throw new HttpException(
        'Oops, Something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get('/get-user')
  async getUser(@Query('id') id: string) {
    try {
      const user: Record<string, any> = await this.userService.getUser(id);
      switch (true) {
        case !user.success:
          throw new BadRequestException(user.message);

        default:
          return {
            message: user.message,
            data: user.data,
          };
      }
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw new BadRequestException(error.message);
      }
      throw new HttpException(
        'Oops, Something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
