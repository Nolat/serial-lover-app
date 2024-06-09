import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { Type } from "class-transformer";
import { Int } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { registerEnumType } from "@nestjs/graphql";
import { ID } from "@nestjs/graphql";
import { Float } from "@nestjs/graphql";

export enum SortOrder {
  asc = "asc",
  desc = "desc"
}

export enum QueryMode {
  "default" = "default",
  insensitive = "insensitive"
}

export enum PlayerScalarFieldEnum {
  id = "id",
  name = "name",
  private_token = "private_token",
  game_id = "game_id",
  action_id = "action_id",
  order = "order",
  avatar = "avatar"
}

export enum GameActionScalarFieldEnum {
  id = "id",
  name = "name",
  game_id = "game_id"
}

export enum GameScalarFieldEnum {
  id = "id",
  name = "name",
  private_token = "private_token"
}

registerEnumType(GameScalarFieldEnum, { name: "GameScalarFieldEnum", description: undefined });
registerEnumType(GameActionScalarFieldEnum, {
  name: "GameActionScalarFieldEnum",
  description: undefined
});
registerEnumType(PlayerScalarFieldEnum, { name: "PlayerScalarFieldEnum", description: undefined });
registerEnumType(QueryMode, { name: "QueryMode", description: undefined });
registerEnumType(SortOrder, { name: "SortOrder", description: undefined });

