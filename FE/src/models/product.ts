export interface Product {
    avatar?: string;
    brand_id: string;
    brand_name: string;
    category_id?: string;
    category_name?: string;
    count_quantity_bidder?: string;
    created_at: string;
    current_price?: string;
    description?: number;
    id: string;
    images: string;
    is_deleted: string;
    max_price: string;
    name: string;
    price: string;
    ratting: string;
    seller_id: string;
    step: string;
    time_end: string;
    time_start: string;
    timestamp: string;
    updated_at: string;

}

export interface ProductDetaill {
    address?: string;
    avatar: string;
    category_id: string;
    current_price?: string;
    description?: string;
    email?: string;
    fullname?: string;
    images?: string;
    max_price?: string;
    name?: string;
    ratting_negative?: string;
    time_end?: string;
    time_start?: string;
    ratting?: string;
}