import React from "react";
import {
  BooleanField,
  Datagrid,
  DateField,
  List,
  NumberField,
  ReferenceField,
  TextField,
} from "react-admin";

function ProductList(): JSX.Element {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="description" />
        <TextField source="image" />
        <NumberField source="number" />
        <TextField source="unit" />
        <ReferenceField source="subcategoryId" reference="subcategories" />
        <BooleanField source="delivered" />
        <ReferenceField source="shopId" reference="shops" />
        <ReferenceField source="userId" reference="users" />
        <BooleanField source="hidden" />
        <NumberField source="price" />
        <TextField source="weight" />
        <TextField source="weightUnit" />
        <TextField source="currency" />
        <DateField source="createdAt" />
        <DateField source="updatedAt" />
      </Datagrid>
    </List>
  );
}

export default ProductList;
