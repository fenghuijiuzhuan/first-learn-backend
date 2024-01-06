import {
  CallHandler,
  ExecutionContext,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';
import { RxjsService } from './rxjs.service';

@Injectable()
export class TapInterceptor implements NestInterceptor {
  constructor(private readonly rxjsService: RxjsService) {}

  private readonly logger = new Logger(TapInterceptor.name);

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      tap((data) => {
        // 模拟更新缓存
        console.log(`模拟更新缓存`);

        this.rxjsService.hello();
        this.logger.log(`记录日志 log something`, data);
      }),
    );
  }
}
