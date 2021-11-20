import {
    Avatar,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { bidderProduct } from 'models/bidderProduct';
import React from 'react';

export interface IProductProps {
    bidderProduct: bidderProduct[];
    onEdit?: (product: bidderProduct) => void;
    onRemove?: (product: bidderProduct) => void;
}

const usetheme = createTheme();

const useStyles = makeStyles(() => ({
    root: {
        marginRight: usetheme.spacing(1),
    },
    edit: {
        marginRight: `${usetheme.spacing(1)}!important`,
    },
    table: {},
}));

export function BidderTableGetWon({ bidderProduct, onEdit, onRemove }: IProductProps) {
    const classes = useStyles();

    return (
        <>
        <h3>Bidder Table GetWon</h3>
            <TableContainer component={Paper}>
                <Table className={classes.table} size="small" aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Current_price</TableCell>
                            <TableCell>Max_price</TableCell>
                            <TableCell>Avatar</TableCell>
                            <TableCell>Ratting</TableCell>
                            <TableCell>Brand_id</TableCell>
                            <TableCell>Category_id</TableCell>
                            <TableCell>Step</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Is_done</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {bidderProduct.map((product) => (
                            <TableRow key={product.id}>
                                <TableCell>{product.id}</TableCell>
                                <TableCell>{product.name}</TableCell>
                                <TableCell>{product.price}</TableCell>
                                <TableCell>{product.current_price}</TableCell>
                                <TableCell>{product.max_price}</TableCell>
                                <TableCell><Avatar
                                    alt="Remy Sharp"
                                    src={`http://${product.avatar}`}
                                    sx={{ width: 36, height: 36 }}
                                /></TableCell>
                                <TableCell>{product.ratting}</TableCell>
                                <TableCell>{product.brand_id}</TableCell>
                                <TableCell>{product.category_id}</TableCell>
                                <TableCell>{product.step}</TableCell>
                                <TableCell>{product.description}</TableCell>
                                <TableCell>{product.is_done}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
