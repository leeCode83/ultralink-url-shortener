import { Module } from '@nestjs/common';
import { UrlManageService } from './url-manage.service';
import { UrlManageController } from './url-manage.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { PassportModule } from '@nestjs/passport';
import { AuthModule} from 'src/auth/auth.module'

@Module({
  providers: [UrlManageService, PrismaService],
  controllers: [UrlManageController],
  imports: [PassportModule, AuthModule]
})
export class UrlManageModule {}
