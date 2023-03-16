import React from "react";
import {
  BooleanInput,
  Create,
  NumberInput,
  ReferenceInput,
  SimpleForm,
  TextInput,
} from "react-admin";
import ProductTitle from "./Title";

function ProductCreate(): JSX.Element {
  return (
    <Create title={<ProductTitle />}>
      <SimpleForm>
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
    </Create>
  );
}

export default ProductCreate;
