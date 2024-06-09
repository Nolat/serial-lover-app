import { Inject, forwardRef } from "@nestjs/common";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { PlayerService } from "./player.service";
import {
  Player,
  PlayerCreateInput,
  PlayerOrderByWithRelationInput,
  PlayerWhereInput,
  PlayerWhereUniqueInput
} from "prisma/generated";

@Resolver(() => Player)
export class PlayerResolver {
  constructor(@Inject(forwardRef(() => PlayerService)) private playerService: PlayerService) {}

  @Query(() => Player, { nullable: true })
  async player(@Args("where") where: PlayerWhereUniqueInput): Promise<Player | null> {
    return this.playerService.fetchPlayer(where);
  }

  @Query(() => [Player])
  async players(
    @Args("where", { nullable: true }) where?: PlayerWhereInput,
    @Args("skip", { nullable: true }) skip?: number,
    @Args("take", { nullable: true }) take?: number,
    @Args("cursor", { nullable: true }) cursor?: PlayerWhereUniqueInput,
    @Args("orderBy", { nullable: true }) orderBy?: PlayerOrderByWithRelationInput
  ): Promise<Player[]> {
    return this.playerService.fetchPlayers({ skip, take, cursor, where, orderBy });
  }

  @Mutation(() => Player)
  async createPlayer(@Args("data") data: PlayerCreateInput): Promise<Player> {
    return this.playerService.createPlayer(data);
  }

  @Mutation(() => Player)
  async updatePlayer(
    @Args("where") where: PlayerWhereUniqueInput,
    @Args("data") data: PlayerCreateInput
  ): Promise<Player> {
    return this.playerService.updatePlayer({ where, data });
  }

  @Mutation(() => Player)
  async deletePlayer(@Args("where") where: PlayerWhereUniqueInput): Promise<Player> {
    return this.playerService.deletePlayer(where);
  }
}
