import { UserRoles } from "@/constants/user-role";

export type LoginProps = {
    email: string;
    password: string;
}

export type User = {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    role: UserRoles;
}

export type RegisterProps = {
    id?: number;
    showPassword: boolean;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    userRole: UserRoles;
}