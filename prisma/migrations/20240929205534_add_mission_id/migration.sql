/*
  Warnings:

  - The primary key for the `Mission` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Participation` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `eventId` on the `Participation` table. All the data in the column will be lost.
  - You are about to drop the column `taskId` on the `Participation` table. All the data in the column will be lost.
  - Added the required column `missionId` to the `Participation` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Participation" DROP CONSTRAINT "Participation_eventId_fkey";

-- DropForeignKey
ALTER TABLE "Participation" DROP CONSTRAINT "Participation_taskId_fkey";

-- AlterTable
ALTER TABLE "Mission" DROP CONSTRAINT "Mission_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Mission_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Participation" DROP CONSTRAINT "Participation_pkey",
DROP COLUMN "eventId",
DROP COLUMN "taskId",
ADD COLUMN     "missionId" INTEGER NOT NULL,
ADD CONSTRAINT "Participation_pkey" PRIMARY KEY ("userId", "missionId");

-- AddForeignKey
ALTER TABLE "Participation" ADD CONSTRAINT "Participation_missionId_fkey" FOREIGN KEY ("missionId") REFERENCES "Mission"("id") ON DELETE CASCADE ON UPDATE CASCADE;
