/*
  Warnings:

  - Made the column `entityId` on table `EntityCodes` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "EntityCodes" DROP CONSTRAINT "EntityCodes_entityId_fkey";

-- AlterTable
ALTER TABLE "EntityCodes" ALTER COLUMN "entityId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "EntityCodes" ADD CONSTRAINT "EntityCodes_entityId_fkey" FOREIGN KEY ("entityId") REFERENCES "Entity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
