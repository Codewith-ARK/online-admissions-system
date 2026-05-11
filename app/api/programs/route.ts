import { findAll } from "@/lib/db/db";
import { Institute } from "@/types/institute.types";

export async function GET(request: Request) {
    const res = await findAll<Institute>('institute');
    const programs = res.flatMap((item) => item.programs ?? []);
    return Response.json(programs);
}