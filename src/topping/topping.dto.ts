import { FilterableField, KeySet, Connection } from '@nestjs-query/query-graphql';
import { Field, GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql';
import { PizzaDTO } from 'src/pizza/pizza.dto';

@ObjectType('Topping')
@KeySet(['id'])
@Connection('pizza', () => PizzaDTO, { disableUpdate: true, disableRemove: true, nullable: true })
export class ToppingDTO {
  @FilterableField(() => ID)
  id!: number;

  @FilterableField()
  name!: string;

  @Field(() => GraphQLISODateTime, {nullable: true})
  created: Date;

  @Field(() => GraphQLISODateTime, {nullable: true})
  updated: Date;
}
