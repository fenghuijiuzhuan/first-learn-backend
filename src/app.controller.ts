import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  @Inject('app-service')
  private readonly appService: AppService;

  @Inject('person2')
  private readonly person2: {
    name: string;
    age: number;
  };

  @Inject('person3')
  private readonly person3: {
    name: string;
    desc: string;
  };

  @Get()
  getHello(): string {
    console.log(this.person2, this.person3);
    return this.appService.getHello();
  }
}
