export interface IProduct {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  created_at: Date;
  updated_at: Date;
}

export interface IUser {
  email: string;
  password: string;
  id: string;
  token: string;
}

export interface ISession {
  user: IUser;
  token: string;
}
