import { Controller, Post, Body } from "@nestjs/common";

import { AuthService } from "./auth.service";
import { CreateUserDto } from "@shared/dto";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  create(@Body() createAuthDto: CreateUserDto) {
    return this.authService.createUser(createAuthDto);
  }
}
