// @ts-check
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.incident.deleteMany({}); // Clear all old incidents
  await prisma.camera.deleteMany({}); // Clear all old cameras

  // Insert cameras first
  const cameras = [
    { id: 'cam1', name: 'Shop Floor A', location: 'Shop Floor' },
    { id: 'cam2', name: 'Vault', location: 'Vault Room' },
    { id: 'cam3', name: 'Entrance', location: 'Main Entrance' },
  ];
  await prisma.camera.createMany({ data: cameras, skipDuplicates: true });

  const cameraIds = cameras.map(c => c.id);
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
  const now = new Date();
  const incidents = [];
  for (let i = 0; i < 15; i++) {
    incidents.push({
      cameraId: cameraIds[i % cameraIds.length],
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
