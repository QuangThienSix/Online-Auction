import { Button } from '@mui/material';
import axiosClient from 'api/axiosClient';
import bidderApi from 'api/bidder';
import usersApi from 'api/usersApi';
import watchApi from 'api/watch';
import jwt_decode from 'jwt-decode';
import { ListResponse, Watch } from 'models';
import { bidderProduct } from 'models/bidderProduct';
import React, { useEffect, useState } from 'react';
import { addSingle, getItem } from 'utils';
import { BidderTableProduct } from './components/BidderTableProduct';
import { BidderTableWatch } from './components/BidderTableWatch';
export interface IBiddingProps {
}



export function Bidding(props: IBiddingProps) {
    const { accessToken } = getItem('users');
    const decoded = jwt_decode<{ user_id: string }>(accessToken);
    axiosClient.defaults.headers.common['x-access-token'] = accessToken;
    const [watchList, setWtchList] = useState<Watch[]>([]);
    const [bidderProduct, setBidderProduct] = useState<bidderProduct[]>([]);


    const handleUpSeller = async () => {
        const data = {
            accessToken: accessToken,
            data: ''
        }
        const resulf = await usersApi.transformSeller(data);
        if (resulf) {
            addSingle('success', 'Bạn đã xin up lên seller Đợi 7 ngày!');
        }
        else {
            addSingle('error', 'Chưa cấp được');
        }
    };

    useEffect(() => {
        if (!decoded.user_id) return
        // IFFE
        (async () => {
            const data: ListResponse<bidderProduct> = await bidderApi.getAll();
            const dataWatch: ListResponse<Watch> = await watchApi.getAll();
            setWtchList(dataWatch.data ? dataWatch.data : []);
            setBidderProduct(data.data ? data.data : []);
        })();

    }, [decoded.user_id]);
    return (
        <div>
            <Button size="small" color="warning" variant="contained" onClick={() => handleUpSeller()}>
                Up seller
            </Button>

            <BidderTableWatch
                watchtList={watchList}
            />
            <div className="mt-3 mt-3"></div>
            <BidderTableProduct
                bidderProduct={bidderProduct}
            />
        </div >
    );
}
