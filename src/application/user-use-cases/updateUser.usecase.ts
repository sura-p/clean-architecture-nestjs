import { IUserRepository } from 'src/domain/repository/user.repository';
export class UpdateUserUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(
    key: string,
    value: string,
    data: Record<string, any>,
  ): Promise<Record<string, any>> {
    return this.userRepository.update(key, value, data);
  }
}
