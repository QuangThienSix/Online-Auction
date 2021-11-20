import { selectProductsListSearch } from 'features/seller/productsSlice';
import { Product } from 'models';
import { Button } from 'primereact/button';
import { DataView } from 'primereact/dataview';
import { Rating } from 'primereact/rating';
import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './categoryPage.css';



export default function Searchpage() {
    const productList = useSelector(selectProductsListSearch);
    const history = useHistory();

    const handleDetail = (product: Product) => {
        console.log(product);
        history.push(`/product/${product.id}`);
    };
    const renderGridItem = (data: any) => {
        return (
            <div className="p-col-12 p-md-4">
                <div className="product-grid-item card">
                    <div className="product-grid-item-top">
                        <div>
                            <i className="pi pi-tag product-category-icon"></i>
                            <span className="product-category">{data.category_name}</span>
                        </div>
                        <span className={`product-badge`}>{data.brand_name}</span>
                    </div>
                    <div className="product-grid-item-content">
                        <img src={`https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png`} alt={data.name} />
                        <div className="product-name">{data.name}</div>
                        <div className="product-description">{data.description}</div>
                        <Rating value={data.rating} readOnly cancel={false}></Rating>
                    </div>
                    <div className="product-grid-item-bottom">
                        <span className="product-price">$ {data.price}</span>
                        <Button onClick={() => handleDetail(data)} icon="pi pi-search" label="Detail"></Button>
                    </div>
                </div>
            </div>
        );
    }

    const itemTemplate = (product: any) => {
        if (!product) {
            return;
        }
        return renderGridItem(product);

    }

    return (
        <div className="dataview-demo">
            <div className="card">
                <DataView value={productList} layout='grid'
                    itemTemplate={itemTemplate} paginator rows={9}
                />
            </div>
        </div>
    );
}
