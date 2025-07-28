import { Body, Controller, Get, Param, Post, Redirect, Request, UseGuards, UseInterceptors } from '@nestjs/common';
import { UrlManageService } from './url-manage.service';
import { AuthGuard } from '@nestjs/passport';
import { CacheInterceptor } from '@nestjs/cache-manager';

@Controller('url-manage')
export class UrlManageController {
    constructor(private urlManagerService: UrlManageService) {}

    @Post()
    @UseGuards(AuthGuard('jwt'))
    async createNewLink(@Request() req, @Body() data: { url: string, shortUrl: string } ){
        return this.urlManagerService.createShortUrl(data, req.user.id)
    }

    @Get('')
    async getAllShortUrl(){
        return this.urlManagerService.getAllShortUrl();
    }

    @Get('by-user')
    @UseGuards(AuthGuard('jwt'))
    async getShorUrlByUserId(@Request() req){
        return this.urlManagerService.getAllUrlByUserId(req.user.id)
    }

    @Get(':shortUrl')
    @UseInterceptors(CacheInterceptor)
    @Redirect()
    async getOriginalUrl(@Param('shortUrl') shortUrl: string){
        const originalUrl = await this.urlManagerService.getOriginalUrl(shortUrl);
        
        return { url: originalUrl }
    }
}
