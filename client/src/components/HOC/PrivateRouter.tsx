import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

type PrivateRouterProps = {
  children?: React.ReactElement;
  redirectTo: string;
  isAllowed: boolean;
};

export default function PrivateRouter({
  children,
  redirectTo,
  isAllowed,
}: PrivateRouterProps): JSX.Element {
  if (!isAllowed) {
    return <Navigate to={redirectTo} replace />;
  }
  return children || <Outlet />;
}
