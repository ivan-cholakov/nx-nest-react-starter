import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { DbService } from '@full-stack/api/data-access-db'

@Injectable()
export class UserService {
  constructor(private db: DbService) { }

  create(createUserInput: CreateUserInput) {
    return this.db.user.create({ data: createUserInput })
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
