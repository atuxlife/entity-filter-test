import {
  Controller,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  Res,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@ApiTags('Entity filter')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/dev/v2.1/entities/filter/:entityId')
  @ApiOperation({ summary: 'List all attributes and properties of an entity' })
  @ApiResponse({
    status: 200,
    description: 'The entity has been successfully listed.',
    //type: productSchema,
  })
  async getEntity(
    @Res() res,
    @Param('entityId') entityId: string,
  ): Promise<JSON> {
    const entity = await this.appService.getEntity(entityId);
    if (!entity) throw new NotFoundException('Entity does not exist!');
    return res.status(HttpStatus.OK).send(entity);
  }
}
