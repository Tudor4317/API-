/*
  Warnings:

  - You are about to drop the `session` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `storage` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "storage" DROP CONSTRAINT "storage_userId_fkey";

-- DropTable
DROP TABLE "session";

-- DropTable
DROP TABLE "storage";

-- CreateTable
CREATE TABLE "artifacts" (
    "artifactId" TEXT NOT NULL,
    "artifact" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "artifacts_pkey" PRIMARY KEY ("artifactId")
);

-- AddForeignKey
ALTER TABLE "artifacts" ADD CONSTRAINT "artifacts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
