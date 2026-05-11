import { LoginProps } from "@/types/auth.types";
import { validateUser } from '@/lib/auth/validateUser';
import { findOne } from "@/lib/db/db";
import { User } from "@/lib/auth/userService";

export async function POST(request: Request) {
    const data: LoginProps = await request.json();
    try {
        const user: User = await findOne('users', { email: data.email });
        if (!user) {
            return Response.json({ error: 'User not found!' }, { status: 404 });
        }
        if (user.password != data.password) {
            return Response.json({ error: 'Auth failed' }, { status: 403 });
        }
        return Response.json({
            message: 'OK',
            user: {
                id: user.id,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                role: user.userRole || user.role
            },
        });
    } catch (e) {
        console.error(e);
        return Response.json({ error: 'NOT OK!' }, { status: 403 });
    }

    // try {
    //     const user = await validateUser(data as any);
    //     if (!user) {
    //         return Response.json({ error: 'Invalid credentials' }, { status: 403 });
    //     }

    //     const serialized = encodeURIComponent(JSON.stringify(user));

    //     const headers = new Headers({
    //         'Set-Cookie': `user=${serialized}; Path=/; Max-Age=${60 * 60 * 24}`,
    //         'Content-Type': 'application/json'
    //     });

    //     return new Response(JSON.stringify({ ok: true, user }), { status: 200, headers });
    // } catch (error) {
    //     return Response.json({ error: 'NOT OK!' }, { status: 403 });
    // }
}
