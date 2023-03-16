import React from "react";
import {
  BooleanInput,
  Edit,
  NumberInput,
  ReferenceInput,
  SimpleForm,
  TextInput,
} from "react-admin";
import ProductTitle from "./Title";

function ProductEdit(): JSX.Element {
  return (
    <Edit title={<ProductTitle />}>
      <SimpleForm>
        <TextInput source="id" disabled />
        <TextInput source="name" />
        <TextInput source="description" multiline rows={5} />
        <TextInput source="image" />
        <NumberInput source="number" />
        <TextInput source="unit" />
        <ReferenceInput source="subcategoryId" reference="subcategories" />
        <BooleanInput source="delivered" />
        <ReferenceInput source="shopId" reference="shops" />
        <ReferenceInput source="userId" reference="users" />
        <BooleanInput source="hidden" />
        <NumberInput source="price" />
        <NumberInput source="weight" />
        <TextInput source="weightUnit" />
        <TextInput source="currency" />
      </SimpleForm>
    </Edit>
  );
}

export default ProductEdit;
