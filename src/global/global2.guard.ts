import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { AppService } from 'src/app.service';

@Injectable()
export class Global2Guard implements CanActivate {
  @Inject('app-service')
  private appService: AppService;

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    console.log('guard global2 check');
    console.log('guard global2 check', this.appService.getHello());

    return true;
  }
}
