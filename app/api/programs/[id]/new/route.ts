import { findOne, insertOne, updateOne } from "@/lib/db/db";
import { Institute, Program } from "@/types/institute.types";

export async function POST(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const data: Program = await request.json();

    const institute = await findOne<Institute>('institute', { id: parseInt(id) });
    if (!institute) return Response.json({ error: 'Institute not found' }, { status: 404 });

    const updatedPrograms = [...(institute.programs ?? []), data];
    const updated = await updateOne('institute', parseInt(id), { programs: updatedPrograms });

    return Response.json({ programs: updated?.programs });
}