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
  TableRow
} from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { Brands, Category } from 'models';
import React, { useState } from 'react';

export interface ICategoryProps {
  categoryList: Category[];
  onEditBrand?: (users: Brands) => void;
  onEdit?: (users: Category) => void;
  onAddBrand?: (users: Category) => void;
  onRemove?: (users: Category) => void;
  onRemoveBrand?: (users: Brands) => void;
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

export function CategoryTable({ categoryList, onEditBrand, onAddBrand, onEdit, onRemoveBrand, onRemove }: ICategoryProps) {
  const classes = useStyles();
  const [selectedProduct, setSelectedProduct] = useState<Category>();
  const [selectedBrands, setSelectedBrands] = useState<Brands>();
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleClose1 = () => {
    setOpen1(false);
  };

  const handleRemoveClick = (category: Category) => {
    setSelectedProduct(category);
    setOpen(true);
  };
  const handleRemoveClickBrands = (category: Brands) => {
    setSelectedBrands(category);
    setOpen1(true);
  };

  const handleRemoveConfirm = (category: Category) => {
    // call onremove
    onRemove?.(category);

    setOpen(false);
  };
  const handleRemoveConfirm1 = (category: Brands) => {
    // call onremove
    onRemoveBrand?.(category);

    setOpen1(false);
  };
  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} size="small" aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Cateted_at</TableCell>
              <TableCell>Brands</TableCell>
              <TableCell>Deleted</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {categoryList.map((category) => (
              <TableRow key={category.name}>
                <TableCell>{category.id}</TableCell>
                <TableCell>{category.name}</TableCell>
                <TableCell>{category.cateted_at}</TableCell>
                <TableCell>
                  <Table>
                    <TableBody>
                      {category.brands.map((brand) => (
                        <TableRow key={brand.name}>
                          <TableCell>{brand.name}</TableCell>
                          <TableCell>{brand.is_deleted}</TableCell>
                          <TableCell align="right">
                            <Button
                              size="small"
                              className={classes.edit}
                              color="primary"
                              onClick={() => onEditBrand?.(brand)}
                            >
                              Edit
                            </Button>
                            <Button size="small" color="secondary" onClick={() => handleRemoveClickBrands(brand)}>
                              Remove
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableCell>
                <TableCell>{category.is_deleted}</TableCell>
                <TableCell align="right">
                  <Button
                    size="small"
                    className={classes.edit}
                    color="primary"
                    onClick={() => onEdit?.(category)}
                  >
                    Edit
                  </Button>
                  <Button
                    size="small"
                    className={classes.edit}
                    color="success"
                    onClick={() => onAddBrand?.(category)}
                  >
                    Add Brand
                  </Button>
                  <Button size="small" color="secondary" onClick={() => handleRemoveClick(category)}>
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
                handleRemoveConfirm(selectedProduct as Category);
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
      <div>
        <Dialog
          open={open1}
          onClose={handleClose1}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Remove Brand</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you sure you want to remove Brand name "{selectedBrands?.name}".
              <br /> This action &apos;t be undo.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose1} color="inherit" variant="outlined">
              Cancel
            </Button>
            <Button
              onClick={() => {
                handleRemoveConfirm1(selectedBrands as Brands);
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
