import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // create two dummy entities
  const entity1 = await prisma.entity.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: 'Empresa 1',
      identificationNumber: '900123741-1',
      expirationDate: '2023-05-15',
      contactName: 'Carlos Jacquin Venencia',
      contactEmail: 'jacquincarlos@hotmail.com',
      logo: 'logo01.png',
      startId: 1000,
      endId: 2000,
      active: true,
      entities: {
        create: [
          {
            codeRangeId: 1000,
            active: true,
          },
          {
            codeRangeId: 1001,
            active: true,
          },
          {
            codeRangeId: 1002,
            active: true,
          },
          {
            codeRangeId: 1003,
            active: true,
          },
          {
            codeRangeId: 1004,
            active: true,
          },
          {
            codeRangeId: 1005,
            active: true,
          },
        ],
      },
    },
  });

  const entity2 = await prisma.entity.upsert({
    where: { id: 2 },
    update: {},
    create: {
      name: 'Empresa 2',
      identificationNumber: '900456741-1',
      expirationDate: '2023-05-15',
      contactName: 'Armando López Morales',
      contactEmail: 'armalope@hotmail.com',
      logo: 'logo02.png',
      startId: 2001,
      endId: 3000,
      active: true,
      entities: {
        create: [
          {
            codeRangeId: 2001,
            active: true,
          },
          {
            codeRangeId: 2002,
            active: true,
          },
          {
            codeRangeId: 2003,
            active: true,
          },
          {
            codeRangeId: 2004,
            active: true,
          },
          {
            codeRangeId: 2005,
            active: true,
          },
        ],
      },
    },
  });

  const entity3 = await prisma.entity.upsert({
    where: { id: 3 },
    update: {},
    create: {
      name: 'Empresa 3',
      identificationNumber: '900616741-1',
      expirationDate: '2023-05-15',
      contactName: 'Lorena Meza Rodríguez',
      contactEmail: 'lomero@hotmail.com',
      logo: 'logo03.png',
      startId: 3001,
      endId: 4000,
      active: true,
      entities: {
        create: [
          {
            codeRangeId: 3001,
            active: true,
          },
          {
            codeRangeId: 3002,
            active: true,
          },
          {
            codeRangeId: 3003,
            active: true,
          },
          {
            codeRangeId: 3004,
            active: true,
          },
          {
            codeRangeId: 3005,
            active: true,
          },
        ],
      },
    },
  });

  console.log({ entity1, entity2, entity3 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
