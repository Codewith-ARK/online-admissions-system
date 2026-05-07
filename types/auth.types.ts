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