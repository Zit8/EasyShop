import React from "react";
import {
  BooleanField,
  Datagrid,
  DateField,
  EditButton,
  List,
  NumberField,
  ReferenceField,
  ReferenceInput,
  TextField,
  TextInput,
  UrlField,
} from "react-admin";

const productFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  <ReferenceInput source="name" label="Product" reference="name" />,
];

function ProductList(): JSX.Element {
  return (
    <List filters={productFilters}>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="description" />
        <UrlField source="image" />
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
        <EditButton />
      </Datagrid>
    </List>
  );
}

export default ProductList;
