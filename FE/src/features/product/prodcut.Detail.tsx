import { FormControl, InputLabel, OutlinedInput } from '@mui/material';
import axiosClient from 'api/axiosClient';
import productApi from 'api/productApi';
import usersApi from 'api/usersApi';
import watchApi from 'api/watch';
import { useAppDispatch } from 'app/hooks';
import { selecttorsIsLoggedIn } from 'features/auth/authSlice';
import { selectMessage, socketActions } from 'features/socket/socketSlice';
import jwt_decode from 'jwt-decode';
import { ListResponse } from 'models';
import { modified } from 'models/bidderProduct';
import { Product, ProductDetaill } from 'models/product';
import moment from 'moment';
import numeral from 'numeral';
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import { Dialog } from 'primereact/dialog';
import { Image } from 'primereact/image';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { addSingle, getItem } from 'utils';
import './productDetail.css';

export interface IProductDetailProps {
}

export function ProductDetail(props: IProductDetailProps) {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<ProductDetaill>();
    const [productList, setProductList] = useState<Product[]>();
    const [modified, setModified] = useState<modified>();
    const [displayResponsive, setDisplayResponsive] = useState(false);
    const searchRef = useRef<any>();
    const dispatch = useAppDispatch();
    const { accessToken } = getItem('users');
    axiosClient.defaults.headers.common['x-access-token'] = accessToken;
    const socket = useSelector(selectMessage);
    const IsLoggedIn = useSelector(selecttorsIsLoggedIn);
    const history = useHistory();


    function isEmpty(obj: any) {
        return Object.keys(obj).length === 0;
    }
    console.log(socket);

    useEffect(() => {
        if (!id) return
        // IFFE
        (async () => {
            try {
                if (!isEmpty(socket)) {
                    const data_modified: ListResponse<modified> = await productApi.getDetailModified(id);
                    setModified(data_modified.data ? data_modified.data[0] : undefined)


                    const jsonsoket = JSON.parse(String(socket));
                    const ListData: ListResponse<Product> = await productApi.getCategoryID(jsonsoket.category_id ? jsonsoket.category_id : '');
                    setProductList(ListData.data);
                    setProduct(jsonsoket);
                    dispatch(dispatch(socketActions.SETMessage()));

                }
                else {

                    const data_modified: ListResponse<modified> = await productApi.getDetailModified(id);
                    setModified(data_modified.data ? data_modified.data[0] : undefined)



                    const data: ListResponse<ProductDetaill> = await productApi.getDetail(id);
                    const ListData: ListResponse<Product> = await productApi.getCategoryID(data.data[0].category_id ? data.data[0].category_id : '');
                    setProductList(ListData.data);
                    setProduct(data.data[0]);


                }

            } catch (error) {
                console.log('Failed to fetch prodcut details', error);
            }
        })();


    }, [id, socket, dispatch]);




    const handleDetail = (product: Product) => {
        history.push(`${product.id}`);
    };
    const handleOnction = async (product: ProductDetaill) => {
        const data = {
            data: {
                product_id: id,
                price: searchRef.current.value,
            },
        }
        try {
            const resufl = await productApi.auction(data);
            console.log(resufl.data.message);
            if (resufl.data.message === '200') {
                addSingle('success', '?????u gi?? th??nh c??ng');
                setDisplayResponsive(false);
            }
            else {
                addSingle('success', '?????u gi?? th???t b???i!!');
                setDisplayResponsive(false);
            }


        } catch (error) {
            addSingle('info', '?????u gi?? th???t b???i!!');
        }
    }

    const onClick = async () => {
        if (IsLoggedIn) {

            const decoded = jwt_decode<{ user_id: string }>(accessToken);
            const data = await usersApi.getPoint(decoded.user_id);
            console.log(data);
            if (data.message === 'Success') {
                setDisplayResponsive(true);
            }
            else {
                addSingle('info', '??i???m b???n Qu?? Th??p???');
            }

        }
        else {
            history.push("/login");
            addSingle('info', '????ng nh???p m???i ?????u gi?? ???????c');
        }
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

    const onAddWatchList = async (product: ProductDetaill) => {
        if (IsLoggedIn) {
            const data = {
                data: {
                    product_id: product.id,
                    price: product.current_price
                },
                accessToken: accessToken
            }
            try {
                await watchApi.add(data);
                addSingle('success', '???? th??m v??o watch list');
            } catch (error: any) {
                addSingle('error', error);
            }

        }
        else {
            history.push("/login");
            addSingle('info', '????ng nh???p m???i theo d??i ???????c');
        }
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
                            src={`http://${product?.avatar}`}
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
                        <h6 className="p-mt-0 p-mb-1">Gi?? Mua: {numeral(product.max_price).format('0,0')} ??</h6>
                        <h6 className="p-mt-0 p-mb-1" style={{ fontWeight: 700 }}>Gi?? Hi???n T???i: {numeral(product.price).format('0,0')} ??</h6>
                        <h6 className="p-mt-0 p-mb-1">Ng??y B??n: {moment(product.created_at).format('DD/MM/YYYY')}</h6>
                        {/* <h6 className="p-mt-0 p-mb-1">Ng?????i B??n: {product.fullname}</h6> */}
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





    // const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    //     const data = e.target.value;

    //     clearTimeout();
    //     searchRef.current = setTimeout(() => {
    //         setpriceAuction(data);
    //     }, 5000);

    // };


    const productTemplate = (product: ProductDetaill) => {
        return (
            <div className="product-item">
                <div className="product-item-content text-center">
                    <div>
                        <h4 className="p-mb-3">{product.name}</h4>
                        <Button onClick={() => onAddWatchList(product)} label="Theo d??i" icon="pi pi-check" iconPos="right" className="p-button-success p-button-rounded p-mr-2" />
                        <h6 className="p-mt-0 p-mb-1">Gi?? Mua Ngay: {numeral(product.max_price).format('0,0')} ??</h6>
                        <h6 className="p-mt-0 p-mb-1" style={{ fontWeight: 700 }}>Gi?? Hi???n T???i: {numeral(product.current_price).format('0,0')} ??</h6>
                        <h6 className="p-mt-0 p-mb-1">Ng??y B???t ?????u: {moment(product.time_start).format('DD/MM/YYYY')}</h6>
                        <h6 className="p-mt-0 p-mb-1">Ng??y K???t Th???c: {moment(product.time_end).format('DD/MM/YYYY')}</h6>
                        <h6 className="p-mt-0 p-mb-1">Ng?????i B??n: {product.fullname}</h6>
                        <h6 className="p-mt-0 p-mb-1">Ng?????i ??ang Tr??? Gi?? Cao: {modified?.fullname}</h6>
                        <div className="item-rating">
                            T??t: <i className="pi pi-star p-mr-2" style={{ color: "#fb6e2e" }}></i> {product.ratting}
                        </div>
                        <div className="item-rating">
                            Kh??ng T??t: <i className="pi pi-star-o p-mr-2"></i> {product.ratting_negative}
                        </div>
                        <div className="car-buttons p-mt-3 product-item-button">
                            <Button onClick={() => onClick()} icon="pi pi-money-bill" className="p-button p-button-rounded" />
                            <Dialog header="?????u Gi??" visible={displayResponsive} onHide={() => onHide()} breakpoints={{ '960px': '75vw' }} style={{ width: '50vw' }} footer={renderFooter(product)}>
                                <div className="content">
                                    <label className="lable">Gi?? C???n Mua: </label>
                                    <FormControl fullWidth variant="outlined" size="small">
                                        <InputLabel>G??a C???n Mua</InputLabel>
                                        <OutlinedInput
                                            id="searchByName"
                                            label="Search by name"
                                            defaultValue={product.current_price}
                                            // onChange={handleSearchChange}
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
                                <Image src={`http://${product?.avatar}`} alt="Image" width="250" />
                            </div>
                            <div className="row mb-2">
                                {/* <div className="col-4"> <Image src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt="Image" width="100" /></div>
                                <div className="col-4"> <Image src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt="Image" width="100" /></div>
                                <div className="col-4"> <Image src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt="Image" width="100" /></div> */}
                            </div>
                        </div>
                        <div className="col-8 col__product-detail">
                            <div className="row">
                                <div className="col-8">
                                    {product && productTemplate(product)}
                                </div>
                                <div className="col-4">
                                    <h5>N???i Dung</h5>
                                    <div dangerouslySetInnerHTML={{ __html: String(product?.description) }}></div>
                                </div>
                            </div>

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
                                                    value={productList ? productList : []}
                                                    numVisible={4}
                                                    numScroll={2}
                                                    responsiveOptions={responsiveOptionsList}
                                                    className="custom-carousel"
                                                    circular
                                                    autoplayInterval={3000}
                                                    itemTemplate={productTemplateList}
                                                    header={<h3 className="text-center">S???n Ph???m Li??n Quan</h3>}
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
