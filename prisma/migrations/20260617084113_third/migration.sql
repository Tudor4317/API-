/*
  Warnings:

  - You are about to drop the `Storage` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserData` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Storage" DROP CONSTRAINT "Storage_userId_fkey";

-- DropTable
DROP TABLE "Storage";

-- DropTable
DROP TABLE "UserData";

-- CreateTable
CREATE TABLE "users" (
    "userId" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "salt" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "storage" (
    "artifactId" TEXT NOT NULL,
    "artifact" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "storage_pkey" PRIMARY KEY ("artifactId")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "storage" ADD CONSTRAINT "storage_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
