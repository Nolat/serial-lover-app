-- CreateTable
CREATE TABLE "Player" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "private_token" TEXT NOT NULL,
    "game_id" TEXT NOT NULL,
    "action_id" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "avatar" TEXT,

    CONSTRAINT "Player_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Game" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "private_token" TEXT NOT NULL,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GameAction" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "game_id" TEXT NOT NULL,

    CONSTRAINT "GameAction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Player_private_token_key" ON "Player"("private_token");

-- CreateIndex
CREATE UNIQUE INDEX "Game_private_token_key" ON "Game"("private_token");
