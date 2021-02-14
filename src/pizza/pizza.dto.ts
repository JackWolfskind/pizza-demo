import { Connection, FilterableField, KeySet, Relation } from '@nestjs-query/query-graphql';
import { Field, GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql';
import { ToppingDTO } from 'src/topping/topping.dto';

@ObjectType('Pizza')
@KeySet(['id'])
@Relation('toppings', () => [ToppingDTO], { disableRemove: true, nullable: true })
@Connection('toppings', () => ToppingDTO,  {nullable: true})
export class PizzaDTO {
  @FilterableField(() => ID)
  id!: number;

  @FilterableField()
  name!: string;

  @Field(() => GraphQLISODateTime, {nullable: true})
  created: Date;

  @Field(() => GraphQLISODateTime, {nullable: true})
  updated: Date;
}
