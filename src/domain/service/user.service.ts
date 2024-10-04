import { CreateUserUseCase } from 'src/application/user-use-cases/createUser.usecase';
import { DeleteUserUseCase } from 'src/application/user-use-cases/deleteUser.usecase';
import { FindUserUseCase } from 'src/application/user-use-cases/findUser.usecase';
import { UpdateUserUseCase } from 'src/application/user-use-cases/updateUser.usecase';
import {
  IUserRepository,
  IUserRepositoryToken,
} from '../repository/user.repository';
import { Inject, Injectable } from '@nestjs/common';
@Injectable()
export class UserService {
  private createUserUseCase: CreateUserUseCase;
  private getUserUseCase: FindUserUseCase;
  private deleteUserUseCase: DeleteUserUseCase;
  private updateUserUseCase: UpdateUserUseCase;
  constructor(
    @Inject(IUserRepositoryToken)
    private readonly userRepository: IUserRepository,
  ) {
    this.createUserUseCase = new CreateUserUseCase(this.userRepository);
    this.getUserUseCase = new FindUserUseCase(this.userRepository);
    this.deleteUserUseCase = new DeleteUserUseCase(this.userRepository);
    this.updateUserUseCase = new UpdateUserUseCase(this.userRepository);
  }

  async createUser(data: Record<string, any>): Promise<Record<string, any>> {
    try {
      const user = await this.createUserUseCase.execute(
        data.firstName,
        data.lastName,
        data.email,
        data.password,
        'User',
      );
      switch (true) {
        case !user:
          return {
            message: 'User not created',
            success: false,
          };

        default:
          return {
            message: 'User created',
            success: false,
          };
      }
    } catch (error) {
      throw error;
    }
  }

  async getUser(userId: string): Promise<Record<string, any>> {
    try {
      const user = await this.getUserUseCase.execute('_id', userId);
      switch (true) {
        case !user:
          return {
            message: 'User not found',
            success: false,
          };

        default:
          return {
            message: 'User fetched',
            success: false,
          };
      }
    } catch (error) {
      throw error;
    }
  }

  async deleteUser(userId: string): Promise<Record<string, any>> {
    try {
      const user = await this.deleteUserUseCase.execute('_id', userId);
      switch (true) {
        case !user:
          return {
            message: 'User not found',
            success: false,
          };

        default:
          return {
            message: 'User fetched',
            success: false,
          };
      }
    } catch (error) {
      throw error;
    }
  }

  async updateUser(
    userId: string,
    data: Record<string, any>,
  ): Promise<Record<string, any>> {
    try {
      const user = await this.updateUserUseCase.execute('_id', userId, data);
      switch (true) {
        case !user:
          return {
            message: 'User not found',
            success: false,
          };

        default:
          return {
            message: 'User fetched',
            success: false,
          };
      }
    } catch (error) {
      throw error;
    }
  }
}
