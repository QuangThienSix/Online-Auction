import { Button } from '@mui/material';
import axiosClient from 'api/axiosClient';
import usersApi from 'api/usersApi';
import jwt_decode from 'jwt-decode';
import { Users } from 'models';
import React, { useEffect, useState } from 'react';
import { getItem } from 'utils';
export interface IBiddingProps {
}



export function Bidding(props: IBiddingProps) {
    const { accessToken } = getItem('users');
    const decoded = jwt_decode<{ user_id: string }>(accessToken);
    axiosClient.defaults.headers.common['x-access-token'] = accessToken;
    const [user, setUser] = useState<Users>();
    console.log(user);


    const handleUpSeller = async () => {
        const data = {
            accessToken: accessToken,
            data: ''
        }
        const resulf = await usersApi.transformSeller(data);
        console.log(resulf);
    };

    useEffect(() => {
        if (!decoded.user_id) return
        // IFFE
        (async () => {
            const data: Users = await usersApi.getById(decoded.user_id);
            setUser(data);
        })();

    }, [decoded.user_id]);
    return (
        <div>
            <Button size="small" color="warning" variant="contained" onClick={() => handleUpSeller()}>
                Up seller
            </Button>
        </div >
    );
}
