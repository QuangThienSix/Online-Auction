export interface bidderProduct {
    avatar?: string;
    brand_id: string;
    brand_name: string;
    category_id?: string;
    category_name?: string;
    count_quantity_bidder?: string;
    created_at: string;
    current_price?: string;
    description?: string;
    id: string;
    images: string;
    is_deleted: string;
    max_price: string;
    name: string;
    price: string;
    ratting: number;
    seller_id: string;
    step: string;
    time_end: Date;
    time_start: Date;
    timestamp: string;
    updated_at: string;
    is_done: string;
}

export interface modified {
    username: string;
    fullname: number;
    address: string;
    email: string;
    ratting: string;
    ratting_negative: string;
    id: string;
}