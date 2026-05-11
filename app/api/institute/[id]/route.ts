import { deleteOne, findOne, updateOne } from "@/lib/db/db";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const res = findOne('institute', { id: parseInt(id) });
    if (!res) return Response.json({ error: 'Institute not found' }, { status: 404 });
    return Response.json({ data: res });
}

export async function PUT(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const data = await request.json();
    const updated = await updateOne('institute', parseInt(id), data);
    if (!updated) {
        return Response.json({ error: 'Institute not found' }, { status: 404 });
    }
    return Response.json({ user: updated });
};

export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const deleted = await deleteOne('institute', parseInt(id));
    if (!deleted) return Response.json({ error: 'Institute not found' }, { status: 404 });
    return Response.json({ message: 'User deleted' });
};