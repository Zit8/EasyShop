import React from "react";
import { Admin, ListGuesser, Resource } from "react-admin";
import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";
import ShopList from "./components/ShopList";
import UserList from "./components/UserList";
import dataApiProvider from "./dataProvider/dataProvider";

function App(): JSX.Element {
  return (
    <Admin dataProvider={dataApiProvider} >
      <Resource name="products" list={ProductList} />
      <Resource name="categories" list={CategoryList} />
      <Resource name="users" list={UserList} />
      <Resource name="shops" list={ShopList} />
      <Resource name="subcategories" list={ListGuesser} />
    </Admin>
  );
}

export default App;
