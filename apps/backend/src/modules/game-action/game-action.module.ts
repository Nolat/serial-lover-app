import { Module } from "@nestjs/common";
import { GameActionService } from "./game-action.service";
import { PrismaService } from "../prisma/prisma.service";
import { GameActionResolver } from "./game-action.resolver";

@Module({
  providers: [GameActionService, GameActionResolver, PrismaService],
  exports: [GameActionService]
})
export class GameActionModule {}
