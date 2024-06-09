import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Player, Prisma } from "@prisma/client";

@Injectable()
export class PlayerService {
  constructor(private prisma: PrismaService) {}

  async fetchPlayer(where: Prisma.PlayerWhereUniqueInput): Promise<Player | null> {
    return this.prisma.player.findUnique({
      where
    });
  }

  async fetchPlayers(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.PlayerWhereUniqueInput;
    where?: Prisma.PlayerWhereInput;
    orderBy?: Prisma.PlayerOrderByWithRelationInput;
  }): Promise<Player[]> {
    const { skip, take, cursor, where, orderBy } = params;

    return this.prisma.player.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy
    });
  }

  async fetchPayersByGameId(gameId: string): Promise<Player[]> {
    return this.prisma.player.findMany({
      where: {
        game_id: gameId
      }
    });
  }

  async fetchCurrentTarger(player: Player): Promise<Player | null> {
    const nextTarget = await this.prisma.player.findFirst({
      where: {
        order: {
          gt: player.order
        },
        game_id: player.game_id,
        id: {
          not: player.id
        }
      },
      orderBy: {
        order: "asc"
      }
    });

    if (nextTarget) return nextTarget;

    return await this.prisma.player.findFirst({
      where: {
        order: {
          lt: player.order
        },
        game_id: player.game_id,
        id: {
          not: player.id
        }
      },
      orderBy: {
        order: "asc"
      }
    });
  }

  async createPlayer(data: Prisma.PlayerCreateInput): Promise<Player> {
    return this.prisma.player.create({
      data
    });
  }

  async updatePlayer(params: {
    where: Prisma.PlayerWhereUniqueInput;
    data: Prisma.PlayerUpdateInput;
  }): Promise<Player> {
    const { where, data } = params;

    return this.prisma.player.update({
      data,
      where
    });
  }

  async deletePlayer(where: Prisma.PlayerWhereUniqueInput): Promise<Player> {
    return this.prisma.player.delete({
      where
    });
  }
}
