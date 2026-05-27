┌──────────────────────────────────────────────────────────────┐
│                        React Frontend                        │
├──────────────────────────────────────────────────────────────┤
│ Dashboard                                                    │
│ Attendance Management                                        │
│ Employee Management                                          │
│ Ticket Management                                            │
│ Monitoring Center                                            │
│ AI Operations                                                │
│ Reports                                                      │
│ Administration                                               │
└──────────────────────────┬───────────────────────────────────┘
                           │ HTTPS/JWT
                           ▼
┌──────────────────────────────────────────────────────────────┐
│                 ASP.NET Core Web API (.NET 9)               │
├──────────────────────────────────────────────────────────────┤
│ Authentication & Authorization                              │
│ API Controllers                                              │
│ Middleware                                                   │
│ SignalR Hub (Real-Time Updates)                             │
│ Validation                                                   │
│ Logging                                                      │
└──────────────────────────┬───────────────────────────────────┘
                           │
───────────────────────────┼────────────────────────────────────
                           │
                           ▼
┌──────────────────────────────────────────────────────────────┐
│                    Business Layer                            │
├──────────────────────────────────────────────────────────────┤
│ Attendance Service                                           │
│ Employee Service                                             │
│ Shift Service                                                │
│ Leave Service                                                │
│ Ticket Service                                               │
│ Monitoring Service                                           │
│ Report Service                                               │
│ Notification Service                                         │
│ AI Integration Service                                       │
└──────────────────────────┬───────────────────────────────────┘
                           │
                           ▼
┌──────────────────────────────────────────────────────────────┐
│                  Data Access Layer                           │
├──────────────────────────────────────────────────────────────┤
│ Entity Framework Core                                        │
│ Repository Pattern                                           │
│ Unit Of Work                                                 │
│ Stored Procedures                                            │
└──────────────────────────┬───────────────────────────────────┘
                           │
                           ▼
┌──────────────────────────────────────────────────────────────┐
│                       SQL Server                             │
├──────────────────────────────────────────────────────────────┤
│ Employees                                                    │
│ Attendance                                                   │
│ Shifts                                                       │
│ Leave Requests                                               │
│ Tickets                                                      │
│ Ticket History                                               │
│ Server Monitoring                                            │
│ Alerts                                                       │
│ AI Predictions                                               │
│ Audit Logs                                                   │
│ Roles                                                        │
│ Permissions                                                  │
└──────────────────────────────────────────────────────────────┘
