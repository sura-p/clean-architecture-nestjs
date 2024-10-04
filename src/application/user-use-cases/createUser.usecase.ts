import UserEntity from 'src/domain/entities/user.entities';
import { IUserRepository } from 'src/domain/repository/user.repository';

export class CreateUserUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    role: string,
  ): Promise<Record<string, any>> {
    const newUser = new UserEntity(firstName, lastName, email, password, role);
    return this.userRepository.save(newUser);
  }
}
