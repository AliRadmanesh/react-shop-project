import { paths } from "./paths";

import Home from "pages/main-page";
import Profile from "pages/profile";
import Cart from "components/common/cart";
import ProductItem from "pages/product-item";
import NotFound from "components/common/not-found";
import ProductsList from "components/common/products-list";
import Error404 from "components/common/not-found/Error404";
import NotAuthenticated from "components/common/not-authenticated";

export const routes = [
  {
    name: "Home",
    path: paths.HOME,
    component: Home,
    exact: true,
    needAuth: false,
  },
  {
    name: "Cart",
    path: paths.CART,
    component: Cart,
    exact: true,
    needAuth: true,
  },
  {
    name: "Profile",
    path: paths.PROFILE,
    component: Profile,
    exact: true,
    needAuth: true,
  },
  {
    name: "ProductsList",
    path: paths.PRODUCTS_LIST,
    component: ProductsList,
    exact: true,
    needAuth: false,
  },
  {
    name: "ProductItem",
    path: paths.PRODUCT_ITEM,
    component: ProductItem,
    exact: true,
    needAuth: false,
  },
  {
    name: "NotAuthenticated",
    path: paths.NOT_AUTHENTICATED,
    component: NotAuthenticated,
    exact: true,
    needAuth: false,
  },
  {
    name: "Error404",
    path: paths.ERROR_404,
    component: Error404,
    exact: true,
    needAuth: false,
  },
  {
    name: "NotFound",
    path: paths.NOT_FOUND,
    component: NotFound,
    exact: true,
    needAuth: false,
  },
];
