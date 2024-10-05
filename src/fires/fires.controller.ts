import { Controller, Get } from '@nestjs/common';
import { FiresService } from './fires.service';

@Controller('/api/fires')
export class FiresController {
  constructor(private readonly firesService: FiresService) {}

  @Get()
  async getFires() {
    return await this.firesService.getFireData();
  }
}
