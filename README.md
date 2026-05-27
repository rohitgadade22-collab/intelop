# AI Operations Platform Architecture

## Overview

AI Operations Platform is an enterprise application that provides:

- Employee Management
- Attendance Management
- Shift Management
- Leave Management
- Ticket Management
- Monitoring Center
- AI Operations
- Reporting & Analytics
- Administration

The platform follows a **Modular Monolith Architecture** using:

- React + TypeScript (Frontend)
- ASP.NET Core Web API (.NET 9) (Backend)
- SQL Server (Database)
- Python FastAPI (AI Services)
- SignalR (Real-Time Updates)

---

# High Level Architecture

```text
┌────────────────────────────────────┐
│            React Frontend           │
└──────────────────┬─────────────────┘
                   │ HTTPS/JWT
                   ▼
┌────────────────────────────────────┐
│      ASP.NET Core Web API          │
│        API Gateway Layer           │
└──────────────────┬─────────────────┘
                   │
      ┌────────────┼────────────┐
      ▼            ▼            ▼
Attendance    Employee      Ticket
Module        Module        Module

      ▼            ▼            ▼
 Monitoring    Reports     Administration
 Module        Module        Module

                   │
                   ▼
       AI Integration Service
                   │
                   ▼
        Python FastAPI Service
                   │
                   ▼
              ML Models

                   │
                   ▼
             SQL Server
```

---

# Technology Stack

| Layer | Technology |
|---------|---------|
| Frontend | React 19 |
| Language | TypeScript |
| UI Framework | Material UI |
| Backend | ASP.NET Core 9 Web API |
| ORM | Entity Framework Core |
| Database | SQL Server |
| Authentication | JWT |
| Real-Time | SignalR |
| AI Service | Python FastAPI |
| Machine Learning | Scikit-Learn |
| Logging | Serilog |
| Cache | Redis |
| Reports | ClosedXML / QuestPDF |
| Deployment | IIS / Docker |
| CI/CD | GitHub Actions |

---

# Solution Structure

```text
AIOperations.sln
│
├── src
│   │
│   ├── AIOperations.API
│   │
│   ├── AIOperations.Application
│   │
│   ├── AIOperations.Domain
│   │
│   ├── AIOperations.Infrastructure
│   │
│   ├── AIOperations.Persistence
│   │
│   └── AIOperations.AIClient
│
└── tests
    │
    ├── AIOperations.UnitTests
    └── AIOperations.IntegrationTests
```

---

# Clean Architecture Layers

## Domain Layer

Contains business entities only.

```text
Domain
│
├── Entities
│   ├── Employee
│   ├── Attendance
│   ├── Shift
│   ├── LeaveRequest
│   ├── Ticket
│   ├── ServerAlert
│   └── Prediction
│
├── Enums
│
└── Constants
```

Responsibilities:

- Business rules
- Core entities
- Enums
- Domain constants

No dependency on any framework.

---

## Application Layer

Contains business logic.

```text
Application
│
├── Features
│   ├── Attendance
│   ├── Employee
│   ├── Ticket
│   ├── Monitoring
│   ├── Reports
│   └── AIOperations
│
├── DTOs
│
├── Interfaces
│
├── Validators
│
└── Services
```

Responsibilities:

- Use cases
- Validation
- DTO mapping
- Business workflows

---

## Infrastructure Layer

Contains external integrations.

```text
Infrastructure
│
├── Services
│   ├── EmailService
│   ├── SmsService
│   ├── NotificationService
│   └── AIService
│
├── Logging
│
├── Authentication
│
└── SignalR
```

Responsibilities:

- External APIs
- Authentication
- Logging
- Email
- SMS
- AI communication

---

## Persistence Layer

Database implementation.

```text
Persistence
│
├── DbContext
│
├── Configurations
│
├── Repositories
│
└── Migrations
```

Responsibilities:

- EF Core
- Database access
- Repository implementation

---

## API Layer

Presentation layer.

```text
API
│
├── Controllers
│
├── Middleware
│
├── Filters
│
├── Extensions
│
└── Program.cs
```

Responsibilities:

- HTTP endpoints
- Authentication
- Authorization
- Swagger

---

# Module Architecture

## Attendance Module

```text
Attendance
│
├── AttendanceController
├── AttendanceService
├── AttendanceRepository
├── AttendanceValidator
├── AttendanceDto
└── AttendanceEntity
```

Features:

