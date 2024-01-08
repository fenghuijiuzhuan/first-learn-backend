import {
  ArgumentsHost,
  BadRequestException,
  Catch,
  ExceptionFilter,
  HttpException,
  Inject,
} from '@nestjs/common';
import { Response } from 'express';
import { AppService } from 'src/app.service';
import { OtherService } from 'src/other/other.service';

@Catch(HttpException)
export class HelloFilter implements ExceptionFilter {
  @Inject(OtherService)
  private service: OtherService;

  catch(exception: HttpException, host: ArgumentsHost) {
    // debugger;
    const http = host.switchToHttp();
    const response = http.getResponse<Response>();
    const statusCode = exception.getStatus();

    const res = exception.getResponse() as { message: string[] };

    response.status(statusCode).json({
      code: statusCode,
      message: res?.message?.join ? res?.message?.join(',') : exception.message,
      error: 'Bad Request',
      xxx: 111,
      yyy: this.service.xxx(),
    });
  }
}
