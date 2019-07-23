import { ProductModel } from './product-model';
import { PreferenceValueModel } from './preference-value-model';

export interface OrderLineModel {
    lineNumber: number;
    product: ProductModel;
    quantity: number;
    preferences: PreferenceValueModel[];
    amount: number;
}