- Check In
- Check Out
- Shift Tracking
- Attendance Reports
- Late Arrival Detection

---

## Employee Module

Features:

- Employee CRUD
- Department Management
- Designation Management
- Employee Search
- Employee Profile

---

## Leave Module

Features:

- Apply Leave
- Leave Approval
- Leave Balance
- Leave History

---

## Shift Module

Features:

- Shift Creation
- Shift Assignment
- Shift Rotation
- Night Shift Handling

---

## Ticket Management Module

Features:

- Create Ticket
- Assign Ticket
- SLA Monitoring
- Escalation
- Ticket Analytics

---

## Monitoring Module

Features:

- Server Monitoring
- CPU Monitoring
- Memory Monitoring
- Disk Monitoring
- Service Monitoring
- Alert Generation

---

## AI Operations Module

Features:

- Attendance Prediction
- Ticket Classification
- Ticket Priority Prediction
- Shift Recommendation
- Anomaly Detection
- AI Chat Assistant

---

# Frontend Architecture

```text
src
│
├── modules
│   │
│   ├── dashboard
│   ├── attendance
│   ├── employee
│   ├── leave
│   ├── shift
│   ├── ticket
│   ├── monitoring
│   ├── aioperations
│   ├── reports
│   └── administration
│
├── components
│
├── layouts
│
├── services
│
├── hooks
│
├── store
│
├── routes
│
└── utils
```

---

# Authentication Flow

```text
User
 │
 ▼
Login
 │
 ▼
ASP.NET Identity
 │
 ▼
JWT Token
 │
 ▼
Protected APIs
```

Roles:

- SuperAdmin
- Admin
- HR
- Manager
- TeamLead
- Employee

---

# Real-Time Communication

SignalR is used for:

- Attendance Updates
- Live Notifications
- Monitoring Alerts
- Ticket Updates
- AI Alerts

Architecture:

```text
Client
 │
 ▼
SignalR Hub
 │
 ▼
ASP.NET Core
```

---

# AI Service Architecture

Python FastAPI service provides AI capabilities.

```text
FastAPI
│
├── Attendance Prediction
├── Ticket Classification
├── Priority Prediction
├── Forecasting
├── Recommendation Engine
├── AI Assistant
└── Anomaly Detection
```

---

# AI Communication Flow

```text
React
 │
 ▼
ASP.NET Core API
 │
 ▼
AI Integration Service
 │
 ▼
Python FastAPI
 │
 ▼
ML Model
 │
 ▼
Prediction Response
```

---

# Database Architecture

## Core Tables

### Employees

```sql
EmployeeId
EmployeeCode
FullName
DepartmentId
DesignationId
Status
CreatedDate
```

### Attendance

```sql
AttendanceId
EmployeeId
PunchIn
PunchOut
WorkingHours
ShiftId
Status
```

### Shifts

```sql
ShiftId
ShiftName
StartTime
EndTime
```

### Tickets

```sql
TicketId
Title
Description
Priority
Status
AssignedTo
```

### Monitoring

```sql
ServerId
ServerName
CPUUsage
MemoryUsage
DiskUsage
Status
```

### Predictions

```sql
PredictionId
PredictionType
InputData
PredictionResult
CreatedDate
```

---

# Reporting

Supported reports:

- Employee Report
- Attendance Report
- Leave Report
- Ticket Report
- Monitoring Report
- AI Analytics Report

Export formats:

- Excel
- PDF
- CSV

---

# Logging Strategy

Serilog

```text
Logs
│
├── Information
├── Warning
├── Error
└── Critical
```

Log destinations:

- File
- SQL Server
- Elastic Search

---

# Deployment Architecture

```text
Internet
   │
   ▼
Load Balancer
   │
   ▼
IIS / Nginx
   │
   ▼
ASP.NET Core API
   │
   ├── SignalR
   ├── Business Modules
   └── AI Integration
          │
          ▼
      FastAPI
          │
          ▼
      SQL Server
```

---

# Future Enhancements

- Microservices Migration
- Kubernetes Deployment
- Event Driven Architecture
- RabbitMQ Integration
- Multi-Tenant Support
- Mobile Application
- AI Copilot
- Predictive Analytics Dashboard

---

# Architecture Principles

- Clean Architecture
- SOLID Principles
- Dependency Injection
- Repository Pattern
- CQRS (Optional)
- Domain Driven Design (Optional)
- Modular Monolith First
- Microservices Later
- Secure by Design
- Cloud Ready
