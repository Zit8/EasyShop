import React from "react";
import {
  Datagrid,
  DateField,
  EmailField,
  List,
  ReferenceField,
  TextField,
} from "react-admin";

function ShopList(): JSX.Element {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="description" />
        <TextField source="logo" />
        <TextField source="city" />
        <TextField source="address" />
        <TextField source="phone" />
        <EmailField source="email" />
        <TextField source="startTime" />
        <TextField source="finishingTime" />
        <TextField source="weekdays" />
        <ReferenceField source="userId" reference="users" />
        <TextField source="ratingLink" />
        <TextField source="urlName" />
        <DateField source="createdAt" />
        <DateField source="updatedAt" />
      </Datagrid>
    </List>
  );
}

export default ShopList;
