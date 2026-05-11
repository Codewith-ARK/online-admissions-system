import { findOne, insertOne } from "@/lib/db/db";
import { Institute, Program } from "@/types/institute.types";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    if (!id) return Response.json({ error: 'Institute ID is required' }, { status: 400 });

    const institute = await findOne<Institute>('institute', { id: parseInt(id) });
    if (!institute?.programs) return Response.json({ error: 'No programs found' }, { status: 404 });

    return Response.json(institute?.programs);
};

export async function POST(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const data: Institute & { id?: number } = await request.json();
    const { id } = await params;
    if (!id) return Response.json({ error: 'Institute ID is required' }, { status: 400 });

    const institute = await insertOne('institute', data);
    return Response.json(institute);
};