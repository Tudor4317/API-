/*
  Warnings:

  - You are about to drop the `private_artefacts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `public_artefacts` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "private_artefacts" DROP CONSTRAINT "private_artefacts_userId_fkey";

-- DropForeignKey
ALTER TABLE "public_artefacts" DROP CONSTRAINT "public_artefacts_userId_fkey";

-- DropTable
DROP TABLE "private_artefacts";

-- DropTable
DROP TABLE "public_artefacts";

-- DropEnum
DROP TYPE "Role";

-- CreateTable
CREATE TABLE "artefacts" (
    "artefactId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "isPublic" BOOLEAN NOT NULL,

    CONSTRAINT "artefacts_pkey" PRIMARY KEY ("artefactId")
);

-- AddForeignKey
ALTER TABLE "artefacts" ADD CONSTRAINT "artefacts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
