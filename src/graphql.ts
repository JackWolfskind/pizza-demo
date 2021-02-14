
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum PizzaSortFields {
    id = "id",
    name = "name"
}

export enum SortDirection {
    ASC = "ASC",
    DESC = "DESC"
}

export enum SortNulls {
    NULLS_FIRST = "NULLS_FIRST",
    NULLS_LAST = "NULLS_LAST"
}

export enum ToppingSortFields {
    id = "id",
    name = "name"
}

export interface CursorPaging {
    before?: ConnectionCursor;
    after?: ConnectionCursor;
    first?: number;
    last?: number;
}

export interface PizzaFilter {
    and?: PizzaFilter[];
    or?: PizzaFilter[];
    id?: IDFilterComparison;
    name?: StringFieldComparison;
}

export interface IDFilterComparison {
    is?: boolean;
    isNot?: boolean;
    eq?: string;
    neq?: string;
    gt?: string;
    gte?: string;
    lt?: string;
    lte?: string;
    like?: string;
    notLike?: string;
    iLike?: string;
    notILike?: string;
    in?: string[];
    notIn?: string[];
}

export interface StringFieldComparison {
    is?: boolean;
    isNot?: boolean;
    eq?: string;
    neq?: string;
    gt?: string;
    gte?: string;
    lt?: string;
    lte?: string;
    like?: string;
    notLike?: string;
    iLike?: string;
    notILike?: string;
    in?: string[];
    notIn?: string[];
}

export interface PizzaSort {
    field: PizzaSortFields;
    direction: SortDirection;
    nulls?: SortNulls;
}

export interface OffsetPaging {
    limit?: number;
    offset?: number;
}

export interface ToppingFilter {
    and?: ToppingFilter[];
    or?: ToppingFilter[];
    id?: IDFilterComparison;
    name?: StringFieldComparison;
}

export interface ToppingSort {
    field: ToppingSortFields;
    direction: SortDirection;
    nulls?: SortNulls;
}

export interface RelationsInput {
    id: string;
    relationIds: string[];
}

export interface CreateOnePizzaInput {
    pizza: CreatePizza;
}

export interface CreatePizza {
    id?: string;
    name?: string;
    created?: DateTime;
    updated?: DateTime;
}

export interface CreateManyPizzasInput {
    pizzas: CreatePizza[];
}

export interface UpdateOnePizzaInput {
    id: string;
    update: UpdatePizza;
}

export interface UpdatePizza {
    id?: string;
    name?: string;
    created?: DateTime;
    updated?: DateTime;
}

export interface UpdateManyPizzasInput {
    filter: PizzaUpdateFilter;
    update: UpdatePizza;
}

export interface PizzaUpdateFilter {
    and?: PizzaUpdateFilter[];
    or?: PizzaUpdateFilter[];
    id?: IDFilterComparison;
    name?: StringFieldComparison;
}

export interface DeleteOneInput {
    id: string;
}

export interface DeleteManyPizzasInput {
    filter: PizzaDeleteFilter;
}

export interface PizzaDeleteFilter {
    and?: PizzaDeleteFilter[];
    or?: PizzaDeleteFilter[];
    id?: IDFilterComparison;
    name?: StringFieldComparison;
}

export interface CreateOneToppingInput {
    topping: CreateTopping;
}

export interface CreateTopping {
    id?: string;
    name?: string;
    created?: DateTime;
    updated?: DateTime;
}

export interface CreateManyToppingsInput {
    toppings: CreateTopping[];
}

export interface UpdateOneToppingInput {
    id: string;
    update: UpdateTopping;
}

export interface UpdateTopping {
    id?: string;
    name?: string;
    created?: DateTime;
    updated?: DateTime;
}

export interface UpdateManyToppingsInput {
    filter: ToppingUpdateFilter;
    update: UpdateTopping;
}

export interface ToppingUpdateFilter {
    and?: ToppingUpdateFilter[];
    or?: ToppingUpdateFilter[];
    id?: IDFilterComparison;
    name?: StringFieldComparison;
}

export interface DeleteManyToppingsInput {
    filter: ToppingDeleteFilter;
}

export interface ToppingDeleteFilter {
    and?: ToppingDeleteFilter[];
    or?: ToppingDeleteFilter[];
    id?: IDFilterComparison;
    name?: StringFieldComparison;
}

export interface CreatePizzaSubscriptionFilterInput {
    filter: PizzaSubscriptionFilter;
}

export interface PizzaSubscriptionFilter {
    and?: PizzaSubscriptionFilter[];
    or?: PizzaSubscriptionFilter[];
    id?: IDFilterComparison;
    name?: StringFieldComparison;
}

export interface UpdateOnePizzaSubscriptionFilterInput {
    filter: PizzaSubscriptionFilter;
}

export interface DeleteOnePizzaSubscriptionFilterInput {
    filter: PizzaSubscriptionFilter;
}

export interface CreateToppingSubscriptionFilterInput {
    filter: ToppingSubscriptionFilter;
}

export interface ToppingSubscriptionFilter {
    and?: ToppingSubscriptionFilter[];
    or?: ToppingSubscriptionFilter[];
    id?: IDFilterComparison;
    name?: StringFieldComparison;
}

export interface UpdateOneToppingSubscriptionFilterInput {
    filter: ToppingSubscriptionFilter;
}

