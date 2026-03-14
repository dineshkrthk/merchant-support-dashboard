# Merchant Support Dashboard

A full-stack ticket management application that allows merchants to create, view, filter, and manage support inquiries.

## Tech Stack

### Frontend
- React
- Vite
- Axios
- Vanilla CSS

### Backend
- Node.js
- Express
- CORS
- dotenv

### Data Storage
- JSON file-based persistence

---

## Features

### Core Features
- Create a new support ticket
- View all tickets in a dashboard
- Update ticket status
- Visual indicators for ticket priority and status

### Additional Enhancements
- Summary stats cards:
  - Total Tickets
  - New
  - Investigating
  - Resolved
- Filter tickets by:
  - Status
  - Priority
- Clean dashboard UI with responsive layout
- Modular folder structure for maintainability

---

## Ticket Fields

Each ticket contains:

- `id`
- `subject`
- `message`
- `priority`
- `status`
- `createdAt`

### Allowed Priority Values
- `LOW`
- `MEDIUM`
- `HIGH`

### Allowed Status Values
- `NEW`
- `INVESTIGATING`
- `RESOLVED`

---

## API Endpoints

### Create Ticket
**POST** `/api/tickets`

#### Request Body
```json
{
  "subject": "Login issue",
  "message": "Unable to access merchant dashboard",
  "priority": "HIGH"
}
````

### Get All Tickets

**GET** `/api/tickets`

### Update Ticket Status

**PATCH** `/api/tickets/:id`

#### Request Body

```json
{
  "status": "RESOLVED"
}
```

---

## Project Structure

```bash
merchant-support-app/
│
├── backend/
│   ├── src/
│   │   ├── constants/
│   │   ├── controllers/
│   │   ├── data/
│   │   ├── middleware/
│   │   ├── repositories/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── app.js
│   │   └── server.js
│   ├── .env
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── constants/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── .env
│   └── package.json
│
└── README.md
```

---

## Architecture Overview

This project follows a **layered modular architecture**.

### Backend Layers

* **Routes**: define API endpoints
* **Controllers**: handle request/response logic
* **Services**: contain business logic
* **Repositories**: manage data access and persistence
* **Middleware**: centralized error handling
* **Constants / Utils**: shared enums and utility logic

### Frontend Layers

* **Pages**: top-level screen composition
* **Components**: reusable UI pieces
* **API Layer**: centralized backend communication
* **Constants**: shared frontend enums and options

---

## Why This Architecture Was Chosen

This architecture was selected because it provides:

* clear separation of concerns
* better maintainability
* easier debugging
* cleaner scalability for future features
* an enterprise-style modular structure

It is more structured than a simple MVC-only implementation, while still staying practical and not overengineered for the scope of this assessment.

---

## Other Possible Architectures

This application could also be implemented using:

### 1. Basic MVC Architecture

* Routes
* Controllers
* Models / Data layer

Good for smaller apps, but less scalable for larger systems.

### 2. Feature-Based Modular Architecture

Organize everything by feature, such as:

* tickets/
* shared/

Useful for larger products with many business modules.

### 3. Clean Architecture

Separate domain, use cases, interfaces, and infrastructure.

Very scalable, but too heavy for a small assessment project like this.

### Chosen Approach

For this application, the best fit was a **layered modular architecture**, because it balances:

* simplicity
* professionalism
* scalability
* readability

---

## Why JSON File Storage Was Used

This project uses a JSON file for persistence instead of a database.

### Reasons

* simple setup
* no external database dependency
* easy to run and evaluate locally
* suitable for the assessment scope

This choice keeps the project lightweight while still preserving data across server restarts.

---

## Setup Instructions

## 1. Clone the repository

```bash
git clone <your-repository-url>
cd merchant-support-app
```

---

## 2. Backend Setup

```bash
cd backend
npm install
```

### Create `.env`

```env
PORT=5000
```

### Start backend

```bash
npm run dev
```

Backend runs on:

```bash
http://localhost:5000
```

---

## 3. Frontend Setup

Open a new terminal:

```bash
cd frontend
npm install
```

### Create `.env`

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

### Start frontend

```bash
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

## How to Use

1. Open the frontend in the browser
2. Create a new ticket using the form
3. View submitted tickets in the dashboard
4. Update ticket status using the dropdown
5. Use filters to narrow tickets by status and priority
6. View summary cards for ticket counts

---

## Validation and Error Handling

### Backend

* validates required fields
* validates allowed priority values
* validates allowed status values
* returns proper error messages for invalid requests
* centralized error handling middleware

### Frontend

* validates subject and message before submission
* displays error banners/messages when API calls fail

---


Vanilla CSS was used instead of Tailwind because it was fully sufficient for the requirements and avoided dependency/version conflicts while keeping the UI clean and customizable.

---

## Future Improvements

If this project were extended further, the next improvements would be:

* search functionality
* sorting options
* pagination
* database integration
* authentication and role-based access
* toast notifications
* edit/delete ticket support
* unit and integration tests
* Docker setup for easier deployment



