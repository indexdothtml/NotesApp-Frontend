export type UserData = {
  _id: string;
  fullName: string;
  email: string;
  username: string;
  createdAt: string;
  updatedAt: string;
};

export type InputCardFormValues = {
  name: string;
};

export type ItemDetails<T> = {
  data: T[] | null;
  itemCount: number;
  totalItems: number;
};
