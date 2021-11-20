import axiosClient from 'api/axiosClient';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import { getItem } from 'utils';
import { ListPage } from './pages/ListPage';

export interface ISellerProps {
}

export function Seller(props: ISellerProps) {
    const { accessToken } = getItem('users');
    axiosClient.defaults.headers.common['x-access-token'] = accessToken;
    const match = useRouteMatch();

    return (
        <Switch>
            <Route path={match.path} exact>
                <ListPage />
            </Route>

            <Route path={`${match.path}/add`}>
            </Route>

            <Route path={`${match.path}/:user_id`}>
            </Route>
        </Switch>
    );
}
