import { createBrowserRouter } from "react-router";
import { MainLayout } from "./components/layout/MainLayout";
import { Dashboard } from "./pages/Dashboard";
import { EmployeeManagement } from "./pages/EmployeeManagement";
import { AttendanceManagement } from "./pages/AttendanceManagement";
import { ShiftManagement } from "./pages/ShiftManagement";
import { AttendanceAnalytics } from "./pages/AttendanceAnalytics";
import { TicketManagement } from "./pages/TicketManagement";
import { CreateTicket } from "./pages/CreateTicket";
import { SLAMonitoring } from "./pages/SLAMonitoring";
import { MonitoringCenter } from "./pages/MonitoringCenter";
import { ServerHealth } from "./pages/ServerHealth";
import { APIMonitoring } from "./pages/APIMonitoring";
import { AIInsights } from "./pages/AIInsights";
import { AIRecommendations } from "./pages/AIRecommendations";
import { PredictiveAnalytics } from "./pages/PredictiveAnalytics";
import { Reports } from "./pages/Reports";
import { UserManagement } from "./pages/UserManagement";
import { RoleManagement } from "./pages/RoleManagement";
import { AuditLogs } from "./pages/AuditLogs";
import { Settings } from "./pages/Settings";
import { Login } from "./pages/Login";
import { Departments } from "./pages/Departments";

export const router = createBrowserRouter([
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Dashboard },
      { path: "employees", Component: EmployeeManagement },
      { path: "departments", Component: Departments },
      { path: "attendance", Component: AttendanceManagement },
      { path: "attendance/shifts", Component: ShiftManagement },
      { path: "attendance/analytics", Component: AttendanceAnalytics },
      { path: "tickets", Component: TicketManagement },
      { path: "tickets/create", Component: CreateTicket },
      { path: "tickets/sla", Component: SLAMonitoring },
      { path: "monitoring", Component: MonitoringCenter },
      { path: "monitoring/servers", Component: ServerHealth },
      { path: "monitoring/api", Component: APIMonitoring },
      { path: "ai/insights", Component: AIInsights },
      { path: "ai/recommendations", Component: AIRecommendations },
      { path: "ai/predictive", Component: PredictiveAnalytics },
      { path: "reports", Component: Reports },
      { path: "users", Component: UserManagement },
      { path: "roles", Component: RoleManagement },
      { path: "audit", Component: AuditLogs },
      { path: "settings", Component: Settings },
    ],
  },
]);
