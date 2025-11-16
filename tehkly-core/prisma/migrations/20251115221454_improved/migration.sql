/*
  Warnings:

  - You are about to drop the column `allowAdvancedReports` on the `BusinessFeatures` table. All the data in the column will be lost.
  - You are about to drop the column `allowMultiBranch` on the `BusinessFeatures` table. All the data in the column will be lost.
  - You are about to drop the column `maxEmployees` on the `BusinessFeatures` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "BusinessFeatures" DROP COLUMN "allowAdvancedReports",
DROP COLUMN "allowMultiBranch",
DROP COLUMN "maxEmployees";
