import { Body, Controller, Get, Param, Req } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller('/cats')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() /// === @Get('/')
  getHello(@Req() req: Request, @Body() body, @Param() param): string {
    return this.appService.getHello();
  }
}
