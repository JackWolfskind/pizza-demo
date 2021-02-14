import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: { createdAt: 'created', updatedAt: 'updated' } })
export class ToppingEntity extends Document {
    @Prop({ required: true })
    name!: string;

    @Prop({ default: Date.now })
    createdAt!: Date;

    @Prop({ default: Date.now })
    updatedAt!: Date;
}

export const ToppingEntitySchema = SchemaFactory.createForClass(ToppingEntity);
ToppingEntitySchema.virtual('pizzas', {
    ref: 'PizzaEntity',
    localField: '_id',
    foreignField: 'toppings',
});