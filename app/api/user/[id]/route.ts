import { deleteOne, findOne, updateOne } from "@/lib/db/db";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const user = await findOne('users', { id: parseInt(id) });
    return Response.json({ user });
};

export async function PUT(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const data = await request.json();
    const updated = await updateOne('users', parseInt(id), data);
    if (!updated) {
        return Response.json({ error: 'User not found' }, { status: 404 });
    }
    return Response.json({ user: updated });
};

export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const deleted = await deleteOne('users', parseInt(id));
    if (!deleted) return Response.json({ error: 'User not found' }, { status: 404 });
    return Response.json({ message: 'User deleted' });
}