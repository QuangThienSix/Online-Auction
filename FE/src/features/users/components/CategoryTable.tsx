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
import { Category } from 'models';
import React, { useState } from 'react';

export interface ICategoryProps {
  categoryList: Category[];
  onEdit?: (users: Category) => void;
  onRemove?: (users: Category) => void;
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

export function CategoryTable({ categoryList, onEdit, onRemove }: ICategoryProps) {
  const classes = useStyles();
  const [selectedProduct, setSelectedProduct] = useState<Category>();
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleRemoveClick = (category: Category) => {
    setSelectedProduct(category);
    setOpen(true);
  };

  const handleRemoveConfirm = (user: Category) => {
    // call onremove
    onRemove?.(user);

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
              <TableCell>Cateted_at</TableCell>
              <TableCell>Brands</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {categoryList.map((category) => (
              <TableRow key={category.id}>
                <TableCell>{category.name}</TableCell>
                <TableCell>{category.cateted_at}</TableCell>
                <TableCell>{category.brands}</TableCell>
                <TableCell align="right">
                  <Button
                    size="small"
                    className={classes.edit}
                    color="primary"
                    onClick={() => onEdit?.(category)}
                  >
                    Edit
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
          <DialogTitle id="alert-dialog-title">Remove User</DialogTitle>
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
    </>
  );
}
