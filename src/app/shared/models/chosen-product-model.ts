import { PreferenceValueModel } from './preference-value-model';

export interface ChosenProductModel {
    productId: string;
    quantity: number;
    preferences: PreferenceValueModel[];
}
