import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { AuthService } from '@/modules/auth/auth.service'
import { CreateAuthDto } from '@/modules/auth/dto/create-auth.dto'
import { UpdateAuthDto } from '@/modules/auth/dto/update-auth.dto'
import { ApiTags } from '@nestjs/swagger'
import constants from '@/constants'

@ApiTags(constants.routeTags.AUTH)
@Controller(constants.routeApis.AUTH)
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  create(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.create(createAuthDto)
  }

  @Get()
  findAll() {
    return this.authService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
    return this.authService.update(+id, updateAuthDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(+id)
  }
}
