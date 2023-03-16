import React from "react";
import {
  BooleanField,
  Datagrid,
  DateField,
  EmailField,
  List,
  TextField,
} from "react-admin";

function UserList(): JSX.Element {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="name" />
        <EmailField source="email" />
        <TextField source="passwordHash" />
        <BooleanField source="role" />
        <DateField source="createdAt" />
        <DateField source="updatedAt" />
      </Datagrid>
    </List>
  );
}

export default UserList;
