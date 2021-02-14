import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes, Types } from 'mongoose';

@Schema({ timestamps: { createdAt: 'created', updatedAt: 'updated' } })
export class PizzaEntity extends Document {
    @Prop({ required: true })
    name!: string;

    @Prop({ default: Date.now })
    createdAt!: Date;

    @Prop({ default: Date.now })
    updatedAt!: Date;

    // notice the brackets around the prop options
    @Prop([{ type: SchemaTypes.ObjectId, ref: 'ToppingEntity' }])
    toppings!: Types.ObjectId[];
}

export const PizzaEntitySchema = SchemaFactory.createForClass(PizzaEntity);
