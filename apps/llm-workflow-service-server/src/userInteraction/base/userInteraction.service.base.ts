/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  UserInteraction as PrismaUserInteraction,
} from "@prisma/client";

export class UserInteractionServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.UserInteractionCountArgs, "select">
  ): Promise<number> {
    return this.prisma.userInteraction.count(args);
  }

  async userInteractions(
    args: Prisma.UserInteractionFindManyArgs
  ): Promise<PrismaUserInteraction[]> {
    return this.prisma.userInteraction.findMany(args);
  }
  async userInteraction(
    args: Prisma.UserInteractionFindUniqueArgs
  ): Promise<PrismaUserInteraction | null> {
    return this.prisma.userInteraction.findUnique(args);
  }
  async createUserInteraction(
    args: Prisma.UserInteractionCreateArgs
  ): Promise<PrismaUserInteraction> {
    return this.prisma.userInteraction.create(args);
  }
  async updateUserInteraction(
    args: Prisma.UserInteractionUpdateArgs
  ): Promise<PrismaUserInteraction> {
    return this.prisma.userInteraction.update(args);
  }
  async deleteUserInteraction(
    args: Prisma.UserInteractionDeleteArgs
  ): Promise<PrismaUserInteraction> {
    return this.prisma.userInteraction.delete(args);
  }
}
