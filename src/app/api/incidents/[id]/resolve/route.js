import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function PATCH(req, { params }) {
    const { id } = params;
    // Get current resolved state
    const incident = await prisma.incident.findUnique({ where: { id } });
    if (!incident) {
        return new Response(JSON.stringify({ error: 'Incident not found' }), { status: 404 });
    }
    const updated = await prisma.incident.update({
        where: { id },
        data: { resolved: !incident.resolved },
    });
    return new Response(JSON.stringify(updated), {
        headers: { 'Content-Type': 'application/json' },
    });
} 