import { INestApplication } from '@nestjs/common'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

const useSwagger = (app: INestApplication): void => {
  const config = new DocumentBuilder()
    .setTitle('Swagger')
    .setDescription('The REST API description')
    .setVersion('2.0')
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document)
}

export default useSwagger
