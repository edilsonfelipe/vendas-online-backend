import { Body, Controller, Post } from '@nestjs/common';
import { get } from 'http';
import { CreateUserDto } from './dto/createUser.dto';

@Controller('user')
export class UserController {

    @Post()
    async CreateUser(
        @Body() createUser: CreateUserDto
    ){
        return {
            ...createUser,
            password: undefined,
        };
    }
}
