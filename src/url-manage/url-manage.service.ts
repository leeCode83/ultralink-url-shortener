import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UrlManageService {
    constructor(private prisma: PrismaService) {}

    async createShortUrl(data: { url: string; shortUrl: string }, userId: string){
        const existedShorturl = await this.prisma.link.findUnique({
            where: { shortCode: data.shortUrl }
        });

        if(existedShorturl){
            throw new BadRequestException('This short url already existed.');
        }

        const newShortUrl = await this.prisma.link.create({
            data: {
                originalUrl: data.url,
                shortCode: data.shortUrl,
                userId: userId
            }
        });

        return {
            newUrl: newShortUrl.shortCode,
            redirectTo: newShortUrl.originalUrl
        }
    }

    async getAllShortUrl(){
        return this.prisma.link.findMany({
            select: {
                shortCode: true,
                originalUrl: true
            }
        })
    }

    async getAllUrlByUserId(userId: string){
        const existedUser = await this.prisma.user.findUnique({
            where: { id: userId }
        });

        if(!existedUser){
            throw new NotFoundException('User not found');
        }

        return this.prisma.link.findMany({
            where: { userId: userId },
            select: {
                shortCode: true,
                originalUrl: true,
                createdAt: true
            }
        });
    }

    async getOriginalUrl(shortUrl: string){
        const url = await this.prisma.link.findUnique({
            where: { shortCode: shortUrl },
            select: { originalUrl: true }
        });

        if(!url){
            throw new NotFoundException('This url not founded in database.');
        }

        return url.originalUrl;
    }
}
