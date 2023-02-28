import { Module } from '@nestjs/common'
import { AuthService } from '@/modules/auth/auth.service'
import { AuthController } from '@/modules/auth/auth.controller'

@Module({
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
