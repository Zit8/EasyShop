import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useParams } from 'react-router-dom';
import SignUpAdminForm from '../UI/SignUpAdminForm';
import SignInAdminForm from '../UI/SignInAdminForm';

export default function AuthAdminPage(): JSX.Element {
  const { type } = useParams();
  return (
    <Row className="d-flex justify-content-center md-5">
      <Col md={4}>
        {type === 'signin' ? <SignInAdminForm /> : <SignUpAdminForm />}
      </Col>
    </Row>
  );
}