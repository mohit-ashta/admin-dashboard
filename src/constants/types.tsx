export type signInType = {
  password: string;
  email: string;
};

export type signUpType = {
  username: string;
  password: string;
  email: string;
};

export interface cardDataProps {
  title: string;
  description: string;
  price: string;
  brand: string;
  currency: string;
  image: File[];
}

export interface cardProps {
  title: string;
  description: string;
  price: string;
  brand: string;
  currency: string;
}
