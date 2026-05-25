import { useState } from "react";
import {
  Users,
  CheckCircle,
  Clock,
  Ticket,
  AlertTriangle,
  Server,
  Brain,
  TrendingUp,
  TrendingDown,
  Activity,
} from "lucide-react";
import { AreaChart, Area, BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { DetailModal } from "../components/modals/DetailModal";

const kpiData = [
  { label: "Total Employees", value: "1,247", change: "+12", trend: "up", icon: Users, color: "blue" },
  { label: "Present Today", value: "847", change: "+23", trend: "up", icon: CheckCircle, color: "green" },
  { label: "Late Employees", value: "34", change: "-8", trend: "down", icon: Clock, color: "yellow" },
  { label: "Open Tickets", value: "156", change: "+12", trend: "up", icon: Ticket, color: "orange" },
  { label: "Critical Alerts", value: "7", change: "-3", trend: "down", icon: AlertTriangle, color: "red" },
  { label: "Active Servers", value: "48/52", change: "98%", trend: "up", icon: Server, color: "purple" },
  { label: "AI Predictions", value: "23", change: "Today", trend: "up", icon: Brain, color: "cyan" },
];

const attendanceTrend = [
  { date: "Mon", present: 820, absent: 30, late: 25 },
  { date: "Tue", present: 835, absent: 28, late: 30 },
  { date: "Wed", present: 842, absent: 25, late: 28 },
  { date: "Thu", present: 838, absent: 27, late: 32 },
  { date: "Fri", present: 847, absent: 23, late: 34 },
];

const ticketData = [
  { name: "Open", value: 156, color: "#3b82f6" },
  { name: "In Progress", value: 89, color: "#f59e0b" },
  { name: "Resolved", value: 234, color: "#10b981" },
  { name: "Closed", value: 521, color: "#6b7280" },
];

const departmentPerformance = [
  { dept: "Engineering", attendance: 95, tickets: 45, satisfaction: 92 },
  { dept: "Sales", attendance: 88, tickets: 67, satisfaction: 85 },
  { dept: "Marketing", attendance: 92, tickets: 34, satisfaction: 90 },
  { dept: "HR", attendance: 96, tickets: 23, satisfaction: 88 },
  { dept: "Support", attendance: 90, tickets: 89, satisfaction: 87 },
];

const serverMetrics = [
  { time: "00:00", cpu: 45, memory: 62, requests: 1200 },
  { time: "04:00", cpu: 35, memory: 58, requests: 800 },
  { time: "08:00", cpu: 72, memory: 75, requests: 3400 },
  { time: "12:00", cpu: 85, memory: 82, requests: 4200 },
  { time: "16:00", cpu: 78, memory: 79, requests: 3800 },
  { time: "20:00", cpu: 55, memory: 68, requests: 2100 },
];

const recentTickets = [
  { id: "TKT-2891", title: "Database connection timeout", priority: "Critical", assignee: "John Doe", status: "Open", time: "2 min ago" },
  { id: "TKT-2890", title: "Employee portal login issue", priority: "High", assignee: "Sarah Chen", status: "In Progress", time: "15 min ago" },
  { id: "TKT-2889", title: "Report generation slow", priority: "Medium", assignee: "Mike Johnson", status: "Open", time: "1 hour ago" },
  { id: "TKT-2888", title: "Mobile app crash on iOS", priority: "High", assignee: "Alice Wang", status: "In Progress", time: "2 hours ago" },
];

const aiInsights = [
  { text: "Predicted 15% increase in sick leaves next week based on seasonal patterns", severity: "warning", time: "5 min ago" },
  { text: "Server-03 showing signs of degradation, recommend maintenance", severity: "critical", time: "12 min ago" },
  { text: "Engineering team likely to exceed ticket SLA by 20% this week", severity: "info", time: "1 hour ago" },
];

export function Dashboard() {
  const [selectedModal, setSelectedModal] = useState<any>(null);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Operations Dashboard
          </h1>
          <p className="text-slate-400 mt-1">Real-time enterprise monitoring and analytics</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg">
            <p className="text-sm text-slate-400">Last updated</p>
            <p className="text-sm font-semibold">Just now</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {kpiData.map((kpi, idx) => {
          const Icon = kpi.icon;
          const colorClasses = {
            blue: "from-blue-600 to-blue-400",
            green: "from-green-600 to-green-400",
            yellow: "from-yellow-600 to-yellow-400",
            orange: "from-orange-600 to-orange-400",
            red: "from-red-600 to-red-400",
            purple: "from-purple-600 to-purple-400",
            cyan: "from-cyan-600 to-cyan-400",
          }[kpi.color];

          return (
            <div
              key={idx}
              onClick={() => setSelectedModal({ type: "kpi", data: kpi })}
              className="p-5 bg-slate-800/30 border border-slate-700/50 rounded-xl hover:bg-slate-800/50 transition-all cursor-pointer group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${colorClasses} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex items-center gap-1 text-sm">
                  {kpi.trend === "up" ? (
                    <TrendingUp className="w-4 h-4 text-green-400" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-red-400" />
                  )}
                  <span className={kpi.trend === "up" ? "text-green-400" : "text-red-400"}>
                    {kpi.change}
                  </span>
                </div>
              </div>
              <p className="text-2xl font-bold mb-1">{kpi.value}</p>
              <p className="text-sm text-slate-400">{kpi.label}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Attendance Trends</h2>
            <div className="flex gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <span className="text-slate-400">Present</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <span className="text-slate-400">Absent</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <span className="text-slate-400">Late</span>
              </div>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={attendanceTrend}>
              <defs>
                <linearGradient id="colorPresent" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="date" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip
                contentStyle={{ backgroundColor: "#1e293b", border: "1px solid #334155", borderRadius: "8px" }}
              />
              <Area type="monotone" dataKey="present" stroke="#10b981" fillOpacity={1} fill="url(#colorPresent)" />
              <Area type="monotone" dataKey="late" stroke="#f59e0b" fillOpacity={0.3} fill="#f59e0b" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
          <h2 className="text-xl font-semibold mb-6">Ticket Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={ticketData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {ticketData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{ backgroundColor: "#1e293b", border: "1px solid #334155", borderRadius: "8px" }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-2 gap-3 mt-4">
            {ticketData.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="text-sm text-slate-400">{item.name}</span>
                <span className="text-sm font-semibold ml-auto">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
          <h2 className="text-xl font-semibold mb-6">Server Metrics (Real-time)</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={serverMetrics}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="time" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip
                contentStyle={{ backgroundColor: "#1e293b", border: "1px solid #334155", borderRadius: "8px" }}
              />
              <Legend />
              <Line type="monotone" dataKey="cpu" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }} />
              <Line type="monotone" dataKey="memory" stroke="#8b5cf6" strokeWidth={2} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
          <h2 className="text-xl font-semibold mb-6">Department Performance</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={departmentPerformance}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="dept" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip
                contentStyle={{ backgroundColor: "#1e293b", border: "1px solid #334155", borderRadius: "8px" }}
              />
              <Legend />
              <Bar dataKey="attendance" fill="#10b981" radius={[8, 8, 0, 0]} />
              <Bar dataKey="satisfaction" fill="#3b82f6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Recent Tickets</h2>
            <button className="text-sm text-blue-400 hover:text-blue-300">View All</button>
          </div>
          <div className="space-y-3">
            {recentTickets.map((ticket) => (
              <div
                key={ticket.id}
                onClick={() => setSelectedModal({ type: "ticket", data: ticket })}
                className="p-4 bg-slate-800/50 border border-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors cursor-pointer"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-mono text-slate-400">{ticket.id}</span>
                    <span
                      className={`px-2 py-0.5 rounded text-xs font-medium ${
                        ticket.priority === "Critical"
                          ? "bg-red-600/20 text-red-400 border border-red-500/30"
                          : ticket.priority === "High"
                          ? "bg-orange-600/20 text-orange-400 border border-orange-500/30"
                          : "bg-blue-600/20 text-blue-400 border border-blue-500/30"
                      }`}
                    >
                      {ticket.priority}
                    </span>
                  </div>
                  <span className="text-xs text-slate-500">{ticket.time}</span>
                </div>
                <p className="text-sm mb-2">{ticket.title}</p>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Assigned to {ticket.assignee}</span>
                  <span className={`px-2 py-0.5 rounded ${
                    ticket.status === "Open" ? "bg-blue-600/20 text-blue-400" : "bg-yellow-600/20 text-yellow-400"
                  }`}>
                    {ticket.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 bg-gradient-to-br from-purple-600/10 to-blue-600/10 border border-purple-500/30 rounded-xl">
          <div className="flex items-center gap-2 mb-4">
            <Brain className="w-6 h-6 text-purple-400" />
            <h2 className="text-xl font-semibold">AI Insights</h2>
            <div className="ml-auto w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
          </div>
          <div className="space-y-3">
            {aiInsights.map((insight, idx) => (
              <div
                key={idx}
                className="p-4 bg-slate-800/50 border border-slate-700/30 rounded-lg"
              >
                <div className="flex items-start gap-3">
                  <div className={`w-2 h-2 rounded-full mt-1.5 ${
                    insight.severity === "critical" ? "bg-red-400" :
                    insight.severity === "warning" ? "bg-yellow-400" : "bg-blue-400"
                  }`} />
                  <div className="flex-1">
                    <p className="text-sm">{insight.text}</p>
                    <p className="text-xs text-slate-500 mt-2">{insight.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-sm font-medium transition-colors">
            View All Predictions
          </button>
        </div>
      </div>

      {selectedModal && (
        <DetailModal
          isOpen={!!selectedModal}
          onClose={() => setSelectedModal(null)}
          data={selectedModal}
        />
      )}
    </div>
  );
}
