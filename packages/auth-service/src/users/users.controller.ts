import { Controller } from "@nestjs/common";
import { MessagePattern, Payload } from "@nestjs/microservices";

import { UsersService } from "./users.service";
import { CreateUserDto } from "@shared/dto";

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @MessagePattern("create_user")
  create(@Payload() createUserDto: CreateUserDto) {
    console.log(createUserDto, "MICRO SERVICE", Date.now());
    return this.usersService.create(createUserDto);
  }
}
