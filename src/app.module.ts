import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
import { YogaDriver, YogaDriverConfig } from '@graphql-yoga/nestjs';
import { GraphQLModule } from '@nestjs/graphql';
import { DocumentsModule } from './documents/documents.module';

@Module({
  imports: [
    GraphQLModule.forRoot<YogaDriverConfig>({
      driver: YogaDriver,
    }),
    DocumentsModule,
  ],
})
export class AppModule {}
