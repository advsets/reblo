import {
  validate, IsEmail, IsNotEmpty, IsString, Length, Validate,
  ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface
} from 'class-validator';

@ValidatorConstraint({name: 'account', async: false})
class Account implements ValidatorConstraintInterface {
  async validate(text: string, args: ValidationArguments): Promise<boolean> {
    return text.length > 10;
  }

  defaultMessage(args: ValidationArguments) {
    return 'Text ($value) is too short or too long!';
  }
}

export class AdminLoginDto {
  @IsString()
  @Validate(Account)
  account: string;
  @IsString()
  @Length(5, 24, {message: 'aaaa'})
  password: string;
}

export class AdminCreateDto {
  @IsString()
  @IsNotEmpty()
  @Length(5, 24)
  username: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @Length(5, 24)
  password: string;
}