@ObjectType()
export class AggregateGame {
  @Field(() => GameCountAggregate, { nullable: true })
  _count?: InstanceType<typeof GameCountAggregate>;
  @Field(() => GameMinAggregate, { nullable: true })
  _min?: InstanceType<typeof GameMinAggregate>;
  @Field(() => GameMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof GameMaxAggregate>;
}

@ArgsType()
export class CreateManyGameArgs {
  @Field(() => [GameCreateManyInput], { nullable: false })
  @Type(() => GameCreateManyInput)
  data!: Array<GameCreateManyInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneGameArgs {
  @Field(() => GameCreateInput, { nullable: false })
  @Type(() => GameCreateInput)
  data!: InstanceType<typeof GameCreateInput>;
}

@ArgsType()
export class DeleteManyGameArgs {
  @Field(() => GameWhereInput, { nullable: true })
  @Type(() => GameWhereInput)
  where?: InstanceType<typeof GameWhereInput>;
}

@ArgsType()
export class DeleteOneGameArgs {
  @Field(() => GameWhereUniqueInput, { nullable: false })
  @Type(() => GameWhereUniqueInput)
  where!: InstanceType<typeof GameWhereUniqueInput>;
}

@ArgsType()
export class FindFirstGameArgs {
  @Field(() => GameWhereInput, { nullable: true })
  @Type(() => GameWhereInput)
  where?: InstanceType<typeof GameWhereInput>;
  @Field(() => [GameOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<GameOrderByWithRelationInput>;
  @Field(() => GameWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof GameWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [GameScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof GameScalarFieldEnum>;
}

@ArgsType()
export class FindManyGameArgs {
  @Field(() => GameWhereInput, { nullable: true })
  @Type(() => GameWhereInput)
  where?: InstanceType<typeof GameWhereInput>;
  @Field(() => [GameOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<GameOrderByWithRelationInput>;
  @Field(() => GameWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof GameWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [GameScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof GameScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueGameArgs {
  @Field(() => GameWhereUniqueInput, { nullable: false })
  @Type(() => GameWhereUniqueInput)
  where!: InstanceType<typeof GameWhereUniqueInput>;
}

@ArgsType()
export class GameAggregateArgs {
  @Field(() => GameWhereInput, { nullable: true })
  @Type(() => GameWhereInput)
  where?: InstanceType<typeof GameWhereInput>;
  @Field(() => [GameOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<GameOrderByWithRelationInput>;
  @Field(() => GameWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof GameWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => GameCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof GameCountAggregateInput>;
  @Field(() => GameMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof GameMinAggregateInput>;
  @Field(() => GameMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof GameMaxAggregateInput>;
}

@InputType()
export class GameCountAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  name?: true;
  @Field(() => Boolean, { nullable: true })
  private_token?: true;
  @Field(() => Boolean, { nullable: true })
  _all?: true;
}

@ObjectType()
export class GameCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;
  @Field(() => Int, { nullable: false })
  name!: number;
  @Field(() => Int, { nullable: false })
  private_token!: number;
  @Field(() => Int, { nullable: false })
  _all!: number;
}

@InputType()
export class GameCountOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  private_token?: keyof typeof SortOrder;
}

@InputType()
export class GameCreateManyInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  name!: string;
  @Field(() => String, { nullable: true })
  private_token?: string;
}

@InputType()
export class GameCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  name!: string;
  @Field(() => String, { nullable: true })
  private_token?: string;
}

@ArgsType()
export class GameGroupByArgs {
  @Field(() => GameWhereInput, { nullable: true })
  @Type(() => GameWhereInput)
  where?: InstanceType<typeof GameWhereInput>;
  @Field(() => [GameOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<GameOrderByWithAggregationInput>;
  @Field(() => [GameScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof GameScalarFieldEnum>;
  @Field(() => GameScalarWhereWithAggregatesInput, { nullable: true })
  having?: InstanceType<typeof GameScalarWhereWithAggregatesInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => GameCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof GameCountAggregateInput>;
  @Field(() => GameMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof GameMinAggregateInput>;
  @Field(() => GameMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof GameMaxAggregateInput>;
}

@ObjectType()
export class GameGroupBy {
  @Field(() => String, { nullable: false })
  id!: string;
  @Field(() => String, { nullable: false })
  name!: string;
  @Field(() => String, { nullable: false })
  private_token!: string;
  @Field(() => GameCountAggregate, { nullable: true })
  _count?: InstanceType<typeof GameCountAggregate>;
  @Field(() => GameMinAggregate, { nullable: true })
  _min?: InstanceType<typeof GameMinAggregate>;
  @Field(() => GameMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof GameMaxAggregate>;
}

@InputType()
export class GameMaxAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  name?: true;
  @Field(() => Boolean, { nullable: true })
  private_token?: true;
}

@ObjectType()
export class GameMaxAggregate {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  name?: string;
  @Field(() => String, { nullable: true })
  private_token?: string;
}

@InputType()
export class GameMaxOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  private_token?: keyof typeof SortOrder;
}

@InputType()
export class GameMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  name?: true;
  @Field(() => Boolean, { nullable: true })
  private_token?: true;
}

@ObjectType()
export class GameMinAggregate {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  name?: string;
  @Field(() => String, { nullable: true })
  private_token?: string;
}

@InputType()
export class GameMinOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  private_token?: keyof typeof SortOrder;
}

@InputType()
export class GameOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  private_token?: keyof typeof SortOrder;
  @Field(() => GameCountOrderByAggregateInput, { nullable: true })
  _count?: InstanceType<typeof GameCountOrderByAggregateInput>;
  @Field(() => GameMaxOrderByAggregateInput, { nullable: true })
  _max?: InstanceType<typeof GameMaxOrderByAggregateInput>;
  @Field(() => GameMinOrderByAggregateInput, { nullable: true })
  _min?: InstanceType<typeof GameMinOrderByAggregateInput>;
}

@InputType()
export class GameOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  private_token?: keyof typeof SortOrder;
}

@InputType()
export class GameScalarWhereWithAggregatesInput {
  @Field(() => [GameScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<GameScalarWhereWithAggregatesInput>;
  @Field(() => [GameScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<GameScalarWhereWithAggregatesInput>;
  @Field(() => [GameScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<GameScalarWhereWithAggregatesInput>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  name?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  private_token?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class GameUncheckedCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  name!: string;
  @Field(() => String, { nullable: true })
  private_token?: string;
}

@InputType()
export class GameUncheckedUpdateManyInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  private_token?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class GameUncheckedUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  private_token?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class GameUpdateManyMutationInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  private_token?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class GameUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  private_token?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class GameWhereUniqueInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  private_token?: string;
}

@InputType()
export class GameWhereInput {
  @Field(() => [GameWhereInput], { nullable: true })
  AND?: Array<GameWhereInput>;
  @Field(() => [GameWhereInput], { nullable: true })
  OR?: Array<GameWhereInput>;
  @Field(() => [GameWhereInput], { nullable: true })
  NOT?: Array<GameWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  id?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  name?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  private_token?: InstanceType<typeof StringFilter>;
}

@ObjectType()
export class Game {
  @Field(() => ID, { nullable: false })
  id!: string;
  @Field(() => String, { nullable: false })
  name!: string;
  @Field(() => String, { nullable: false })
  private_token!: string;
}

@ArgsType()
export class UpdateManyGameArgs {
  @Field(() => GameUpdateManyMutationInput, { nullable: false })
  @Type(() => GameUpdateManyMutationInput)
  data!: InstanceType<typeof GameUpdateManyMutationInput>;
  @Field(() => GameWhereInput, { nullable: true })
  @Type(() => GameWhereInput)
  where?: InstanceType<typeof GameWhereInput>;
}

@ArgsType()
export class UpdateOneGameArgs {
  @Field(() => GameUpdateInput, { nullable: false })
  @Type(() => GameUpdateInput)
  data!: InstanceType<typeof GameUpdateInput>;
  @Field(() => GameWhereUniqueInput, { nullable: false })
  @Type(() => GameWhereUniqueInput)
  where!: InstanceType<typeof GameWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneGameArgs {
  @Field(() => GameWhereUniqueInput, { nullable: false })
  @Type(() => GameWhereUniqueInput)
  where!: InstanceType<typeof GameWhereUniqueInput>;
  @Field(() => GameCreateInput, { nullable: false })
  @Type(() => GameCreateInput)
  create!: InstanceType<typeof GameCreateInput>;
  @Field(() => GameUpdateInput, { nullable: false })
  @Type(() => GameUpdateInput)
  update!: InstanceType<typeof GameUpdateInput>;
}

@ObjectType()
export class AggregateGameAction {
  @Field(() => GameActionCountAggregate, { nullable: true })
  _count?: InstanceType<typeof GameActionCountAggregate>;
  @Field(() => GameActionMinAggregate, { nullable: true })
  _min?: InstanceType<typeof GameActionMinAggregate>;
  @Field(() => GameActionMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof GameActionMaxAggregate>;
}

@ArgsType()
export class CreateManyGameActionArgs {
  @Field(() => [GameActionCreateManyInput], { nullable: false })
  @Type(() => GameActionCreateManyInput)
  data!: Array<GameActionCreateManyInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneGameActionArgs {
  @Field(() => GameActionCreateInput, { nullable: false })
  @Type(() => GameActionCreateInput)
  data!: InstanceType<typeof GameActionCreateInput>;
}

@ArgsType()
export class DeleteManyGameActionArgs {
  @Field(() => GameActionWhereInput, { nullable: true })
  @Type(() => GameActionWhereInput)
  where?: InstanceType<typeof GameActionWhereInput>;
}

@ArgsType()
export class DeleteOneGameActionArgs {
  @Field(() => GameActionWhereUniqueInput, { nullable: false })
  @Type(() => GameActionWhereUniqueInput)
  where!: InstanceType<typeof GameActionWhereUniqueInput>;
}

@ArgsType()
export class FindFirstGameActionArgs {
  @Field(() => GameActionWhereInput, { nullable: true })
  @Type(() => GameActionWhereInput)
  where?: InstanceType<typeof GameActionWhereInput>;
  @Field(() => [GameActionOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<GameActionOrderByWithRelationInput>;
  @Field(() => GameActionWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof GameActionWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [GameActionScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof GameActionScalarFieldEnum>;
}

@ArgsType()
export class FindManyGameActionArgs {
  @Field(() => GameActionWhereInput, { nullable: true })
  @Type(() => GameActionWhereInput)
  where?: InstanceType<typeof GameActionWhereInput>;
  @Field(() => [GameActionOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<GameActionOrderByWithRelationInput>;
  @Field(() => GameActionWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof GameActionWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [GameActionScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof GameActionScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueGameActionArgs {
  @Field(() => GameActionWhereUniqueInput, { nullable: false })
  @Type(() => GameActionWhereUniqueInput)
  where!: InstanceType<typeof GameActionWhereUniqueInput>;
}

@ArgsType()
export class GameActionAggregateArgs {
  @Field(() => GameActionWhereInput, { nullable: true })
  @Type(() => GameActionWhereInput)
  where?: InstanceType<typeof GameActionWhereInput>;
  @Field(() => [GameActionOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<GameActionOrderByWithRelationInput>;
  @Field(() => GameActionWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof GameActionWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => GameActionCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof GameActionCountAggregateInput>;
  @Field(() => GameActionMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof GameActionMinAggregateInput>;
  @Field(() => GameActionMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof GameActionMaxAggregateInput>;
}

@InputType()
export class GameActionCountAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  name?: true;
  @Field(() => Boolean, { nullable: true })
  game_id?: true;
  @Field(() => Boolean, { nullable: true })
  _all?: true;
}

@ObjectType()
export class GameActionCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;
  @Field(() => Int, { nullable: false })
  name!: number;
  @Field(() => Int, { nullable: false })
  game_id!: number;
  @Field(() => Int, { nullable: false })
  _all!: number;
}

@InputType()
export class GameActionCountOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  game_id?: keyof typeof SortOrder;
}

@InputType()
export class GameActionCreateManyInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  name!: string;
  @Field(() => String, { nullable: false })
  game_id!: string;
}

@InputType()
export class GameActionCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  name!: string;
  @Field(() => String, { nullable: false })
  game_id!: string;
}

@ArgsType()
export class GameActionGroupByArgs {
  @Field(() => GameActionWhereInput, { nullable: true })
  @Type(() => GameActionWhereInput)
  where?: InstanceType<typeof GameActionWhereInput>;
  @Field(() => [GameActionOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<GameActionOrderByWithAggregationInput>;
  @Field(() => [GameActionScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof GameActionScalarFieldEnum>;
  @Field(() => GameActionScalarWhereWithAggregatesInput, { nullable: true })
  having?: InstanceType<typeof GameActionScalarWhereWithAggregatesInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => GameActionCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof GameActionCountAggregateInput>;
  @Field(() => GameActionMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof GameActionMinAggregateInput>;
  @Field(() => GameActionMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof GameActionMaxAggregateInput>;
}

@ObjectType()
export class GameActionGroupBy {
  @Field(() => String, { nullable: false })
  id!: string;
  @Field(() => String, { nullable: false })
  name!: string;
  @Field(() => String, { nullable: false })
  game_id!: string;
  @Field(() => GameActionCountAggregate, { nullable: true })
  _count?: InstanceType<typeof GameActionCountAggregate>;
  @Field(() => GameActionMinAggregate, { nullable: true })
  _min?: InstanceType<typeof GameActionMinAggregate>;
  @Field(() => GameActionMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof GameActionMaxAggregate>;
}

@InputType()
export class GameActionMaxAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  name?: true;
  @Field(() => Boolean, { nullable: true })
  game_id?: true;
}

@ObjectType()
export class GameActionMaxAggregate {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  name?: string;
  @Field(() => String, { nullable: true })
  game_id?: string;
}

@InputType()
export class GameActionMaxOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  game_id?: keyof typeof SortOrder;
}

@InputType()
export class GameActionMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  name?: true;
  @Field(() => Boolean, { nullable: true })
  game_id?: true;
}

@ObjectType()
export class GameActionMinAggregate {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  name?: string;
  @Field(() => String, { nullable: true })
  game_id?: string;
}

@InputType()
export class GameActionMinOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  game_id?: keyof typeof SortOrder;
}

@InputType()
export class GameActionOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  game_id?: keyof typeof SortOrder;
  @Field(() => GameActionCountOrderByAggregateInput, { nullable: true })
  _count?: InstanceType<typeof GameActionCountOrderByAggregateInput>;
  @Field(() => GameActionMaxOrderByAggregateInput, { nullable: true })
  _max?: InstanceType<typeof GameActionMaxOrderByAggregateInput>;
  @Field(() => GameActionMinOrderByAggregateInput, { nullable: true })
  _min?: InstanceType<typeof GameActionMinOrderByAggregateInput>;
}

@InputType()
export class GameActionOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  game_id?: keyof typeof SortOrder;
}

@InputType()
export class GameActionScalarWhereWithAggregatesInput {
  @Field(() => [GameActionScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<GameActionScalarWhereWithAggregatesInput>;
  @Field(() => [GameActionScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<GameActionScalarWhereWithAggregatesInput>;
  @Field(() => [GameActionScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<GameActionScalarWhereWithAggregatesInput>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  name?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  game_id?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class GameActionUncheckedCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  name!: string;
  @Field(() => String, { nullable: false })
  game_id!: string;
}

@InputType()
export class GameActionUncheckedUpdateManyInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  game_id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class GameActionUncheckedUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  game_id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class GameActionUpdateManyMutationInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  game_id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class GameActionUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  game_id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class GameActionWhereUniqueInput {
  @Field(() => String, { nullable: true })
  id?: string;
}

@InputType()
export class GameActionWhereInput {
  @Field(() => [GameActionWhereInput], { nullable: true })
  AND?: Array<GameActionWhereInput>;
  @Field(() => [GameActionWhereInput], { nullable: true })
  OR?: Array<GameActionWhereInput>;
  @Field(() => [GameActionWhereInput], { nullable: true })
  NOT?: Array<GameActionWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  id?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  name?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  game_id?: InstanceType<typeof StringFilter>;
}

@ObjectType()
export class GameAction {
  @Field(() => ID, { nullable: false })
  id!: string;
  @Field(() => String, { nullable: false })
  name!: string;
  @Field(() => String, { nullable: false })
  game_id!: string;
}

@ArgsType()
export class UpdateManyGameActionArgs {
  @Field(() => GameActionUpdateManyMutationInput, { nullable: false })
  @Type(() => GameActionUpdateManyMutationInput)
  data!: InstanceType<typeof GameActionUpdateManyMutationInput>;
  @Field(() => GameActionWhereInput, { nullable: true })
  @Type(() => GameActionWhereInput)
  where?: InstanceType<typeof GameActionWhereInput>;
}

@ArgsType()
export class UpdateOneGameActionArgs {
  @Field(() => GameActionUpdateInput, { nullable: false })
  @Type(() => GameActionUpdateInput)
  data!: InstanceType<typeof GameActionUpdateInput>;
  @Field(() => GameActionWhereUniqueInput, { nullable: false })
  @Type(() => GameActionWhereUniqueInput)
  where!: InstanceType<typeof GameActionWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneGameActionArgs {
  @Field(() => GameActionWhereUniqueInput, { nullable: false })
  @Type(() => GameActionWhereUniqueInput)
  where!: InstanceType<typeof GameActionWhereUniqueInput>;
  @Field(() => GameActionCreateInput, { nullable: false })
  @Type(() => GameActionCreateInput)
  create!: InstanceType<typeof GameActionCreateInput>;
  @Field(() => GameActionUpdateInput, { nullable: false })
  @Type(() => GameActionUpdateInput)
  update!: InstanceType<typeof GameActionUpdateInput>;
}

@ObjectType()
export class AggregatePlayer {
  @Field(() => PlayerCountAggregate, { nullable: true })
  _count?: InstanceType<typeof PlayerCountAggregate>;
  @Field(() => PlayerAvgAggregate, { nullable: true })
  _avg?: InstanceType<typeof PlayerAvgAggregate>;
  @Field(() => PlayerSumAggregate, { nullable: true })
  _sum?: InstanceType<typeof PlayerSumAggregate>;
  @Field(() => PlayerMinAggregate, { nullable: true })
  _min?: InstanceType<typeof PlayerMinAggregate>;
  @Field(() => PlayerMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof PlayerMaxAggregate>;
}

@ArgsType()
export class CreateManyPlayerArgs {
  @Field(() => [PlayerCreateManyInput], { nullable: false })
  @Type(() => PlayerCreateManyInput)
  data!: Array<PlayerCreateManyInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOnePlayerArgs {
  @Field(() => PlayerCreateInput, { nullable: false })
  @Type(() => PlayerCreateInput)
  data!: InstanceType<typeof PlayerCreateInput>;
}

@ArgsType()
export class DeleteManyPlayerArgs {
  @Field(() => PlayerWhereInput, { nullable: true })
  @Type(() => PlayerWhereInput)
  where?: InstanceType<typeof PlayerWhereInput>;
}

@ArgsType()
export class DeleteOnePlayerArgs {
  @Field(() => PlayerWhereUniqueInput, { nullable: false })
  @Type(() => PlayerWhereUniqueInput)
  where!: InstanceType<typeof PlayerWhereUniqueInput>;
}

@ArgsType()
export class FindFirstPlayerArgs {
  @Field(() => PlayerWhereInput, { nullable: true })
  @Type(() => PlayerWhereInput)
  where?: InstanceType<typeof PlayerWhereInput>;
  @Field(() => [PlayerOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<PlayerOrderByWithRelationInput>;
  @Field(() => PlayerWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof PlayerWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [PlayerScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof PlayerScalarFieldEnum>;
}

@ArgsType()
export class FindManyPlayerArgs {
  @Field(() => PlayerWhereInput, { nullable: true })
  @Type(() => PlayerWhereInput)
  where?: InstanceType<typeof PlayerWhereInput>;
  @Field(() => [PlayerOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<PlayerOrderByWithRelationInput>;
  @Field(() => PlayerWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof PlayerWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [PlayerScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof PlayerScalarFieldEnum>;
}

@ArgsType()
export class FindUniquePlayerArgs {
  @Field(() => PlayerWhereUniqueInput, { nullable: false })
  @Type(() => PlayerWhereUniqueInput)
  where!: InstanceType<typeof PlayerWhereUniqueInput>;
}

@ArgsType()
export class PlayerAggregateArgs {
  @Field(() => PlayerWhereInput, { nullable: true })
  @Type(() => PlayerWhereInput)
  where?: InstanceType<typeof PlayerWhereInput>;
  @Field(() => [PlayerOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<PlayerOrderByWithRelationInput>;
  @Field(() => PlayerWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof PlayerWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => PlayerCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof PlayerCountAggregateInput>;
  @Field(() => PlayerAvgAggregateInput, { nullable: true })
  _avg?: InstanceType<typeof PlayerAvgAggregateInput>;
  @Field(() => PlayerSumAggregateInput, { nullable: true })
  _sum?: InstanceType<typeof PlayerSumAggregateInput>;
  @Field(() => PlayerMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof PlayerMinAggregateInput>;
  @Field(() => PlayerMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof PlayerMaxAggregateInput>;
}

@InputType()
export class PlayerAvgAggregateInput {
  @Field(() => Boolean, { nullable: true })
  order?: true;
}

@ObjectType()
export class PlayerAvgAggregate {
  @Field(() => Float, { nullable: true })
  order?: number;
}

@InputType()
export class PlayerAvgOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  order?: keyof typeof SortOrder;
}

@InputType()
export class PlayerCountAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  name?: true;
  @Field(() => Boolean, { nullable: true })
  private_token?: true;
  @Field(() => Boolean, { nullable: true })
  game_id?: true;
  @Field(() => Boolean, { nullable: true })
  action_id?: true;
  @Field(() => Boolean, { nullable: true })
  order?: true;
  @Field(() => Boolean, { nullable: true })
  avatar?: true;
  @Field(() => Boolean, { nullable: true })
  _all?: true;
}

@ObjectType()
export class PlayerCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;
  @Field(() => Int, { nullable: false })
  name!: number;
  @Field(() => Int, { nullable: false })
  private_token!: number;
  @Field(() => Int, { nullable: false })
  game_id!: number;
  @Field(() => Int, { nullable: false })
  action_id!: number;
  @Field(() => Int, { nullable: false })
  order!: number;
  @Field(() => Int, { nullable: false })
  avatar!: number;
  @Field(() => Int, { nullable: false })
  _all!: number;
}

@InputType()
export class PlayerCountOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  private_token?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  game_id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  action_id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  order?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  avatar?: keyof typeof SortOrder;
}

@InputType()
export class PlayerCreateManyInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  name!: string;
  @Field(() => String, { nullable: true })
  private_token?: string;
  @Field(() => String, { nullable: false })
  game_id!: string;
  @Field(() => String, { nullable: false })
  action_id!: string;
  @Field(() => Int, { nullable: false })
  order!: number;
  @Field(() => String, { nullable: true })
  avatar?: string;
}

@InputType()
export class PlayerCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  name!: string;
  @Field(() => String, { nullable: true })
  private_token?: string;
  @Field(() => String, { nullable: false })
  game_id!: string;
  @Field(() => String, { nullable: false })
  action_id!: string;
  @Field(() => Int, { nullable: false })
  order!: number;
  @Field(() => String, { nullable: true })
  avatar?: string;
}

@ArgsType()
export class PlayerGroupByArgs {
  @Field(() => PlayerWhereInput, { nullable: true })
  @Type(() => PlayerWhereInput)
  where?: InstanceType<typeof PlayerWhereInput>;
  @Field(() => [PlayerOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<PlayerOrderByWithAggregationInput>;
  @Field(() => [PlayerScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof PlayerScalarFieldEnum>;
  @Field(() => PlayerScalarWhereWithAggregatesInput, { nullable: true })
  having?: InstanceType<typeof PlayerScalarWhereWithAggregatesInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => PlayerCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof PlayerCountAggregateInput>;
  @Field(() => PlayerAvgAggregateInput, { nullable: true })
  _avg?: InstanceType<typeof PlayerAvgAggregateInput>;
  @Field(() => PlayerSumAggregateInput, { nullable: true })
  _sum?: InstanceType<typeof PlayerSumAggregateInput>;
  @Field(() => PlayerMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof PlayerMinAggregateInput>;
  @Field(() => PlayerMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof PlayerMaxAggregateInput>;
}

@ObjectType()
export class PlayerGroupBy {
  @Field(() => String, { nullable: false })
  id!: string;
  @Field(() => String, { nullable: false })
  name!: string;
  @Field(() => String, { nullable: false })
  private_token!: string;
  @Field(() => String, { nullable: false })
  game_id!: string;
  @Field(() => String, { nullable: false })
  action_id!: string;
  @Field(() => Int, { nullable: false })
  order!: number;
  @Field(() => String, { nullable: true })
  avatar?: string;
  @Field(() => PlayerCountAggregate, { nullable: true })
  _count?: InstanceType<typeof PlayerCountAggregate>;
  @Field(() => PlayerAvgAggregate, { nullable: true })
  _avg?: InstanceType<typeof PlayerAvgAggregate>;
  @Field(() => PlayerSumAggregate, { nullable: true })
  _sum?: InstanceType<typeof PlayerSumAggregate>;
  @Field(() => PlayerMinAggregate, { nullable: true })
  _min?: InstanceType<typeof PlayerMinAggregate>;
  @Field(() => PlayerMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof PlayerMaxAggregate>;
}

@InputType()
export class PlayerMaxAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  name?: true;
  @Field(() => Boolean, { nullable: true })
  private_token?: true;
  @Field(() => Boolean, { nullable: true })
  game_id?: true;
  @Field(() => Boolean, { nullable: true })
  action_id?: true;
  @Field(() => Boolean, { nullable: true })
  order?: true;
  @Field(() => Boolean, { nullable: true })
  avatar?: true;
}

@ObjectType()
export class PlayerMaxAggregate {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  name?: string;
  @Field(() => String, { nullable: true })
  private_token?: string;
  @Field(() => String, { nullable: true })
  game_id?: string;
  @Field(() => String, { nullable: true })
  action_id?: string;
  @Field(() => Int, { nullable: true })
  order?: number;
  @Field(() => String, { nullable: true })
  avatar?: string;
}

@InputType()
export class PlayerMaxOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  private_token?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  game_id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  action_id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  order?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  avatar?: keyof typeof SortOrder;
}

@InputType()
export class PlayerMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  name?: true;
  @Field(() => Boolean, { nullable: true })
  private_token?: true;
  @Field(() => Boolean, { nullable: true })
  game_id?: true;
  @Field(() => Boolean, { nullable: true })
  action_id?: true;
  @Field(() => Boolean, { nullable: true })
  order?: true;
  @Field(() => Boolean, { nullable: true })
  avatar?: true;
}

@ObjectType()
export class PlayerMinAggregate {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  name?: string;
  @Field(() => String, { nullable: true })
  private_token?: string;
  @Field(() => String, { nullable: true })
  game_id?: string;
  @Field(() => String, { nullable: true })
  action_id?: string;
  @Field(() => Int, { nullable: true })
  order?: number;
  @Field(() => String, { nullable: true })
  avatar?: string;
}

@InputType()
export class PlayerMinOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  private_token?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  game_id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  action_id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  order?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  avatar?: keyof typeof SortOrder;
}

@InputType()
export class PlayerOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  private_token?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  game_id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  action_id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  order?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  avatar?: keyof typeof SortOrder;
  @Field(() => PlayerCountOrderByAggregateInput, { nullable: true })
  _count?: InstanceType<typeof PlayerCountOrderByAggregateInput>;
  @Field(() => PlayerAvgOrderByAggregateInput, { nullable: true })
  _avg?: InstanceType<typeof PlayerAvgOrderByAggregateInput>;
  @Field(() => PlayerMaxOrderByAggregateInput, { nullable: true })
  _max?: InstanceType<typeof PlayerMaxOrderByAggregateInput>;
  @Field(() => PlayerMinOrderByAggregateInput, { nullable: true })
  _min?: InstanceType<typeof PlayerMinOrderByAggregateInput>;
  @Field(() => PlayerSumOrderByAggregateInput, { nullable: true })
  _sum?: InstanceType<typeof PlayerSumOrderByAggregateInput>;
}

@InputType()
export class PlayerOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  private_token?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  game_id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  action_id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  order?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  avatar?: keyof typeof SortOrder;
}

@InputType()
export class PlayerScalarWhereWithAggregatesInput {
  @Field(() => [PlayerScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<PlayerScalarWhereWithAggregatesInput>;
  @Field(() => [PlayerScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<PlayerScalarWhereWithAggregatesInput>;
  @Field(() => [PlayerScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<PlayerScalarWhereWithAggregatesInput>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  name?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  private_token?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  game_id?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  action_id?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => IntWithAggregatesFilter, { nullable: true })
  order?: InstanceType<typeof IntWithAggregatesFilter>;
  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  avatar?: InstanceType<typeof StringNullableWithAggregatesFilter>;
}

@InputType()
export class PlayerSumAggregateInput {
  @Field(() => Boolean, { nullable: true })
  order?: true;
}

@ObjectType()
export class PlayerSumAggregate {
  @Field(() => Int, { nullable: true })
  order?: number;
}

@InputType()
export class PlayerSumOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  order?: keyof typeof SortOrder;
}

@InputType()
export class PlayerUncheckedCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  name!: string;
  @Field(() => String, { nullable: true })
  private_token?: string;
  @Field(() => String, { nullable: false })
  game_id!: string;
  @Field(() => String, { nullable: false })
  action_id!: string;
  @Field(() => Int, { nullable: false })
  order!: number;
  @Field(() => String, { nullable: true })
  avatar?: string;
}

@InputType()
export class PlayerUncheckedUpdateManyInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  private_token?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  game_id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  action_id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  order?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}

@InputType()
export class PlayerUncheckedUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  private_token?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  game_id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  action_id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  order?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}

@InputType()
export class PlayerUpdateManyMutationInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  private_token?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  game_id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  action_id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  order?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}

@InputType()
export class PlayerUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  private_token?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  game_id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  action_id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  order?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}

@InputType()
export class PlayerWhereUniqueInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  private_token?: string;
}

@InputType()
export class PlayerWhereInput {
  @Field(() => [PlayerWhereInput], { nullable: true })
  AND?: Array<PlayerWhereInput>;
  @Field(() => [PlayerWhereInput], { nullable: true })
  OR?: Array<PlayerWhereInput>;
  @Field(() => [PlayerWhereInput], { nullable: true })
  NOT?: Array<PlayerWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  id?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  name?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  private_token?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  game_id?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  action_id?: InstanceType<typeof StringFilter>;
  @Field(() => IntFilter, { nullable: true })
  order?: InstanceType<typeof IntFilter>;
  @Field(() => StringNullableFilter, { nullable: true })
  avatar?: InstanceType<typeof StringNullableFilter>;
}

@ObjectType()
export class Player {
  @Field(() => ID, { nullable: false })
  id!: string;
  @Field(() => String, { nullable: false })
  name!: string;
  @Field(() => String, { nullable: false })
  private_token!: string;
  @Field(() => String, { nullable: false })
  game_id!: string;
  @Field(() => String, { nullable: false })
  action_id!: string;
  @Field(() => Int, { nullable: false })
  order!: number;
  @Field(() => String, { nullable: true })
  avatar!: string | null;
}

@ArgsType()
export class UpdateManyPlayerArgs {
  @Field(() => PlayerUpdateManyMutationInput, { nullable: false })
  @Type(() => PlayerUpdateManyMutationInput)
  data!: InstanceType<typeof PlayerUpdateManyMutationInput>;
  @Field(() => PlayerWhereInput, { nullable: true })
  @Type(() => PlayerWhereInput)
  where?: InstanceType<typeof PlayerWhereInput>;
}

@ArgsType()
export class UpdateOnePlayerArgs {
  @Field(() => PlayerUpdateInput, { nullable: false })
  @Type(() => PlayerUpdateInput)
  data!: InstanceType<typeof PlayerUpdateInput>;
  @Field(() => PlayerWhereUniqueInput, { nullable: false })
  @Type(() => PlayerWhereUniqueInput)
  where!: InstanceType<typeof PlayerWhereUniqueInput>;
}

@ArgsType()
export class UpsertOnePlayerArgs {
  @Field(() => PlayerWhereUniqueInput, { nullable: false })
  @Type(() => PlayerWhereUniqueInput)
  where!: InstanceType<typeof PlayerWhereUniqueInput>;
  @Field(() => PlayerCreateInput, { nullable: false })
  @Type(() => PlayerCreateInput)
  create!: InstanceType<typeof PlayerCreateInput>;
  @Field(() => PlayerUpdateInput, { nullable: false })
  @Type(() => PlayerUpdateInput)
  update!: InstanceType<typeof PlayerUpdateInput>;
}

@ObjectType()
export class AffectedRows {
  @Field(() => Int, { nullable: false })
  count!: number;
}

@InputType()
export class IntFieldUpdateOperationsInput {
  @Field(() => Int, { nullable: true })
  set?: number;
  @Field(() => Int, { nullable: true })
  increment?: number;
  @Field(() => Int, { nullable: true })
  decrement?: number;
  @Field(() => Int, { nullable: true })
  multiply?: number;
  @Field(() => Int, { nullable: true })
  divide?: number;
}

@InputType()
export class IntFilter {
  @Field(() => Int, { nullable: true })
  equals?: number;
  @Field(() => [Int], { nullable: true })
  in?: Array<number>;
  @Field(() => [Int], { nullable: true })
  notIn?: Array<number>;
  @Field(() => Int, { nullable: true })
  lt?: number;
  @Field(() => Int, { nullable: true })
  lte?: number;
  @Field(() => Int, { nullable: true })
  gt?: number;
  @Field(() => Int, { nullable: true })
  gte?: number;
  @Field(() => NestedIntFilter, { nullable: true })
  not?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class IntWithAggregatesFilter {
  @Field(() => Int, { nullable: true })
  equals?: number;
  @Field(() => [Int], { nullable: true })
  in?: Array<number>;
  @Field(() => [Int], { nullable: true })
  notIn?: Array<number>;
  @Field(() => Int, { nullable: true })
  lt?: number;
  @Field(() => Int, { nullable: true })
  lte?: number;
  @Field(() => Int, { nullable: true })
  gt?: number;
  @Field(() => Int, { nullable: true })
  gte?: number;
  @Field(() => NestedIntWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedIntWithAggregatesFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedFloatFilter, { nullable: true })
  _avg?: InstanceType<typeof NestedFloatFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _sum?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _min?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _max?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class NestedFloatFilter {
  @Field(() => Float, { nullable: true })
  equals?: number;
  @Field(() => [Float], { nullable: true })
  in?: Array<number>;
  @Field(() => [Float], { nullable: true })
  notIn?: Array<number>;
  @Field(() => Float, { nullable: true })
  lt?: number;
  @Field(() => Float, { nullable: true })
  lte?: number;
  @Field(() => Float, { nullable: true })
  gt?: number;
  @Field(() => Float, { nullable: true })
  gte?: number;
  @Field(() => NestedFloatFilter, { nullable: true })
  not?: InstanceType<typeof NestedFloatFilter>;
}

@InputType()
export class NestedIntFilter {
  @Field(() => Int, { nullable: true })
  equals?: number;
  @Field(() => [Int], { nullable: true })
  in?: Array<number>;
  @Field(() => [Int], { nullable: true })
  notIn?: Array<number>;
  @Field(() => Int, { nullable: true })
  lt?: number;
  @Field(() => Int, { nullable: true })
  lte?: number;
  @Field(() => Int, { nullable: true })
  gt?: number;
  @Field(() => Int, { nullable: true })
  gte?: number;
  @Field(() => NestedIntFilter, { nullable: true })
  not?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class NestedIntNullableFilter {
  @Field(() => Int, { nullable: true })
  equals?: number;
  @Field(() => [Int], { nullable: true })
  in?: Array<number>;
  @Field(() => [Int], { nullable: true })
  notIn?: Array<number>;
  @Field(() => Int, { nullable: true })
  lt?: number;
  @Field(() => Int, { nullable: true })
  lte?: number;
  @Field(() => Int, { nullable: true })
  gt?: number;
  @Field(() => Int, { nullable: true })
  gte?: number;
  @Field(() => NestedIntNullableFilter, { nullable: true })
  not?: InstanceType<typeof NestedIntNullableFilter>;
}

@InputType()
export class NestedIntWithAggregatesFilter {
  @Field(() => Int, { nullable: true })
  equals?: number;
  @Field(() => [Int], { nullable: true })
  in?: Array<number>;
  @Field(() => [Int], { nullable: true })
  notIn?: Array<number>;
  @Field(() => Int, { nullable: true })
  lt?: number;
  @Field(() => Int, { nullable: true })
  lte?: number;
  @Field(() => Int, { nullable: true })
  gt?: number;
  @Field(() => Int, { nullable: true })
  gte?: number;
  @Field(() => NestedIntWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedIntWithAggregatesFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedFloatFilter, { nullable: true })
  _avg?: InstanceType<typeof NestedFloatFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _sum?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _min?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _max?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class NestedStringFilter {
  @Field(() => String, { nullable: true })
  equals?: string;
  @Field(() => [String], { nullable: true })
  in?: Array<string>;
  @Field(() => [String], { nullable: true })
  notIn?: Array<string>;
  @Field(() => String, { nullable: true })
  lt?: string;
  @Field(() => String, { nullable: true })
  lte?: string;
  @Field(() => String, { nullable: true })
  gt?: string;
  @Field(() => String, { nullable: true })
  gte?: string;
  @Field(() => String, { nullable: true })
  contains?: string;
  @Field(() => String, { nullable: true })
  startsWith?: string;
  @Field(() => String, { nullable: true })
  endsWith?: string;
  @Field(() => NestedStringFilter, { nullable: true })
  not?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class NestedStringNullableFilter {
  @Field(() => String, { nullable: true })
  equals?: string;
  @Field(() => [String], { nullable: true })
  in?: Array<string>;
  @Field(() => [String], { nullable: true })
  notIn?: Array<string>;
  @Field(() => String, { nullable: true })
  lt?: string;
  @Field(() => String, { nullable: true })
  lte?: string;
  @Field(() => String, { nullable: true })
  gt?: string;
  @Field(() => String, { nullable: true })
  gte?: string;
  @Field(() => String, { nullable: true })
  contains?: string;
  @Field(() => String, { nullable: true })
  startsWith?: string;
  @Field(() => String, { nullable: true })
  endsWith?: string;
  @Field(() => NestedStringNullableFilter, { nullable: true })
  not?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class NestedStringNullableWithAggregatesFilter {
  @Field(() => String, { nullable: true })
  equals?: string;
  @Field(() => [String], { nullable: true })
  in?: Array<string>;
  @Field(() => [String], { nullable: true })
  notIn?: Array<string>;
  @Field(() => String, { nullable: true })
  lt?: string;
  @Field(() => String, { nullable: true })
  lte?: string;
  @Field(() => String, { nullable: true })
  gt?: string;
  @Field(() => String, { nullable: true })
  gte?: string;
  @Field(() => String, { nullable: true })
  contains?: string;
  @Field(() => String, { nullable: true })
  startsWith?: string;
  @Field(() => String, { nullable: true })
  endsWith?: string;
  @Field(() => NestedStringNullableWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedStringNullableWithAggregatesFilter>;
  @Field(() => NestedIntNullableFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntNullableFilter>;
  @Field(() => NestedStringNullableFilter, { nullable: true })
  _min?: InstanceType<typeof NestedStringNullableFilter>;
  @Field(() => NestedStringNullableFilter, { nullable: true })
  _max?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class NestedStringWithAggregatesFilter {
  @Field(() => String, { nullable: true })
  equals?: string;
  @Field(() => [String], { nullable: true })
  in?: Array<string>;
  @Field(() => [String], { nullable: true })
  notIn?: Array<string>;
  @Field(() => String, { nullable: true })
  lt?: string;
  @Field(() => String, { nullable: true })
  lte?: string;
  @Field(() => String, { nullable: true })
  gt?: string;
  @Field(() => String, { nullable: true })
  gte?: string;
  @Field(() => String, { nullable: true })
  contains?: string;
  @Field(() => String, { nullable: true })
  startsWith?: string;
  @Field(() => String, { nullable: true })
  endsWith?: string;
  @Field(() => NestedStringWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedStringWithAggregatesFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedStringFilter, { nullable: true })
  _min?: InstanceType<typeof NestedStringFilter>;
  @Field(() => NestedStringFilter, { nullable: true })
  _max?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class NullableStringFieldUpdateOperationsInput {
  @Field(() => String, { nullable: true })
  set?: string;
}

@InputType()
export class StringFieldUpdateOperationsInput {
  @Field(() => String, { nullable: true })
  set?: string;
}

@InputType()
export class StringFilter {
  @Field(() => String, { nullable: true })
  equals?: string;
  @Field(() => [String], { nullable: true })
  in?: Array<string>;
  @Field(() => [String], { nullable: true })
  notIn?: Array<string>;
  @Field(() => String, { nullable: true })
  lt?: string;
  @Field(() => String, { nullable: true })
  lte?: string;
  @Field(() => String, { nullable: true })
  gt?: string;
  @Field(() => String, { nullable: true })
  gte?: string;
  @Field(() => String, { nullable: true })
  contains?: string;
  @Field(() => String, { nullable: true })
  startsWith?: string;
  @Field(() => String, { nullable: true })
  endsWith?: string;
  @Field(() => QueryMode, { nullable: true })
  mode?: keyof typeof QueryMode;
  @Field(() => NestedStringFilter, { nullable: true })
  not?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class StringNullableFilter {
  @Field(() => String, { nullable: true })
  equals?: string;
  @Field(() => [String], { nullable: true })
  in?: Array<string>;
  @Field(() => [String], { nullable: true })
  notIn?: Array<string>;
  @Field(() => String, { nullable: true })
  lt?: string;
  @Field(() => String, { nullable: true })
  lte?: string;
  @Field(() => String, { nullable: true })
  gt?: string;
  @Field(() => String, { nullable: true })
  gte?: string;
  @Field(() => String, { nullable: true })
  contains?: string;
  @Field(() => String, { nullable: true })
  startsWith?: string;
  @Field(() => String, { nullable: true })
  endsWith?: string;
  @Field(() => QueryMode, { nullable: true })
  mode?: keyof typeof QueryMode;
  @Field(() => NestedStringNullableFilter, { nullable: true })
  not?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class StringNullableWithAggregatesFilter {
  @Field(() => String, { nullable: true })
  equals?: string;
  @Field(() => [String], { nullable: true })
  in?: Array<string>;
  @Field(() => [String], { nullable: true })
  notIn?: Array<string>;
  @Field(() => String, { nullable: true })
  lt?: string;
  @Field(() => String, { nullable: true })
  lte?: string;
  @Field(() => String, { nullable: true })
  gt?: string;
  @Field(() => String, { nullable: true })
  gte?: string;
  @Field(() => String, { nullable: true })
  contains?: string;
  @Field(() => String, { nullable: true })
  startsWith?: string;
  @Field(() => String, { nullable: true })
  endsWith?: string;
  @Field(() => QueryMode, { nullable: true })
  mode?: keyof typeof QueryMode;
  @Field(() => NestedStringNullableWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedStringNullableWithAggregatesFilter>;
  @Field(() => NestedIntNullableFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntNullableFilter>;
  @Field(() => NestedStringNullableFilter, { nullable: true })
  _min?: InstanceType<typeof NestedStringNullableFilter>;
  @Field(() => NestedStringNullableFilter, { nullable: true })
  _max?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class StringWithAggregatesFilter {
  @Field(() => String, { nullable: true })
  equals?: string;
  @Field(() => [String], { nullable: true })
  in?: Array<string>;
  @Field(() => [String], { nullable: true })
  notIn?: Array<string>;
  @Field(() => String, { nullable: true })
  lt?: string;
  @Field(() => String, { nullable: true })
  lte?: string;
  @Field(() => String, { nullable: true })
  gt?: string;
  @Field(() => String, { nullable: true })
  gte?: string;
  @Field(() => String, { nullable: true })
  contains?: string;
  @Field(() => String, { nullable: true })
  startsWith?: string;
  @Field(() => String, { nullable: true })
  endsWith?: string;
  @Field(() => QueryMode, { nullable: true })
  mode?: keyof typeof QueryMode;
  @Field(() => NestedStringWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedStringWithAggregatesFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedStringFilter, { nullable: true })
  _min?: InstanceType<typeof NestedStringFilter>;
  @Field(() => NestedStringFilter, { nullable: true })
  _max?: InstanceType<typeof NestedStringFilter>;
}
