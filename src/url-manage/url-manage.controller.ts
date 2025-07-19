import { Body, Controller, Get, Param, Post, Redirect, Request, UseGuards } from '@nestjs/common';
import { UrlManageService } from './url-manage.service';
import { AuthGuard } from '@nestjs/passport';

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
    @Redirect()
    async getOriginalUrl(@Param('shortUrl') shortUrl: string){
        const originalUrl = await this.urlManagerService.getOriginalUrl(shortUrl);
        return { url: originalUrl }
    }
}
