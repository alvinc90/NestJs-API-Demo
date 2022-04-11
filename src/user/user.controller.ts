import { Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser } from 'src/auth/decorator/get-user-decorator';
import { JwtGuard } from '../auth/guard';

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
    @Get("me")
    getMe(@GetUser("id") user: User) {
        return user;
    }

    @Patch()
    editUser() {

    }
}