export interface DeleteOneToppingSubscriptionFilterInput {
    filter: ToppingSubscriptionFilter;
}

export interface Topping {
    id: string;
    name: string;
    created?: DateTime;
    updated?: DateTime;
    pizzas?: ToppingPizzasConnection;
}

export interface Pizza {
    id: string;
    name: string;
    created?: DateTime;
    updated?: DateTime;
    toppings?: Topping[];
}

export interface DeleteManyResponse {
    deletedCount: number;
}

export interface PizzaDeleteResponse {
    id?: string;
    name?: string;
    created?: DateTime;
    updated?: DateTime;
}

export interface UpdateManyResponse {
    updatedCount: number;
}

export interface PizzaEdge {
    node: Pizza;
    cursor: ConnectionCursor;
}

export interface PageInfo {
    hasNextPage?: boolean;
    hasPreviousPage?: boolean;
    startCursor?: ConnectionCursor;
    endCursor?: ConnectionCursor;
}

export interface PizzaConnection {
    pageInfo: PageInfo;
    edges: PizzaEdge[];
}

export interface PizzaCountAggregate {
    id?: number;
    name?: number;
}

export interface PizzaSumAggregate {
    id?: number;
}

export interface PizzaAvgAggregate {
    id?: number;
}

export interface PizzaMinAggregate {
    id?: string;
    name?: string;
}

export interface PizzaMaxAggregate {
    id?: string;
    name?: string;
}

export interface ToppingDeleteResponse {
    id?: string;
    name?: string;
    created?: DateTime;
    updated?: DateTime;
}

export interface ToppingEdge {
    node: Topping;
    cursor: ConnectionCursor;
}

export interface ToppingConnection {
    pageInfo: PageInfo;
    edges: ToppingEdge[];
}

export interface ToppingCountAggregate {
    id?: number;
    name?: number;
}

export interface ToppingSumAggregate {
    id?: number;
}

export interface ToppingAvgAggregate {
    id?: number;
}

export interface ToppingMinAggregate {
    id?: string;
    name?: string;
}

export interface ToppingMaxAggregate {
    id?: string;
    name?: string;
}

export interface ToppingPizzasConnection {
    pageInfo: PageInfo;
    edges: PizzaEdge[];
}

export interface IQuery {
    pizza(id: string): Pizza | Promise<Pizza>;
    pizzas(paging?: CursorPaging, filter?: PizzaFilter, sorting?: PizzaSort[]): PizzaConnection | Promise<PizzaConnection>;
    topping(id: string): Topping | Promise<Topping>;
    toppings(paging?: CursorPaging, filter?: ToppingFilter, sorting?: ToppingSort[]): ToppingConnection | Promise<ToppingConnection>;
}

export interface IMutation {
    addToppingsToPizza(input: RelationsInput): Pizza | Promise<Pizza>;
    createOnePizza(input: CreateOnePizzaInput): Pizza | Promise<Pizza>;
    createManyPizzas(input: CreateManyPizzasInput): Pizza[] | Promise<Pizza[]>;
    updateOnePizza(input: UpdateOnePizzaInput): Pizza | Promise<Pizza>;
    updateManyPizzas(input: UpdateManyPizzasInput): UpdateManyResponse | Promise<UpdateManyResponse>;
    deleteOnePizza(input: DeleteOneInput): PizzaDeleteResponse | Promise<PizzaDeleteResponse>;
    deleteManyPizzas(input: DeleteManyPizzasInput): DeleteManyResponse | Promise<DeleteManyResponse>;
    createOneTopping(input: CreateOneToppingInput): Topping | Promise<Topping>;
    createManyToppings(input: CreateManyToppingsInput): Topping[] | Promise<Topping[]>;
    updateOneTopping(input: UpdateOneToppingInput): Topping | Promise<Topping>;
    updateManyToppings(input: UpdateManyToppingsInput): UpdateManyResponse | Promise<UpdateManyResponse>;
    deleteOneTopping(input: DeleteOneInput): ToppingDeleteResponse | Promise<ToppingDeleteResponse>;
    deleteManyToppings(input: DeleteManyToppingsInput): DeleteManyResponse | Promise<DeleteManyResponse>;
}

export interface ISubscription {
    createdPizza(input?: CreatePizzaSubscriptionFilterInput): Pizza | Promise<Pizza>;
    updatedOnePizza(input?: UpdateOnePizzaSubscriptionFilterInput): Pizza | Promise<Pizza>;
    updatedManyPizzas(): UpdateManyResponse | Promise<UpdateManyResponse>;
    deletedOnePizza(input?: DeleteOnePizzaSubscriptionFilterInput): PizzaDeleteResponse | Promise<PizzaDeleteResponse>;
    deletedManyPizzas(): DeleteManyResponse | Promise<DeleteManyResponse>;
    createdTopping(input?: CreateToppingSubscriptionFilterInput): Topping | Promise<Topping>;
    updatedOneTopping(input?: UpdateOneToppingSubscriptionFilterInput): Topping | Promise<Topping>;
    updatedManyToppings(): UpdateManyResponse | Promise<UpdateManyResponse>;
    deletedOneTopping(input?: DeleteOneToppingSubscriptionFilterInput): ToppingDeleteResponse | Promise<ToppingDeleteResponse>;
    deletedManyToppings(): DeleteManyResponse | Promise<DeleteManyResponse>;
}

export type DateTime = any;
export type ConnectionCursor = any;
