-- CreateTable
CREATE TABLE "Entity" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "identificationNumber" TEXT NOT NULL,
    "expirationDate" TEXT NOT NULL,
    "contactName" TEXT NOT NULL,
    "contactEmail" TEXT NOT NULL,
    "logo" TEXT NOT NULL,
    "startId" INTEGER NOT NULL,
    "endId" INTEGER NOT NULL,
    "active" BOOLEAN DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Entity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EntityCodes" (
    "id" SERIAL NOT NULL,
    "codeRangeId" INTEGER NOT NULL,
    "entityId" INTEGER NOT NULL,
    "active" BOOLEAN DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "EntityCodes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "EntityCodes" ADD CONSTRAINT "EntityCodes_entityId_fkey" FOREIGN KEY ("entityId") REFERENCES "Entity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
