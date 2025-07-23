// @ts-check
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.incident.deleteMany({}); // Clear all old incidents
  const now = new Date();
  const types = [
    "Unauthorised Access",
    "Gun Threat",
    "Unauthorised Access",
    "Face Recognised",
    "Unauthorised Access",
  ];
  const thumbnails = [
    "/Thumbnails/image4.png",
    "/Thumbnails/image2.png",
    "/Thumbnails/image3.png",
    "/Thumbnails/image5.png",
  ];
  const incidents = [];
  for (let i = 0; i < 15; i++) {
    incidents.push({
      cameraId: 'cam1',
      type: types[i % types.length],
      tsStart: new Date(now.getTime() - 1000 * 60 * 60 * (i + 1)),
      tsEnd: new Date(now.getTime() - 1000 * 60 * 60 * (i + 1) + 120000),
      thumbnailUrl: thumbnails[i % thumbnails.length],
      resolved: false,
    });
  }
  for (const incident of incidents) {
    await prisma.incident.create({ data: incident });
  }
  console.log('Seeded 15 incidents!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
