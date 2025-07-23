import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const resolved = searchParams.get('resolved');
    const where = {};
    if (resolved === 'false') where.resolved = false;
    const incidents = await prisma.incident.findMany({
        where,
        orderBy: { tsStart: 'desc' },
        include: { camera: true },
    });
    return new Response(JSON.stringify(incidents), {
        headers: { 'Content-Type': 'application/json' },
    });
} 