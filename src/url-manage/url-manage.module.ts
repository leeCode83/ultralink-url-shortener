import { Module } from '@nestjs/common';
import { UrlManageService } from './url-manage.service';
import { UrlManageController } from './url-manage.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { PassportModule } from '@nestjs/passport';
import { AuthModule} from 'src/auth/auth.module'
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  providers: [UrlManageService, PrismaService],
  controllers: [UrlManageController],
  imports: [PassportModule, AuthModule, CacheModule.register({
    ttl: 60000,
    max: 100
  })]
})
export class UrlManageModule {}
