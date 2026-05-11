import { findAll } from "@/lib/db/db";

export async function GET(request: Request) {
    const allUser = await findAll('users');
    return Response.json({ data: allUser});
}