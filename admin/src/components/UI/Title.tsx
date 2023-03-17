import React from "react";
import { useRecordContext } from "react-admin";

function ProductTitle(): JSX.Element {
  const record = useRecordContext();
  return <div>Product {record ? `"${record.title}"` : ""}</div>;
}

export default ProductTitle;
