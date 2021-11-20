import {
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
import { Watch } from 'models';
import React from 'react';

export interface IProductProps {
    watchtList: Watch[];
    onEdit?: (product: Watch) => void;
    onRemove?: (product: Watch) => void;
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

export function BidderTableWatch({ watchtList, onEdit, onRemove }: IProductProps) {
    const classes = useStyles();

    return (
        <>
            <h3 className="mt-3 mb-3">Table Watch List</h3>
            <TableContainer component={Paper}>
                <Table className={classes.table} size="small" aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>bidder_id</TableCell>
                            <TableCell>bidder_name</TableCell>
                            <TableCell>product_id</TableCell>
                            <TableCell>price</TableCell>

                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {watchtList.map((product) => (
                            <TableRow key={product.id}>
                                <TableCell>{product.id}</TableCell>
                                <TableCell>{product.bidder_id}</TableCell>
                                <TableCell>{product.bidder_name}</TableCell>
                                <TableCell>{product.product_id}</TableCell>
                                <TableCell>{product.price}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
