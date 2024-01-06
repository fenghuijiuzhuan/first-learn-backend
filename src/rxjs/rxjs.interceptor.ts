import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';

@Injectable()
export class RxjsInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // 统计接口时长
    const now = Date.now();
    return next
      .handle()
      .pipe(
        tap(() => console.log(`统计接口时长：After...${Date.now() - now}ms `)),
      );
  }
}
