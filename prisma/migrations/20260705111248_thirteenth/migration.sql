/*
  Warnings:

  - You are about to drop the column `notes` on the `artefacts` table. All the data in the column will be lost.
  - Added the required column `artefact` to the `artefacts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "artefacts" DROP COLUMN "notes",
ADD COLUMN     "artefact" TEXT NOT NULL,
ADD COLUMN     "description" TEXT;
