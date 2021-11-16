import {
    Avatar, Button, Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { Product } from 'models';
import React from 'react';

export interface ISellerTableProps {
    productsList: Product[];
    onEdit?: (users: Product) => void;
    onRemove?: (users: Product) => void;
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

export default function SellerTable({ productsList, onEdit, onRemove }: ISellerTableProps) {
    const classes = useStyles();


    return (
        <>
            <TableContainer component={Paper}>
                <Table className={classes.table} size="small" aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Ratting</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>current_price</TableCell>
                            <TableCell>max_price</TableCell>
                            <TableCell>Avatar</TableCell>
                            <TableCell>timestamp</TableCell>
                            <TableCell>Lock</TableCell>
                            <TableCell align="right">Actions</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {productsList.map((product) => (
                            <TableRow key={product.id}>
                                <TableCell>{product.id}</TableCell>
                                <TableCell>{product.name}</TableCell>
                                <TableCell>{product.ratting}</TableCell>
                                <TableCell>{product.price}</TableCell>
                                <TableCell>{product.current_price}</TableCell>
                                <TableCell>{product.max_price}</TableCell>
                                <TableCell><Avatar
                                    alt="Remy Sharp"
                                    src={product.avatar}
                                    sx={{ width: 56, height: 56 }}
                                /></TableCell>
                                <TableCell>{product.timestamp}</TableCell>
                                <TableCell>{product.is_deleted}</TableCell>
                                <TableCell align="right">
                                    <Button
                                        size="small"
                                        className={classes.edit}
                                        color="primary"
                                        onClick={() => onEdit?.(product)}
                                    >
                                        Edit
                                    </Button>

                                    <Button size="small" color="secondary">
                                        Remove
                                    </Button>

                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
