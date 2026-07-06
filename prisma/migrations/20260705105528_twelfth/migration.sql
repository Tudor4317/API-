/*
  Warnings:

  - Added the required column `date` to the `artefacts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `notes` to the `artefacts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "artefacts" ADD COLUMN     "date" TEXT NOT NULL,
ADD COLUMN     "notes" TEXT NOT NULL;
