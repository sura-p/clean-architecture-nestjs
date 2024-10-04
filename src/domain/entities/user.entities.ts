export default class UserEntity {
  private firstName;
  private lastName;
  private email;
  private password;
  private role;
  constructor(
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    role: string,
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.role = role;

    if (!this.validateEmail()) {
      throw new Error('Invalid email format');
    }
  }
  private validateEmail(): boolean {
    console.log(this.email);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(this.email);
  }
}
