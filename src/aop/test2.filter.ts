import {
  ArgumentsHost,
  BadRequestException,
  Catch,
  ExceptionFilter,
} from '@nestjs/common';
import { Response } from 'express';

@Catch()
export class Test2Filter implements ExceptionFilter {
  catch(exception: BadRequestException, host: ArgumentsHost) {
    console.log('aop ExceptionFilter test2 to controller');

    const response: Response = host.switchToHttp().getResponse();

    response.status(400).json({
      statusCode: 400,
      message: 'test: ' + exception.message,
    });
  }
}
