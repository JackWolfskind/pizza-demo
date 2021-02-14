import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigService } from '@nestjs/config';
import { AppService } from './app.service';
import { PizzaModule } from './pizza/pizza.module';
import { ToppingModule } from './topping/topping.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';
import { GqlModuleOptions, GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        loggerLevel: 'verbose',
        uri: `mongodb://${configService.get<string>('DATABASE_HOST')}:${configService.get<string>('DATABASE_PORT')}/${configService.get<string>('DATABASE_NAME')}`,
        auth: {
          user: configService.get<string>('DATABASE_USERNAME'),
          password: configService.get<string>('DATABASE_PASSWORD')
        },
      }),
      inject: [ConfigService],
    }),
    PizzaModule,
    ToppingModule,
    GraphQLModule.forRootAsync({
      useFactory: async (configService: ConfigService) =>
      ({
        installSubscriptionHandlers: true,
        introspection: true,
        cors: true,
        debug: configService.get<boolean>('GRAPHQL_DEBUG'),
        playground:
          configService.get<boolean>('GRAPHQL_PLAYGROUND')
            ? {
              settings: {
                "editor.theme": "dark",
              },
            }
            : false,
        autoSchemaFile:
          configService.get<string>('GRAPHQL_AUTO_SCHEMA_FILE') ||
          join(process.cwd(), 'src/schema.gql'),
        definitions: {
          path: join(process.cwd(), 'src/graphql.ts'),
        },
      } as GqlModuleOptions),
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
