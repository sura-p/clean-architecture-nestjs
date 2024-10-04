import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from 'src/domain/service/user.service';
import { UserRepository } from 'src/infrastructure/database/repositories/user.repository';
import { IUserRepositoryToken } from 'src/domain/repository/user.repository';
import { MongooseModule } from '@nestjs/mongoose';
import {
  User,
  UserSchema,
} from 'src/infrastructure/database/schemas/user.schema';
@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
    ]),
  ],
  controllers: [UserController],
  providers: [
    UserService,
    {
      provide: IUserRepositoryToken, // Provide the interface
      useClass: UserRepository, // Use the concrete class as implementation
    },
  ],
})
export class UserModule {}
