import UserEntity from '../entities/user.entities';
export const IUserRepositoryToken = 'IUserRepositoryToken';
export interface IUserRepository {
  save(user: UserEntity): Promise<Record<string, any>>;
  findById(id: string): Promise<Record<string, any>>;
  anonymous(data): Promise<Array<Record<string, any>>>;
  update(
    key: string,
    value: string,
    data: Record<string, any>,
  ): Promise<Record<string, any>>;
  findByAnyField(key: string, value: string): Promise<Record<string, any>>;
  deleteUser(key: string, value: string): Promise<Record<string, any>>;
}
