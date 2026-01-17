import React, { useState } from "react";
import { generateRooms, calculateTravelTime } from "./utils/roomUtils.js";

export default function App() {
  const [rooms, setRooms] = useState(generateRooms());
  const [count, setCount] = useState(1);

  const bookRooms = () => {
    const available = rooms.filter(r => r.status === "available");

    if (available.length < count) {
      alert("Not enough rooms available");
      return;
    }

    let best = null;
    let minTime = Infinity;

    for (let i = 0; i <= available.length - count; i++) {
      const selection = available.slice(i, i + count);
      const time = calculateTravelTime(selection);

      if (time < minTime) {
        minTime = time;
        best = selection;
      }
    }

    setRooms(prev =>
      prev.map(room =>
        best.some(b => b.roomNumber === room.roomNumber)
          ? { ...room, status: "booked" }
          : room
      )
    );
  };

  const randomOccupy = () => {
    setRooms(prev =>
      prev.map(room =>
        room.status === "available" && Math.random() < 0.4
          ? { ...room, status: "occupied" }
          : room
      )
    );
  };

  const resetAll = () => {
    setRooms(generateRooms());
  };

  const grouped = rooms.reduce((acc, room) => {
    if (!acc[room.floor]) acc[room.floor] = [];
    acc[room.floor].push(room);
    return acc;
  }, {});

  return (
    <div className="container">
      <h1>Hotel Room Reservation System</h1>

      <div className="controls">
        <input
          type="number"
          min="1"
          max="5"
          value={count}
          onChange={e => setCount(Number(e.target.value))}
        />
        <button onClick={bookRooms}>Book Rooms</button>
        <button onClick={randomOccupy}>Random Occupancy</button>
        <button onClick={resetAll}>Reset</button>
      </div>

      {Object.keys(grouped).map(floor => (
        <div key={floor} className="floor">
          <h3>Floor {floor}</h3>
          <div className="rooms">
            {grouped[floor].map(room => (
              <div
                key={room.roomNumber}
                className={`room ${room.status}`}
              >
                {room.roomNumber}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
