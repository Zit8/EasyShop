export type UserFromBackand = {
  id: number;
  name: string;
  role: boolean;
};

export type UserLoginForm = {
  email: string;
  passwordHash: string;
};

export type UserSubmitForm = {
  email: string;
  name: string;
  passwordHash: string;
  role: boolean;
};

export type UserType = {
  user?: UserFromBackand;
  status: 'fetching' | 'logged' | 'err' | 'idle';
};
