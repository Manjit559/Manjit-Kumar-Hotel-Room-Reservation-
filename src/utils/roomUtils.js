export function generateRooms() {
  const rooms = [];

  for (let floor = 1; floor <= 9; floor++) {
    for (let i = 1; i <= 10; i++) {
      rooms.push({
        roomNumber: floor * 100 + i,
        floor,
        position: i,
        status: "available"
      });
    }
  }

  for (let i = 1; i <= 7; i++) {
    rooms.push({
      roomNumber: 1000 + i,
      floor: 10,
      position: i,
      status: "available"
    });
  }

  return rooms;
}

export function calculateTravelTime(rooms) {
  if (!rooms || rooms.length === 0) return 0;

  const sorted = [...rooms].sort(
    (a, b) => a.floor - b.floor || a.position - b.position
  );

  const first = sorted[0];
  const last = sorted[sorted.length - 1];

  const vertical = Math.abs(first.floor - last.floor) * 2;
  const horizontal = Math.abs(first.position - last.position);

  return vertical + horizontal;
}
