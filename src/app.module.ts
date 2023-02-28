import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common'
import { AppController } from '@/app.controller'
import { AppService } from '@/app.service'
import { AuthModule } from '@/modules/auth/auth.module'
import { LoggerMiddleware } from '@/middlewares/logger.middleware'
import { APP_INTERCEPTOR } from '@nestjs/core'
import { LoggingInterceptor } from '@/middlewares/interceptors/logging.interceptor'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UsersModule } from '@/modules/users/users.module'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmConfigService } from '@/configs/db'

@Module({
  imports: [
    AuthModule,
    UsersModule,
    ConfigModule.forRoot({ envFilePath: '.env' }),
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes({ path: '*', method: RequestMethod.ALL })
  }
}
