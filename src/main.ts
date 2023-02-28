import { NestFactory } from '@nestjs/core'
import { AppModule } from '@/app.module'
import { LoggingInterceptor } from '@/middlewares/interceptors/logging.interceptor'
import { RolesGuard } from '@/middlewares/guards/roles.guard'
import useSwagger from '@/configs/swagger'
import * as cookieParser from 'cookie-parser'

declare const module: any

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true })

  app.useGlobalGuards(new RolesGuard())
  app.useGlobalInterceptors(new LoggingInterceptor())
  app.use(cookieParser())

  useSwagger(app)

  await app.listen(3000)

  if (module.hot) {
    module.hot.accept()
    module.hot.dispose(() => app.close())
  }
}

bootstrap()
