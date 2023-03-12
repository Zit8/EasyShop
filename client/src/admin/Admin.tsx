import React from 'react';
import { Admin } from 'react-admin';

const dataProvider = {};

export default function AdminPanel(): JSX.Element {
  return (
    <Admin dataProvider={dataProvider} />
  );
}
