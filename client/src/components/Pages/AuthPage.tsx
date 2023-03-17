import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useParams } from 'react-router-dom';
import SignInForm from '../UI/SignInForm';
import SignUpUserForm from '../UI/SignUpUserForm';
import SignInForm2 from '../UI/SignInForm2';

export default function AuthPage(): JSX.Element {
  const { type } = useParams();
  return (
    <Row className="d-flex justify-content-center md-5">
      <Col md={4}>
        {type === 'signin' ? <SignInForm2 /> : <SignUpUserForm />}
      </Col>
    </Row>
  );
}
