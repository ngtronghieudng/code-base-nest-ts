import { Injectable, NestMiddleware } from '@nestjs/common'
import { Request, Response, NextFunction } from 'express'

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(_req: Request, _res: Response, next: NextFunction) {
    console.log('Request...')
    next()
  }
}
