import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar
} from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { Product } from 'models';
import React, { useState } from 'react';

export interface IProductProps {
  productList: Product[];
  onEdit?: (product: Product) => void;
  onRemove?: (product: Product) => void;
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

export function ProductTable({ productList, onEdit, onRemove }: IProductProps) {
  const classes = useStyles();
  const [selectedProduct, setSelectedProduct] = useState<Product>();
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleRemoveClick = (product: Product) => {
    setSelectedProduct(product);
    setOpen(true);
  };


  const handleRemoveConfirm = (product: Product) => {
    // call onremove
    onRemove?.(product);

    setOpen(false);
  };

  return (
    <>
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
              {/* <TableCell>Timestamp</TableCell> */}
              {/* <TableCell>Time_start</TableCell> */}
              {/* <TableCell>Time_end</TableCell> */}
              <TableCell>Ratting</TableCell>
              <TableCell>Brand_id</TableCell>
              <TableCell>Category_id</TableCell>
              <TableCell>Step</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Is_done</TableCell>
              <TableCell>Is_deleted</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {productList.map((product) => (
              <TableRow key={product.name}>
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
                {/* <TableCell>{product.timestamp}</TableCell> */}
                {/* <TableCell>{product.time_start}</TableCell> */}
                {/* <TableCell>{product.time_end}</TableCell> */}
                <TableCell>{product.ratting}</TableCell>
                <TableCell>{product.brand_id}</TableCell>
                <TableCell>{product.category_id}</TableCell>
                <TableCell>{product.step}</TableCell>
                <TableCell>{product.description}</TableCell>
                <TableCell>{product.is_done}</TableCell>
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

                  <Button size="small" color="secondary" onClick={() => handleRemoveClick(product)}>
                    Remove
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Remove product</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you sure you want to remove product name "{selectedProduct?.name}".
              <br /> This action &apos;t be undo.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="inherit" variant="outlined">
              Cancel
            </Button>
            <Button
              onClick={() => {
                handleRemoveConfirm(selectedProduct as Product);
              }}
              color="secondary"
              variant="contained"
              autoFocus
            >
              Remove
            </Button>
          </DialogActions>
        </Dialog>
      </div>

    </>
  );
}
