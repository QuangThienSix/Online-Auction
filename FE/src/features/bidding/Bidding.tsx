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
import { BidderTableGetWon } from './components/BidderTableGetWon';
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
    const [dataGetWonList, setDataGetWonList] = useState<bidderProduct[]>([]);


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
        console.log(decoded);
        if (!decoded.user_id) return
        // IFFE
        (async () => {

            try {
                const data: ListResponse<bidderProduct> = await bidderApi.getAll();
                setBidderProduct(data.data ? data.data : []);
            } catch (error: any) {
                console.log(error)
            }
            try {
                const dataWatch: ListResponse<Watch> = await watchApi.getAll();
                setWtchList(dataWatch.data ? dataWatch.data : []);
            } catch (error: any) {
                console.log(error)
            }

            try {
                const dataGetWonList: ListResponse<any> = await bidderApi.getWonList();
                setDataGetWonList(dataGetWonList.data ? dataGetWonList.data : []);
            } catch (error) {
                console.log(error)
            }






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
            <div className="mt-3 mt-3"></div>
            <BidderTableGetWon
                bidderProduct={dataGetWonList}
            />
        </div >
    );
}
