import { Controller, Get, Query } from '@nestjs/common';
import { FiresService } from './fires.service';

@Controller('/api/fires')
export class FiresController {
  constructor(private readonly firesService: FiresService) {}

  @Get()
  async getFireData(@Query('date') date: string): Promise<any> {
    return this.firesService.getFireData(date);
  }
}
