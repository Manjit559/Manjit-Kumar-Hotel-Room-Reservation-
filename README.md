# Hotel Room Reservation System

## ✅ Project Overview
This is a Hotel Room Reservation System built using **React**.  
The application simulates booking rooms in a 10-floor hotel (97 rooms total) and optimally assigns rooms based on minimizing travel time.

---

## 🏨 Hotel Structure
- Floors **1 to 9** have **10 rooms each** (e.g., 101–110, 201–210, ...).
- Floor **10** has **7 rooms** (1001–1007).
- Rooms are arranged from **left to right**, with room number increasing.
- Stairs/Lift are located on the **left side**, so room 101 is closest.

---

## ⏱️ Travel Time Rules
- **Horizontal travel:** 1 minute per room.
- **Vertical travel:** 2 minutes per floor.

Example:
- Moving from room **101 to 104** takes **3 minutes**.
- Moving from floor **1 to floor 3** takes **4 minutes**.

---

## 📌 Booking Rules
- A guest can book **1 to 5 rooms** at a time.
- Priority is to book rooms **on the same floor** first.
- If not enough rooms are available on one floor, the system books rooms across floors with **minimum travel time**.

---

## ⚙️ Features
- Enter number of rooms (1–5) and book them.
- Visual representation of rooms by floor.
- Button to generate random room occupancy.
- Button to reset all bookings.

---

## 🧠 Booking Logic
1. Collect all available rooms.
2. Check combinations of requested rooms.
3. Calculate travel time for each combination.
4. Select the combination with the **minimum travel time**.
5. Book the selected rooms.

---

## 🧰 Tech Stack
- React
- JavaScript
- CSS

---

## 🚀 How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/Manjit559/Manjit-Kumar-Hotel-Room-Reservation-.git
