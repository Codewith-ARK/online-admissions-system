import { insertOne } from "@/lib/db/db";

export async function POST(request: Request) {
    const data = await request.json();
    insertOne('users', data);
}