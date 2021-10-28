import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import React, { useEffect, useState } from 'react';
import { ProductService } from './service/ProductService';
import './homePage.css';
export interface IHomePageProps {}

export default function HomePage(props: IHomePageProps) {
  // const { category, loading } = useCategory();
  const [products, setProducts] = useState([]);
  const productService = new ProductService();
  useEffect(() => {
    productService.getProductsSmall().then((data) => setProducts(data.slice(0, 9)));
  });
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
  const productTemplate = (product: any) => {
    return (
      <div className="product-item">
        <div className="product-item-content text-center">
          <div className="p-mb-3">
            <img
              src={`showcase/demo/images/product/${product.image}`}
              onError={(e: any) =>
                (e.target.src =
                  'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')
              }
              alt={product.name}
              className="product-image"
            />
          </div>
          <div>
            <h4 className="p-mb-1">{product.name}</h4>
            <h6 className="p-mt-0 p-mb-3">$ {product.price}</h6>
            <span className={`product-badge status-${product.inventoryStatus.toLowerCase()}`}>
              {product.inventoryStatus}
            </span>
            <div className="car-buttons p-mt-5">
              <Button icon="pi pi-search" className="p-button p-button-rounded p-mr-2" />
              <Button icon="pi pi-star" className="p-button-success p-button-rounded p-mr-2" />
              <Button icon="pi pi-cog" className="p-button-help p-button-rounded" />
            </div>
          </div>
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
                    value={products}
                    numVisible={4}
                    numScroll={1}
                    responsiveOptions={responsiveOptions}
                    className="custom-carousel"
                    circular
                    autoplayInterval={3000}
                    itemTemplate={productTemplate}
                    header={<h5 >Sản Phẩm</h5>}
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
