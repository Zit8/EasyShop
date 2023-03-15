import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';

type PropsType = {
  subcategoryName: string;
  handlerCategory: (subcategoryName: string) => void;
};
export default function OneCategory({
  subcategoryName,
  handlerCategory,
}: PropsType): JSX.Element {
  const [color, setColor] = useState('black');
  return (
    <Col
      style={{ color }}
      onMouseOver={() => setColor('blue')}
      onMouseOut={() => setColor('black')}
      onClick={() => handlerCategory(subcategoryName)}
      key={subcategoryName}
    >
      {subcategoryName}
    </Col>
  );
}
