import {
  ArgumentsHost,
  BadRequestException,
  Catch,
  ExceptionFilter,
} from '@nestjs/common';
import { Response } from 'express';

@Catch()
export class GlobalFilter implements ExceptionFilter {
  catch(exception: BadRequestException, host: ArgumentsHost) {
    console.log('global ExceptionFilter to main');

    const response: Response = host.switchToHttp().getResponse();

    response.status(400).json({
      statusCode: 400,
      message: 'test: ' + exception.message,
    });
  }
}
