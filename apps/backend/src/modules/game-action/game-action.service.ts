import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Prisma } from "@prisma/client";

@Injectable()
export class GameActionService {
  constructor(private prisma: PrismaService) {}

  async fetchGameAction(where: Prisma.GameActionWhereUniqueInput) {
    return this.prisma.gameAction.findUnique({
      where
    });
  }

  async fetchGameActions(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.GameActionWhereUniqueInput;
    where?: Prisma.GameActionWhereInput;
    orderBy?: Prisma.GameActionOrderByWithRelationInput;
  }) {
    const { skip, take, cursor, where, orderBy } = params;

    return this.prisma.gameAction.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy
    });
  }

  async createGameAction(data: Prisma.GameActionCreateInput) {
    return this.prisma.gameAction.create({
      data
    });
  }

  async updateGameAction(params: {
    where: Prisma.GameActionWhereUniqueInput;
    data: Prisma.GameActionUpdateInput;
  }) {
    const { where, data } = params;

    return this.prisma.gameAction.update({
      where,
      data
    });
  }

  async deleteGameAction(where: Prisma.GameActionWhereUniqueInput) {
    return this.prisma.gameAction.delete({
      where
    });
  }
}
