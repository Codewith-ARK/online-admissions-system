import { LoginProps } from "@/types/auth.types";
import { validateUser } from '@/lib/auth/validateUser';

export async function POST(request: Request) {
    const data: LoginProps = await request.json();
    try {
        const user = await validateUser(data as any);
        if (!user) {
            return Response.json({ error: 'Invalid credentials' }, { status: 403 });
        }

        const serialized = encodeURIComponent(JSON.stringify(user));

        const headers = new Headers({
            'Set-Cookie': `user=${serialized}; Path=/; Max-Age=${60 * 60 * 24}`,
            'Content-Type': 'application/json'
        });

        return new Response(JSON.stringify({ ok: true, user }), { status: 200, headers });
    } catch (error) {
        return Response.json({ error: 'NOT OK!' }, { status: 403 });
    }
}
