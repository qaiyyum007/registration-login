import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto.ts/regisration.dto';
import { LoginDto } from './dto.ts/login.dto';
import { User } from 'src/user/entities/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  signUp(@Body() { email, password }: RegisterDto): Promise<User> {
    return this.authService.register(email, password);
  }

  @Post('/login')
  async login(@Body() loginDto: LoginDto): Promise<{ accessToken: string }> {
    const { email, password } = loginDto;
    return this.authService.login(email, password);
  }
}
