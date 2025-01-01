export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    createdDate: Date;
    imageUrl?: string;
}
export interface CreateProductRequest {
    name: string;
    description: string;
    price: number;
    imageUrl?: string;
}
export interface CreateProductResponse {
    id: number;
    message?:string;
}
export interface UpdateProductRequest extends CreateProductRequest {
    id: number;
}
