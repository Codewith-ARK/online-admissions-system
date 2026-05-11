import { findOne, insertOne } from "@/lib/db/db";
import { RegisterProps } from "@/types/auth.types";

export async function POST(request: Request) {
    try {
        const data: RegisterProps = await request.json();
        const existing = await findOne('users', { email: data.email });
        if (existing) {
            return Response.json({ error: 'Email already in use' }, { status: 409 });
        }
        await insertOne('users', data);
        return Response.json({ message: 'OK' });
    } catch (e) {
        return Response.json({ error: e }, { status: 500 });
    }
}