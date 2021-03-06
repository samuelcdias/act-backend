import { User } from "@entities/Users/types";

export interface UserRepository {
  create(user: CreateUserDTO): UserReturned;
  update(user: UpdateUserDTO): UserReturned;
  getById(id: string): User;
  getBy(params: GetByDTO): User[];
}

export type UserReturned = {
  id: string;
  name: string;
  email: string;
  isAdmin: boolean;
  isActive: boolean;
};
type CreateUserDTO = {
  name: User["name"];
  email: User["email"];
  password: User["password"];
};
type UpdateUserDTO = {
  name: User["name"];
};
type GetByDTO = {
  columnName: keyof User;
  columnValue: User[GetByDTO["columnName"]];
};
