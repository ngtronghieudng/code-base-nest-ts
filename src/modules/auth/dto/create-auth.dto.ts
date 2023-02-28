import { ApiProperty } from '@nestjs/swagger'

export class CreateAuthDto {
  @ApiProperty()
  name: string

  @ApiProperty()
  age: number

  @ApiProperty()
  breed: string
}
