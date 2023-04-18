export type User = {
  id: number;
  name: string;
  lastname: string;
  email: string;
  fiscalcode: string;
  province: string;
  phone: string;
  age: number;
  country: string;
  login: string;
};

export type UsersObj = {
  data: Array<User>;
  message: string;
};

export type LoginObj = {
  access_token: string;
  email: string;
  expires_in: number;
  token_type: string;
  user_name: string;
};

export type Credentials = {
  email: string;
  password:string;
}
