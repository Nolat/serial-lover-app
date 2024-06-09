import { Module } from "@nestjs/common";
import { GameService } from "./game.service";
import { PrismaService } from "../prisma/prisma.service";
import { GameResolver } from "./game.resolver";

@Module({
  providers: [GameService, GameResolver, PrismaService],
  exports: [GameService]
})
export class GameModule {}
