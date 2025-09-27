import { injectable } from "tsyringe";
import { PrismaClient, User } from "../generated/prisma";

@injectable()
export default class UserRepo {
  constructor(private readonly prisma: PrismaClient) {}
  async createUser({
    name,
    userId,
    email,
    password,
  }: {
    name: string;
    userId: string;
    email: string;
    password: string;
  }): Promise<User> {
    return this.prisma.user.create({
      data: {
        username: name,
        email: email,
        id: userId,
        passwordHash: password,
      },
    });
  }

  async checkEmailIsExist(email: string): Promise<boolean> {
    const isExist = await this.prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!isExist) {
      return false;
    }

    return true;
  }

  async getUserByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { email } });
  }
}
