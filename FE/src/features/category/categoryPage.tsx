import productApi from 'api/productApi';
import { ListResponse, Product } from 'models';
import { Button } from 'primereact/button';
import { DataView } from 'primereact/dataview';
import { Dropdown } from 'primereact/dropdown';
import { Rating } from 'primereact/rating';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import './categoryPage.css';

export interface ICategoryProps {
}

export default function Category(props: ICategoryProps) {
    const { id } = useParams<{ id: string }>();
    const history = useHistory();
    const [productList, setProductList] = useState<Product[]>();
    const sortOptions = [
        { label: 'Price High to Low', value: '!price' },
        { label: 'Price Low to High', value: 'price' },
    ];
    const handleDetail = (product: Product) => {
        history.push(`/product/${product.id}`);
    };
    const [sortKey, setSortKey] = useState(null);
    const onSortChange = (event: any) => {
        const value = event.value;

        if (value.indexOf('!') === 0) {
            // setSortField(value.substring(1, value.length));
            setSortKey(value);
        }
        else {
            // setSortField(value);
            setSortKey(value);
        }
    }
    useEffect(() => {
        if (!id) return
        // IFFE
        (async () => {
            try {
                const ListData: ListResponse<Product> = await productApi.getCategoryID(id);
                setProductList(ListData.data);

            } catch (error) {
                console.log('Failed to fetch getCategoryID', error);
            }
        })();

    }, [id]);


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

    const renderHeader = () => {
        return (
            <div className="p-grid p-nogutter">
                <div className="p-col-6" style={{ textAlign: 'left' }}>
                    <Dropdown options={sortOptions} value={sortKey} optionLabel="label" placeholder="Sort By Price" onChange={onSortChange} />
                </div>
                <div className="p-col-6" style={{ textAlign: 'right' }}>
                </div>
            </div>
        );
    }
    const header = renderHeader();
    return (
        <div className="dataview-demo">
            <div className="card">
                <DataView value={productList} layout='grid' header={header}
                    itemTemplate={itemTemplate} paginator rows={9}
                />
            </div>
        </div>
    );
}
