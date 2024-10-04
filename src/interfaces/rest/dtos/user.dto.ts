import { IsString, IsNotEmpty, Matches } from 'class-validator';
import { Transform } from 'class-transformer';
export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.charAt(0).toUpperCase() + value.slice(1))
  firstName: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.charAt(0).toUpperCase() + value.slice(1))
  lastName: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, {
    message: 'Please enter a valid email',
  })
  email: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, {
    message: 'Password must be at least 8 characters long',
  })
  password: string;
}

export class LoginUserDto {
  @IsString()
  @IsNotEmpty()
  @Matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, {
    message: 'Please enter a valid email',
  })
  email: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, {
    message: 'Password must be at least 8 characters long',
  })
  password: string;
}
