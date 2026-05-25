import { useState } from "react";
import { Link, useLocation } from "react-router";
import {
  LayoutDashboard,
  Users,
  Clock,
  Ticket,
  Activity,
  Brain,
  FileText,
  Settings,
  ChevronDown,
  Building2,
  UserCircle,
  CalendarClock,
  BarChart3,
  Plus,
  AlertTriangle,
  Server,
  Database,
  Lightbulb,
  TrendingUp,
  Shield,
  History,
} from "lucide-react";

interface MenuItem {
  label: string;
  icon: React.ReactNode;
  path?: string;
  children?: MenuItem[];
}

const menuItems: MenuItem[] = [
  {
    label: "Dashboard",
    icon: <LayoutDashboard className="w-5 h-5" />,
    path: "/",
  },
  {
    label: "Attendance Management",
    icon: <Clock className="w-5 h-5" />,
    children: [
      { label: "Employee Attendance", icon: <Clock className="w-4 h-4" />, path: "/attendance" },
      { label: "Shift Management", icon: <CalendarClock className="w-4 h-4" />, path: "/attendance/shifts" },
      { label: "Attendance Analytics", icon: <BarChart3 className="w-4 h-4" />, path: "/attendance/analytics" },
    ],
  },
  {
    label: "Employee Management",
    icon: <Users className="w-5 h-5" />,
    children: [
      { label: "Employees", icon: <UserCircle className="w-4 h-4" />, path: "/employees" },
      { label: "Departments", icon: <Building2 className="w-4 h-4" />, path: "/departments" },
    ],
  },
  {
    label: "Ticket Management",
    icon: <Ticket className="w-5 h-5" />,
    children: [
      { label: "Create Ticket", icon: <Plus className="w-4 h-4" />, path: "/tickets/create" },
      { label: "Open Tickets", icon: <Ticket className="w-4 h-4" />, path: "/tickets" },
      { label: "SLA Monitoring", icon: <AlertTriangle className="w-4 h-4" />, path: "/tickets/sla" },
    ],
  },
  {
    label: "Monitoring Center",
    icon: <Activity className="w-5 h-5" />,
    children: [
      { label: "Server Health", icon: <Server className="w-4 h-4" />, path: "/monitoring/servers" },
      { label: "API Monitoring", icon: <Activity className="w-4 h-4" />, path: "/monitoring/api" },
      { label: "Live Alerts", icon: <AlertTriangle className="w-4 h-4" />, path: "/monitoring" },
    ],
  },
  {
    label: "AI Operations",
    icon: <Brain className="w-5 h-5" />,
    children: [
      { label: "AI Insights", icon: <Lightbulb className="w-4 h-4" />, path: "/ai/insights" },
      { label: "AI Recommendations", icon: <Brain className="w-4 h-4" />, path: "/ai/recommendations" },
      { label: "Predictive Analytics", icon: <TrendingUp className="w-4 h-4" />, path: "/ai/predictive" },
    ],
  },
  {
    label: "Reports",
    icon: <FileText className="w-5 h-5" />,
    path: "/reports",
  },
  {
    label: "Administration",
    icon: <Settings className="w-5 h-5" />,
    children: [
      { label: "User Management", icon: <Users className="w-4 h-4" />, path: "/users" },
      { label: "Role Management", icon: <Shield className="w-4 h-4" />, path: "/roles" },
      { label: "Audit Logs", icon: <History className="w-4 h-4" />, path: "/audit" },
      { label: "Settings", icon: <Settings className="w-4 h-4" />, path: "/settings" },
    ],
  },
];

export function Sidebar() {
  const location = useLocation();
  const [expanded, setExpanded] = useState<string[]>(["Attendance Management", "AI Operations"]);

  const toggleExpand = (label: string) => {
    setExpanded((prev) =>
      prev.includes(label) ? prev.filter((item) => item !== label) : [...prev, label]
    );
  };

  const isActive = (path?: string) => {
    if (!path) return false;
    return location.pathname === path;
  };

  return (
    <div className="w-72 bg-slate-900/50 backdrop-blur-xl border-r border-slate-800/50 flex flex-col">
      <div className="p-6 border-b border-slate-800/50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <Brain className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="font-bold text-lg">AI Operations</h1>
            <p className="text-xs text-slate-400">Enterprise Platform</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto p-4 space-y-1">
        {menuItems.map((item) => (
          <div key={item.label}>
            {item.children ? (
              <div>
                <button
                  onClick={() => toggleExpand(item.label)}
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-slate-300 hover:bg-slate-800/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    {item.icon}
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      expanded.includes(item.label) ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {expanded.includes(item.label) && (
                  <div className="ml-4 mt-1 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path!}
                        className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                          isActive(child.path)
                            ? "bg-blue-600 text-white"
                            : "text-slate-400 hover:bg-slate-800/50 hover:text-slate-200"
                        }`}
                      >
                        {child.icon}
                        <span>{child.label}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                to={item.path!}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                  isActive(item.path)
                    ? "bg-blue-600 text-white"
                    : "text-slate-300 hover:bg-slate-800/50"
                }`}
              >
                {item.icon}
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            )}
          </div>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-800/50">
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg p-4 border border-blue-500/30">
          <div className="flex items-center gap-2 mb-2">
            <Brain className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-semibold">AI Assistant</span>
          </div>
          <p className="text-xs text-slate-400">
            Ask me anything about your operations
          </p>
        </div>
      </div>
    </div>
  );
}
