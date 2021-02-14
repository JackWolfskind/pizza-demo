import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryMongooseModule } from '@nestjs-query/query-mongoose';
import { Module } from '@nestjs/common';
import { ToppingEntity, ToppingEntitySchema } from './topping.entity';
import { ToppingDTO } from './topping.dto';

@Module({
    imports: [
        NestjsQueryGraphQLModule.forFeature({
            imports: [
                NestjsQueryMongooseModule.forFeature([
                    { document: ToppingEntity, name: ToppingEntity.name, schema: ToppingEntitySchema },
                ]),
            ],
            resolvers: [{
                DTOClass: ToppingDTO,
                EntityClass: ToppingEntity,
                enableSubscriptions: true,
            }],
        }),
    ],
})
export class ToppingModule { }