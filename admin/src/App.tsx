import React from "react";
import { Admin, ListGuesser, Resource } from "react-admin";
import dataApiProvider from "./dataProvider/dataProvider";

function App(): JSX.Element {
  return (
    <Admin dataProvider={dataApiProvider} >
      <Resource name="products" list={ListGuesser} />
    </Admin>
  );
}

export default App;
