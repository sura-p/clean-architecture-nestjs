import { IUserRepository } from 'src/domain/repository/user.repository';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../schemas/user.schema';
import { Model } from 'mongoose';
import UserEntity from 'src/domain/entities/user.entities';
import { Injectable } from '@nestjs/common';
@Injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  async save(user: UserEntity): Promise<Record<string, any>> {
    try {
      return new this.userModel(user).save();
    } catch (error) {
      throw error;
    }
  }

  async findById(id: string): Promise<Record<string, any>> {
    try {
      return this.userModel.findById(id);
    } catch (error) {
      throw error;
    }
  }

  async anonymous(data: any): Promise<Array<Record<string, any>>> {
    try {
      return this.userModel.aggregate(data);
    } catch (error) {
      throw error;
    }
  }
  async update(
    key: string,
    value: string,
    data: Record<string, any>,
  ): Promise<Record<string, any>> {
    try {
      return this.userModel.updateOne({ [key]: value }, data);
    } catch (error) {
      throw error;
    }
  }

  async findByAnyField(
    key: string,
    value: string,
  ): Promise<Record<string, any>> {
    try {
      return this.userModel.findOne({ [key]: value });
    } catch (error) {
      throw error;
    }
  }

  async deleteUser(key: string, value: string): Promise<Record<string, any>> {
    try {
      return this.userModel.deleteOne({ [key]: value });
    } catch (error) {
      throw error;
    }
  }
}
