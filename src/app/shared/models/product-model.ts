import {PreferenceOptionsModel} from './preference-options-model';

export interface ProductModel {
    id?: string;
    name: string;
    description?: string;
    productModel?: string;
    price: number;
    categoryId: string;
    createdAt?: string;
    deleted: boolean;
    preferences?: PreferenceOptionsModel[];
}
