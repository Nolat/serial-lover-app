import { Inject, forwardRef } from "@nestjs/common";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { GameActionService } from "./game-action.service";
import {
  GameAction,
  GameActionCreateInput,
  GameActionOrderByWithRelationInput,
  GameActionWhereInput,
  GameActionWhereUniqueInput
} from "prisma/generated";

@Resolver(() => GameAction)
export class GameActionResolver {
  constructor(
    @Inject(forwardRef(() => GameActionService)) private gameActionService: GameActionService
  ) {}

  @Query(() => GameAction, { nullable: true })
  async gameAction(@Args("where") where: GameActionWhereUniqueInput): Promise<GameAction | null> {
    return this.gameActionService.fetchGameAction(where);
  }

  @Query(() => [GameAction])
  async gameActions(
    @Args("where", { nullable: true }) where?: GameActionWhereInput,
    @Args("skip", { nullable: true }) skip?: number,
    @Args("take", { nullable: true }) take?: number,
    @Args("cursor", { nullable: true }) cursor?: GameActionWhereUniqueInput,
    @Args("orderBy", { nullable: true }) orderBy?: GameActionOrderByWithRelationInput
  ): Promise<GameAction[]> {
    return this.gameActionService.fetchGameActions({ skip, take, cursor, where, orderBy });
  }

  @Mutation(() => GameAction)
  async createGameAction(@Args("data") data: GameActionCreateInput): Promise<GameAction> {
    return this.gameActionService.createGameAction(data);
  }

  @Mutation(() => GameAction)
  async updateGameAction(
    @Args("where") where: GameActionWhereUniqueInput,
    @Args("data") data: GameActionCreateInput
  ): Promise<GameAction> {
    return this.gameActionService.updateGameAction({ where, data });
  }

  @Mutation(() => GameAction)
  async deleteGameAction(@Args("where") where: GameActionWhereUniqueInput): Promise<GameAction> {
    return this.gameActionService.deleteGameAction(where);
  }
}
