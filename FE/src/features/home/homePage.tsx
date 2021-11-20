import { useAppDispatch, useAppSelector } from 'app/hooks';
import { Product } from 'models/product';
import moment from 'moment';
import numeral from 'numeral';
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import './homePage.css';
import { homeActions, selectProductTop5AlmostExpired, selecttorsProduct5PriceTop, selecttorsProductTop } from './homeSlice';
// import productApi from 'api/productApi';

export interface IHomePageProps { }

export default function HomePage(props: IHomePageProps) {
  // const { category, loading } = useCategory();
  const dispatch = useAppDispatch();
  const history = useHistory();

  const ProductTopList = useAppSelector(selecttorsProductTop);
  const ProductTop5PriceList = useAppSelector(selecttorsProduct5PriceTop);
  const ProductTop5AlmostExpired = useAppSelector(selectProductTop5AlmostExpired);



  useEffect(() => {
    dispatch(homeActions.product());
    // const data = productApi.getDetail('1');
    // console.log(data);
  }, [dispatch]);


  const handleDetail = (product: Product) => {
    history.push(`product/${product.id}`);
  };



  // if (loading) {
  //   return (
  //     <Box className={classes.loading}>
  //       <LinearProgress />
  //     </Box>
  //   );
  // }
  const responsiveOptions = [
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
  const productTemplate = (product: Product) => {
    return (
      <div className="product-item">
        <div className="product-item-content text-center">
          {/* <a> */}
          <div className="p-mb-3">
            <img
              src={`http://${product.avatar}`}
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
            {/* <h6 className="p-mt-0 p-mb-1">Người Bán: {product.seller_id}</h6> */}
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

  return (
    <div className="home-page">
      <section>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="carousel-demo">
                <div className="card" style={{ border: "none" }}>
                  <Carousel
                    value={ProductTopList}
                    numVisible={4}
                    numScroll={1}
                    responsiveOptions={responsiveOptions}
                    className="custom-carousel"
                    circular
                    // autoplayInterval={3000}
                    itemTemplate={productTemplate}
                    header={<h3 className="text-center">Top 5 sản phẩm ra giá nhất</h3>}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="carousel-demo">
                <div className="card" style={{ border: "none" }}>
                  <Carousel
                    value={ProductTop5PriceList ? ProductTop5PriceList : []}
                    numVisible={4}
                    numScroll={1}
                    responsiveOptions={responsiveOptions}
                    className="custom-carousel"
                    circular
                    // autoplayInterval={3000}
                    itemTemplate={productTemplate}
                    header={<h3 className="text-center">Top 5 Sản phẩm chưa kết thúc giá cao nhât</h3>}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="carousel-demo">
                <div className="card" style={{ border: "none" }}>
                  <Carousel
                    value={ProductTop5AlmostExpired ? ProductTop5AlmostExpired : []}
                    numVisible={4}
                    numScroll={1}
                    responsiveOptions={responsiveOptions}
                    className="custom-carousel"
                    circular
                    // autoplayInterval={3000}
                    itemTemplate={productTemplate}
                    header={<h3 className="text-center">Top 5 Sản phẩm gần kết thúc</h3>}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
