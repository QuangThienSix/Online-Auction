/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable array-callback-return */
import { Button, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { authActions, selecttorsIsLoggedIn } from 'features/auth/authSlice';
import { productsAction } from 'features/seller/productsSlice';
import { selectCategoryFilter, selectCategoryList, usersAction } from 'features/users/usersSlice';
import debounce from "lodash.debounce";
import { Brands, Category } from 'models/category';
import { InputText } from 'primereact/inputtext';
import { Menubar } from 'primereact/menubar';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import './header.css';


export function HeaderHome() {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const isLoggedIn = useAppSelector(selecttorsIsLoggedIn);
  const filterCate = useAppSelector(selectCategoryFilter);
  // const [category, SetCategory] = useState<ListResponse<Category>>();
  const categoryList = useAppSelector(selectCategoryList);
  // console.log(categoryList);
  const handleLogoutClick = () => {
    dispatch(authActions.logout());
  };

  const handlePathHome = () => {
    history.push('/');
  };
  const handlePathLogin = () => {
    history.push('/login');
  };
  const handlePathAdmin = () => {
    history.push('/admin');
  };

  useEffect(() => {
    // async function loadCategory() {
    //   const res: ListResponse<Category> = await categoryApi.getAll();
    //   SetCategory(res);
    // }
    // loadCategory();
    dispatch(usersAction.fetchCategoryList(filterCate));
  }, [dispatch, filterCate]);
  const Tiem: { id: string | undefined; label: string | undefined; icon: string; items: {}[] }[] =
    [];
  // eslint-disable-next-line array-callback-return
  categoryList.filter((item) => Number(item.is_deleted) === 0).map((category: Category) => {
    const brands = category.brands;
    const newLocal: {}[] = [];
    const Item = {
      id: category.id,
      label: category.name,
      icon: '',
      command: () => {
        history.push(`/category/${category.id}`);
      },
      // eslint-disable-next-line no-empty-pattern
      items: newLocal,
    };
    // eslint-disable-next-line array-callback-return
    brands.map((brand: Brands) => {
      if (Number(brand.is_deleted) === 0) {
        let itemChil = {
          id: '',
          label: '',
          icon: '',
          command: () => {
            history.push(`/brand/${brand.id}`);
          },
        };
        itemChil.id = brand.id ? brand?.id : '';
        itemChil.label = brand.name ? brand.name : '';
        Item.items.push(itemChil);
      }
    });

    Tiem.push(Item);
  });

  const items = Tiem;

  const updateQuery = async (e: any) => {
    const value = e?.target?.value;
    history.push('/search');
    dispatch(productsAction.fetchProductsListSearch(value));

  };

  const handleOnChange = debounce(updateQuery, 1000);





  const end = <InputText placeholder="Search" type="text" onChange={handleOnChange} />;

  return (
    <header className="header">
      <div className="container">
        <div className="row row-header">
          <div className="col-1 logo">
            <Typography
              className="box"
              onClick={handlePathHome}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              <Button color="inherit">Logo</Button>
            </Typography>
          </div>
          <div className="col-8 menu">
            <Menubar model={items} end={end} />
          </div>
          <div className="col-3 users" style={{ textAlign: 'right' }}>
            {/* {console.log(isLoggedIn)} */}

            {isLoggedIn ? (
              <>
                <Button color="primary" style={{ marginRight: '5px' }} onClick={handlePathAdmin}>
                  QL
                </Button>
                <Button color="inherit" onClick={handleLogoutClick}>
                  Đăng Xuất
                </Button>
              </>
            ) : (
              <Button color="inherit" onClick={handlePathLogin}>
                Đăng Nhập
              </Button>

            )}
          </div>
        </div>
      </div>
    </header>
  );
}