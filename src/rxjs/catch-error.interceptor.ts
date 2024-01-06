import {
  CallHandler,
  ExecutionContext,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable()
export class CatchErrorInterceptor implements NestInterceptor {
  private readonly logger = new Logger(CatchErrorInterceptor.name);

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // 处理异常
    console.log('处理异常');

    return next.handle().pipe(
      catchError((err) => {
        this.logger.error(err.message, '异常栈', err.stack);
        return throwError(() => err);
      }),
    );
  }
}
