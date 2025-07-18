import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { UrlManageService } from './url-manage.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('url-manage')
export class UrlManageController {
    constructor(private urlManager: UrlManageService) {}

    @Post()
    @UseGuards(AuthGuard('jwt'))
    async createNewLink(@Request() req, @Body() data: { url: string, shortUrl: string } ){
        return this.urlManager.createShortUrl(data, req.user.id)
    }

    @Get('')
    async getAllShortUrl(){
        return this.urlManager.getAllShortUrl();
    }

    @Get('by-user')
    @UseGuards(AuthGuard('jwt'))
    async getShorUrlByUserId(@Request() req){
        return this.urlManager.getAllUrlByUserId(req.user.id)
    }
}
