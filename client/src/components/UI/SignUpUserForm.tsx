import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { signUpUserActionThunk } from '../../features/actions';
import { useAppDispatch } from '../../features/reduxHooks';
import type { UserSubmitForm } from '../../types';

export default function SignUpUserForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const data = Object.fromEntries(
      new FormData(e.currentTarget),
    ) as unknown as UserSubmitForm;

    dispatch(signUpUserActionThunk(data)).catch(() => null);
  };
  const handlerClick = (): void => {
    if (value === true) {
      navigate('/authadmin/:type');
    }
  };

  return (
    <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="formBasicLogin">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" placeholder="Title" />
        <Form.Text className="text-muted" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicLogin">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name="email" placeholder="Title" />
        <Form.Text className="text-muted" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicLogin">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="passwordHash" placeholder="Title" />
        <Form.Text className="text-muted" />
      </Form.Group>
      <Form.Select name="role" aria-label="Default select example">
        <option>Choose role</option>
        <option value="false">Покупатель</option>
        <option value="true">Владелец</option>
      </Form.Select>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          onClick={handlerClick}
          variant="primary"
          type="submit"
          style={{ margin: 15 }}
        >
          Submit
        </Button>
      </div>
    </Form>
  );
}
