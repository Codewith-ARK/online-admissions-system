import { findAll, findOne, insertOne } from '@/lib/db/db';

export async function POST(request: Request) {
    try {
        const { institute } = await request.json();
        const savedInstitute = await insertOne('institute', institute);
        return Response.json(savedInstitute, { status: 201 });
    } catch (e) {
        console.error(e);
        return Response.json({}, { status: 500 });
    }
}

export async function GET(
    request: Request,
) {
    try {
        const institute = await findAll('institute');
        return Response.json(institute);
    } catch (e) {
        console.error(e);
        return Response.json({}, { status: 500 });
    }
}