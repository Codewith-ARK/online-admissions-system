import { UserRoles } from '@/constants/user-role';
import { findAll, findOne, insertOne, updateOne, deleteOne } from '@/lib/db/db';

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: UserRoles;
};

const RESOURCE = 'users';

// CRUD Operations
export async function getUsers(): Promise<User[]> {
  return findAll<User>(RESOURCE);
}

export async function getUserById(id: number): Promise<User | undefined> {
  return findOne<User>(RESOURCE, { id });
}

export async function createUser(userData: Omit<User, 'id'>): Promise<User> {
  return insertOne<Omit<User, 'id'>>(RESOURCE, userData) as Promise<User>;
}

export async function updateUser(id: number, updates: Partial<Omit<User, 'id'>>): Promise<User | null> {
  return updateOne<User>(RESOURCE, id, updates);
}

export async function deleteUser(id: number): Promise<boolean> {
  return deleteOne<User>(RESOURCE, id);
}

// Auth Validation
export async function validateUser(credentials: { email: string; password: string }): Promise<Omit<User, 'password'> | null> {
  const users = await getUsers();
  const user = users.find(
    u => u.email.toLowerCase() === credentials.email.toLowerCase() && u.password === credentials.password
  );
  if (!user) return null;
  const { password, ...safe } = user;
  return safe;
}