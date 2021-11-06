import productApi from 'api/productApi';
import { ListResponse } from 'models';
import { Product } from 'models/product';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export interface IProductDetailProps {
}

export function ProductDetail(props: IProductDetailProps) {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product>();
    // const dispatch = useAppDispatch();


    useEffect(() => {
        if (!id) return

        // IFFE
        (async () => {
            try {
                const data: ListResponse<Product> = await productApi.getDetail(id);
                setProduct(data.data[0]);
            } catch (error) {
                console.log('Failed to fetch prodcut details', error);
            }
        })();
    }, [id]);


    console.log(product);
    return (
        <div>
            Detail Product
        </div>
    );
}
