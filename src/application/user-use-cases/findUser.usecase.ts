import { IUserRepository } from 'src/domain/repository/user.repository';
export class FindUserUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(key: string, value: string): Promise<Record<string, any>> {
    return this.userRepository.findByAnyField(key, value);
  }
}
