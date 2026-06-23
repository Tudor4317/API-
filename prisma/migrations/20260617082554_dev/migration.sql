/*
  Warnings:

  - You are about to drop the `user_data` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'USER');

-- DropTable
DROP TABLE "user_data";

-- CreateTable
CREATE TABLE "UserData" (
    "userId" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "salt" TEXT NOT NULL,

    CONSTRAINT "UserData_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "Storage" (
    "artifactId" TEXT NOT NULL,
    "artifact" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Storage_pkey" PRIMARY KEY ("artifactId")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserData_username_key" ON "UserData"("username");

-- CreateIndex
CREATE UNIQUE INDEX "UserData_username_email_key" ON "UserData"("username", "email");

-- AddForeignKey
ALTER TABLE "Storage" ADD CONSTRAINT "Storage_userId_fkey" FOREIGN KEY ("userId") REFERENCES "UserData"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
