# 💉 Vaxify – Vaccination Management System (VMS)

Vaxify is a **Vaccination Management System (VMS)** designed to manage vaccination appointments through a secure, role-driven platform. The system emphasizes reliability, clear separation of responsibilities, and a maintainable architecture suitable for real-world deployment.

This repository defines the **authoritative scope and behavior** of the platform. Any functionality not explicitly described here is intentionally excluded.

---

## 📌 Overview

Vaxify enables controlled interaction between three primary user groups:

- **Citizens** can discover vaccination centers and book appointments
- **Hospitals** can manage availability, vaccines, and appointments
- **Administrators** can approve hospitals and monitor system-level metrics

### Operational Model

- Each hospital operates as **a single vaccination center**
- Multi-center hospital support is intentionally excluded to maintain operational simplicity

---

## 🧑‍💻 Tech Stack

### Frontend
- React with TypeScript
- Vite
- Tailwind CSS
- ShadCN UI
- Axios

### Backend
- Spring Boot
- RESTful APIs
- JWT-based authentication
- Role-based access control (RBAC)

---

## 🔐 User Roles

### User (Citizen)
- Register and authenticate
- Browse approved hospitals
- View vaccine availability and time slots
- Book and cancel appointments
- Manage personal profile

### Staff (Hospital Representative)
Each staff account is associated with **exactly one hospital**.

- Register a hospital for approval
- Manage hospital details after approval
- Configure available vaccines and working hours
- View all appointments for the hospital
- Update appointment status (`BOOKED`, `COMPLETED`, `CANCELLED`)

Access is strictly limited to the assigned hospital.

### Admin
- Review and approve or reject hospital registrations
- View all registered hospitals
- Access system-level metrics (aggregated counts)
- View users in read-only mode

Admins do not interact with appointment lifecycles.

---

## 🚀 Core Features

### Authentication & Authorization
- User and Staff registration
- Secure login and logout
- JWT-based authentication
- Role-based access enforcement

### User Capabilities
- Dashboard with upcoming appointments
- Hospital discovery
- Appointment booking and cancellation
- Profile management

### Staff Capabilities
- Hospital onboarding and management
- Appointment monitoring
- Appointment status updates
- Vaccine and schedule configuration

### Admin Capabilities
- Hospital approval workflow
- System overview dashboard
- Read-only user management

---

## 🧭 Navigation Structure

### Public
- Home
- About
- Login
- Register

### Authenticated – User
- Dashboard
- My Appointments
- Hospitals
- Profile

### Authenticated – Staff
- Dashboard
- Hospital Details
- Appointments
- Profile

### Authenticated – Admin
- Dashboard
- Hospitals
- Users
- Analytics
- Profile

---

## 🔄 Key Workflows

### Appointment Booking
1. User logs in
2. Browses approved hospitals
3. Selects date and time slot
4. Appointment is created with status `BOOKED`

### Hospital Registration & Approval
1. Staff signs up
2. Registers hospital
3. Hospital is submitted for review
4. Admin approves or rejects the registration

---

## 🏗️ Local Development Setup

### Prerequisites
- Node.js (v18+)
- Java 17+
- npm or yarn

### Frontend
```bash
git clone https://github.com/<your-username>/vaxify.git
cd vaxify/frontend
npm install
npm run dev
```
### Backend
```bash
cd vaxify/backend
./mvnw spring-boot:run
```

---

## 👤 Author
Vaxify – Vaccination Management Platform
Designed and developed as a full-stack system demonstrating secure authentication, role-based access control, and end-to-end appointment management.
