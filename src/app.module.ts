import { Module } from '@nestjs/common';
import { FiresModule } from './fires/fires.module';

@Module({
  imports: [FiresModule],
})
export class AppModule {}
