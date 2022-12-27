import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  getEntity(entityId: string) {
    return this.prisma.entity.findUniqueOrThrow({
      where: {
        id: parseInt(entityId),
      },
    });
  }
}
