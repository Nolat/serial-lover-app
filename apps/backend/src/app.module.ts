import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { GraphQLError, GraphQLFormattedError } from "graphql";
import { PrismaService } from "./modules/prisma/prisma.service";
import { GameModule } from "./modules/game/game.module";
import { PlayerModule } from "./modules/player/player.module";
import { GameActionModule } from "./modules/game-action/game-action.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GameModule,
    PlayerModule,
    GameActionModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      path: "/",
      introspection: true,
      playground: true,
      context: ({ req, res }) => ({ req, res }),
      formatError: (error: GraphQLError) => {
        const graphQLFormattedError: GraphQLFormattedError = {
          message: (error?.extensions as any)?.response?.message || error?.message
        };

        return graphQLFormattedError;
      }
    })
  ],
  controllers: [],
  providers: [PrismaService]
})
export class AppModule {}
