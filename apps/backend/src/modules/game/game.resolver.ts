import { Inject, forwardRef } from "@nestjs/common";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { GameService } from "./game.service";
import {
  Game,
  GameCreateInput,
  GameOrderByWithRelationInput,
  GameWhereInput,
  GameWhereUniqueInput
} from "prisma/generated";

@Resolver(() => Game)
export class GameResolver {
  constructor(@Inject(forwardRef(() => GameService)) private gameService: GameService) {}

  @Query(() => Game, { nullable: true })
  async game(@Args("where") where: GameWhereUniqueInput): Promise<Game | null> {
    return this.gameService.fetchGame(where);
  }

  @Query(() => [Game])
  async games(
    @Args("where", { nullable: true }) where?: GameWhereInput,
    @Args("skip", { nullable: true }) skip?: number,
    @Args("take", { nullable: true }) take?: number,
    @Args("cursor", { nullable: true }) cursor?: GameWhereUniqueInput,
    @Args("orderBy", { nullable: true }) orderBy?: GameOrderByWithRelationInput
  ): Promise<Game[]> {
    return this.gameService.fetchGames({ skip, take, cursor, where, orderBy });
  }

  @Mutation(() => Game)
  async createGame(@Args("data") data: GameCreateInput): Promise<Game> {
    return this.gameService.createGame(data);
  }

  @Mutation(() => Game)
  async updateGame(
    @Args("where") where: GameWhereUniqueInput,
    @Args("data") data: GameCreateInput
  ): Promise<Game> {
    return this.gameService.updateGame({ where, data });
  }

  @Mutation(() => Game)
  async deleteGame(@Args("where") where: GameWhereUniqueInput): Promise<Game> {
    return this.gameService.deleteGame(where);
  }
}
