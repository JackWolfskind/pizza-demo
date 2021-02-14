import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryMongooseModule } from '@nestjs-query/query-mongoose';
import { Module } from '@nestjs/common';
import { PizzaDTO } from './pizza.dto';
import { PizzaEntity, PizzaEntitySchema } from './pizza.entity';

@Module({
    imports: [
        NestjsQueryGraphQLModule.forFeature({
            imports: [
                NestjsQueryMongooseModule.forFeature([
                    { document: PizzaEntity, name: PizzaEntity.name, schema: PizzaEntitySchema },
                ]),
            ],
            resolvers: [{
                DTOClass: PizzaDTO,
                EntityClass: PizzaEntity,
                enableSubscriptions: true,
            }],
        }),
    ],
})
export class PizzaModule { }