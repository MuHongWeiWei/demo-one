import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUser(): string {
    return `<h1>Hello User!</h1>`;
  }

  getAllUsers(): string {
    return `<h1 style="color: red">All Users!</h1>`;
  }
}
