import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common'
import { Observable } from 'rxjs'

@Injectable()
export class RolesGuard implements CanActivate {
  canActivate(_context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    return true
  }
}
