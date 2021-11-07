import { FormControl, InputLabel, OutlinedInput } from '@mui/material';
import productApi from 'api/productApi';
import { ListResponse } from 'models';
import { Product, ProductDetaill } from 'models/product';
import moment from 'moment';
import numeral from 'numeral';
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import { Dialog } from 'primereact/dialog';
import { Image } from 'primereact/image';
import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import './productDetail.css';
import axiosClient from 'api/axiosClient';
import { getItem } from 'utils';

export interface IProductDetailProps {
}

export function ProductDetail(props: IProductDetailProps) {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<ProductDetaill>();
    const [productList, setProductList] = useState<Product[]>();
    const [displayResponsive, setDisplayResponsive] = useState(false);
    const searchRef = useRef<HTMLInputElement>();
    // const dispatch = useAppDispatch();
    const [priceAuction, setpriceAuction] = useState<any>(null);
    const { accessToken } = getItem('users');
    axiosClient.defaults.headers.common['x-access-token'] = accessToken;

    const history = useHistory();
    const handleDetail = (product: Product) => {
        history.push(`${product.id}`);
    };
    const handleOnction = async (product: ProductDetaill) => {
        const data = {
            data: {
                product_id: id,
                price: priceAuction,
            },
        }
        await productApi.auction(data);

    }

    const onClick = () => {
        setDisplayResponsive(true);
    }

    const onHide = () => {
        setDisplayResponsive(false)
    }

    const renderFooter = (product: ProductDetaill) => {
        return (
            <div>
                <Button label="No" icon="pi pi-times" onClick={() => onHide()} className="p-button-text" />
                <Button label="Yes" icon="pi pi-check" onClick={() => handleOnction(product)} autoFocus />
            </div>
        );
    }

    const responsiveOptionsList = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3,
        },
        {
            breakpoint: '600px',
            numVisible: 2,
            numScroll: 2,
        },
        {
            breakpoint: '480px',
            numVisible: 1,
            numScroll: 1,
        },
    ];
    const productTemplateList = (product: Product) => {
        return (
            <div className="product-item">
                <div className="product-item-content text-center">
                    {/* <a> */}
                    <div className="p-mb-3">
                        <img
                            src={`showcase/demo/images/product/${product.images}`}
                            onError={(e: any) =>
                            (e.target.src =
                                'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')
                            }
                            alt={product.name}
                            className="product-image"
                        />
                    </div>
                    <div>
                        <h4 className="p-mb-3">{product.name}</h4>
                        <h6 className="p-mt-0 p-mb-1">Giá Mua: {numeral(product.max_price).format('0,0')} đ</h6>
                        <h6 className="p-mt-0 p-mb-1" style={{ fontWeight: 700 }}>Giá Hiện Tại: {numeral(product.price).format('0,0')} đ</h6>
                        <h6 className="p-mt-0 p-mb-1">Ngày Bán: {moment(product.created_at).format('DD/MM/YYYY')}</h6>
                        {/* <h6 className="p-mt-0 p-mb-1">Người Bán: {product.fullname}</h6> */}
                        <div className="item-rating">
                            {Number(product.ratting) > 500 ? (
                                <>
                                    <i className="pi pi-star p-mr-2" style={{ color: "#fb6e2e" }}></i>
                                    <i className="pi pi-star p-mr-2" style={{ color: "#fb6e2e" }}></i>
                                    <i className="pi pi-star p-mr-2" style={{ color: "#fb6e2e" }}></i>
                                    <i className="pi pi-star p-mr-2" style={{ color: "#fb6e2e" }}></i>
                                    <i className="pi pi-star p-mr-2" style={{ color: "#fb6e2e" }}></i>
                                </>
                            ) : (
                                <>
                                    <i className="pi pi-star p-mr-2" style={{ color: "#fb6e2e" }}></i>
                                    <i className="pi pi-star p-mr-2" style={{ color: "#fb6e2e" }}></i>
                                    <i className="pi pi-star p-mr-2" style={{ color: "#fb6e2e" }}></i>
                                    <i className="pi pi-star-o p-mr-2"></i>
                                </>
                            )}

                            <span className="item-rating-total"> {product.ratting}</span>
                        </div>
                        <div className="car-buttons p-mt-3 product-item-button">
                            <Button onClick={() => handleDetail(product)} icon="pi pi-search" className="p-button p-button-rounded" />
                        </div>
                    </div>
                    {/* </a> */}
                </div>
            </div>
        );
    };


    useEffect(() => {
        if (!id) return

        // IFFE
        (async () => {
            try {
                const data: ListResponse<ProductDetaill> = await productApi.getDetail(id);
                const ListData: ListResponse<Product> = await productApi.getCategoryID(data.data[0].category_id);
                setProductList(ListData.data);
                setProduct(data.data[0]);
            } catch (error) {
                console.log('Failed to fetch prodcut details', error);
            }
        })();

    }, [id]);

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        const data = e.target.value;
        setpriceAuction(data);
    };


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
                            <Button onClick={() => onClick()} icon="pi pi-money-bill" className="p-button p-button-rounded" />
                            <Dialog header="Đấu Giá" visible={displayResponsive} onHide={() => onHide()} breakpoints={{ '960px': '75vw' }} style={{ width: '50vw' }} footer={renderFooter(product)}>
                                <div className="content">
                                    <label className="lable">Giá Cần Mua: </label>
                                    <FormControl fullWidth variant="outlined" size="small">
                                        <InputLabel>Gía Cần Mua</InputLabel>
                                        <OutlinedInput
                                            id="searchByName"
                                            label="Search by name"
                                            defaultValue={priceAuction}
                                            onChange={handleSearchChange}
                                            inputRef={searchRef}
                                            type="number"
                                        />
                                    </FormControl>
                                </div>
                            </Dialog>
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
                                <div className="col-4"> <Image src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt="Image" width="100" /></div>
                                <div className="col-4"> <Image src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt="Image" width="100" /></div>
                                <div className="col-4"> <Image src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt="Image" width="100" /></div>
                            </div>
                        </div>
                        <div className="col-8 col__product-detail">
                            {product && productTemplate(product)}
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row">
                        <section>
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <div className="carousel-demo">
                                            <div className="card" style={{ border: "none" }}>
                                                <Carousel
                                                    value={productList}
                                                    numVisible={4}
                                                    numScroll={2}
                                                    responsiveOptions={responsiveOptionsList}
                                                    className="custom-carousel"
                                                    circular
                                                    autoplayInterval={3000}
                                                    itemTemplate={productTemplateList}
                                                    header={<h3 className="text-center">Sản Phẩm Liên Quan</h3>}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </>
    );
}
