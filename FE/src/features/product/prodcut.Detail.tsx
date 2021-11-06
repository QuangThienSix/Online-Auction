import productApi from 'api/productApi';
import { ListResponse } from 'models';
import { ProductDetaill } from 'models/product';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Image } from 'primereact/image'
import { Button } from 'primereact/button';
import numeral from 'numeral';
import moment from 'moment';
export interface IProductDetailProps {
}

export function ProductDetail(props: IProductDetailProps) {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<ProductDetaill>();
    // const dispatch = useAppDispatch();


    useEffect(() => {
        if (!id) return

        // IFFE
        (async () => {
            try {
                const data: ListResponse<ProductDetaill> = await productApi.getDetail(id);
                setProduct(data.data[0]);
            } catch (error) {
                console.log('Failed to fetch prodcut details', error);
            }
        })();
    }, [id]);


    console.log(product);
    const productTemplate = (product: ProductDetaill) => {
        return (
            <div className="product-item">
                <div className="product-item-content text-center">
                    <div>
                        <h4 className="p-mb-3">{product.name}</h4>
                        <h6 className="p-mt-0 p-mb-1">Giá Mua Ngay: {numeral(product.max_price).format('0,0')} đ</h6>
                        <h6 className="p-mt-0 p-mb-1" style={{ fontWeight: 700 }}>Giá Hiện Tại: {numeral(product.current_price).format('0,0')} đ</h6>
                        <h6 className="p-mt-0 p-mb-1">Ngày Bắt Đầu: {moment(product.time_start).format('DD/MM/YYYY')}</h6>
                        <h6 className="p-mt-0 p-mb-1">Ngày Kết Thức: {moment(product.time_end).format('DD/MM/YYYY')}</h6>
                        <h6 className="p-mt-0 p-mb-1">Người Bán: {product.fullname}</h6>
                        <div className="item-rating">
                            Tôt: <i className="pi pi-star p-mr-2" style={{ color: "#fb6e2e" }}></i> {product.ratting}
                        </div>
                        <div className="item-rating">
                            Không Tôt: <i className="pi pi-star-o p-mr-2"></i> {product.ratting_negative}
                        </div>
                        <div className="car-buttons p-mt-3 product-item-button">
                            <Button icon="pi pi-search" className="p-button p-button-rounded" />
                        </div>
                    </div>
                </div>
            </div>
        );
    };
    return (
        <>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-4 image-product">
                            <div className="image-product__main mb-2">
                                <Image src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt="Image" width="250" />
                            </div>
                            <div className="row mb-2">
                                <div className="col-4"> <Image src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt="Image" width="50" /></div>
                                <div className="col-4"> <Image src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt="Image" width="50" /></div>
                                <div className="col-4"> <Image src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt="Image" width="50" /></div>
                            </div>
                        </div>
                        <div className="col-8 col__product-detail">
                            {product && productTemplate(product)}
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <h3 className="title">Sản phẩm liên quan</h3>
                <div className="container">
                    <div className="row">

                    </div>
                </div>
            </section>
        </>
    );
}
