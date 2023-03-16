import React from "react";
import { Admin, ListGuesser, Resource } from "react-admin";
import CategoryList from "./components/pages/CategoryList";
import ProductList from "./components/pages/ProductList";
import ShopList from "./components/pages/ShopList";
import UserList from "./components/pages/UserList";
import ProductCreate from "./components/UI/ProductCreate";
import ProductEdit from "./components/UI/ProductEdit";
import dataApiProvider from "./dataProvider/dataProvider";

function App(): JSX.Element {
  return (
    <Admin dataProvider={dataApiProvider}>
      <Resource
        name="products"
        list={ProductList}
        recordRepresentation="name"
        edit={ProductEdit}
        create={ProductCreate}
      />
      <Resource
        name="categories"
        list={CategoryList}
        recordRepresentation="name"
      />
      <Resource name="users" list={UserList} recordRepresentation="name" />
      <Resource name="shops" list={ShopList} recordRepresentation="name" />
      <Resource
        name="subcategories"
        list={ListGuesser}
        recordRepresentation="name"
      />
      <Resource name="orders" list={ListGuesser} recordRepresentation="name" />
    </Admin>
  );
}

export default App;
