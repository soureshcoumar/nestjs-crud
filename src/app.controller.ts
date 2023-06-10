import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './user.model';
import { UpdateUserDto } from './userUpdate.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Post()
  async createUser(@Body() userDto: User) {
    return this.appService.createUser(userDto);
  }
  @Get()
  async readUser() {
    ``;
    return this.appService.readuser();
  }
  @Put(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() updateData: UpdateUserDto,
  ): Promise<User> {
    return this.appService.updateuser(id, updateData);
  }
  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    return this.appService.deleteuser(id);
  }
}
