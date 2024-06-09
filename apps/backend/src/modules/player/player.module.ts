import { Module } from "@nestjs/common";
import { PlayerService } from "./player.service";
import { PrismaService } from "../prisma/prisma.service";
import { PlayerResolver } from "./player.resolver";

@Module({
  providers: [PlayerService, PlayerResolver, PrismaService],
  exports: [PlayerService]
})
export class PlayerModule {}
