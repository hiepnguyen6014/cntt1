import { Injectable } from "@nestjs/common";

import { CreateUserDto } from "@shared/dto";
import { User } from "@shared/entities";

@Injectable()
export class UsersService {
  private readonly users: User[] = [];

  create(createUserDto: CreateUserDto) {
    this.users.push({ ...createUserDto, id: this.users.length + 1 });
  }
}
