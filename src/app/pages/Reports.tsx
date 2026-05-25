import { FileText, Download, Calendar, Filter, TrendingUp, Users, Clock, Ticket } from "lucide-react";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const reportTypes = [
  { id: 1, name: "Attendance Report", icon: Clock, count: "847 records", color: "blue", lastGenerated: "2 hours ago" },
  { id: 2, name: "Employee Report", icon: Users, count: "1,247 records", color: "green", lastGenerated: "1 day ago" },
  { id: 3, name: "Ticket Analytics", icon: Ticket, count: "156 open", color: "orange", lastGenerated: "5 hours ago" },
  { id: 4, name: "Performance Report", icon: TrendingUp, count: "6 departments", color: "purple", lastGenerated: "3 hours ago" },
];

const monthlyMetrics = [
  { month: "Jan", attendance: 95, tickets: 145, performance: 88 },
  { month: "Feb", attendance: 94, tickets: 167, performance: 90 },
  { month: "Mar", attendance: 96, tickets: 134, performance: 92 },
  { month: "Apr", attendance: 95, tickets: 156, performance: 89 },
  { month: "May", attendance: 96, tickets: 142, performance: 91 },
];

const ticketsByCategory = [
  { name: "Infrastructure", value: 45, color: "#3b82f6" },
  { name: "Application", value: 67, color: "#10b981" },
  { name: "Performance", value: 34, color: "#f59e0b" },
  { name: "Security", value: 23, color: "#ef4444" },
];

export function Reports() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Reports & Analytics</h1>
          <p className="text-slate-400 mt-1">Generate and export detailed reports</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg flex items-center gap-2 hover:bg-slate-800 transition-colors">
            <Calendar className="w-5 h-5" />
            Date Range
          </button>
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center gap-2 transition-colors">
            <Download className="w-5 h-5" />
            Export All
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {reportTypes.map((report) => {
          const Icon = report.icon;
          const colorClasses = {
            blue: "from-blue-600 to-blue-400",
            green: "from-green-600 to-green-400",
            orange: "from-orange-600 to-orange-400",
            purple: "from-purple-600 to-purple-400",
          }[report.color];

          return (
            <div key={report.id} className="p-5 bg-slate-800/30 border border-slate-700/50 rounded-xl hover:border-blue-500/50 transition-all cursor-pointer group">
              <div className={`w-12 h-12 bg-gradient-to-br ${colorClasses} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">{report.name}</h3>
              <p className="text-sm text-slate-400 mb-3">{report.count}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500">{report.lastGenerated}</span>
                <Download className="w-4 h-4 text-blue-400" />
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
          <h2 className="text-xl font-semibold mb-6">Monthly Trends</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyMetrics}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="month" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip
                contentStyle={{ backgroundColor: "#1e293b", border: "1px solid #334155", borderRadius: "8px" }}
              />
              <Legend />
              <Line type="monotone" dataKey="attendance" stroke="#10b981" strokeWidth={2} name="Attendance %" />
              <Line type="monotone" dataKey="tickets" stroke="#f59e0b" strokeWidth={2} name="Tickets" />
              <Line type="monotone" dataKey="performance" stroke="#3b82f6" strokeWidth={2} name="Performance %" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
          <h2 className="text-xl font-semibold mb-6">Ticket Distribution</h2>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={ticketsByCategory}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {ticketsByCategory.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {ticketsByCategory.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="text-xs text-slate-400">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Quick Export</h2>
          <button className="px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg flex items-center gap-2 hover:bg-slate-800 transition-colors">
            <Filter className="w-5 h-5" />
            Configure
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {[
            { title: "Daily Attendance", desc: "Last 30 days attendance data", format: "CSV" },
            { title: "Employee Directory", desc: "Complete employee list", format: "PDF" },
            { title: "Ticket Summary", desc: "Open and closed tickets", format: "Excel" },
            { title: "Performance Metrics", desc: "Department performance", format: "PDF" },
            { title: "SLA Compliance", desc: "Ticket SLA tracking", format: "CSV" },
            { title: "Overtime Report", desc: "Employee overtime hours", format: "Excel" },
          ].map((export_item, idx) => (
            <div key={idx} className="p-4 bg-slate-800/50 border border-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <FileText className="w-5 h-5 text-blue-400" />
                <span className="px-2 py-0.5 bg-blue-600/20 text-blue-400 rounded text-xs">
                  {export_item.format}
                </span>
              </div>
              <h3 className="font-semibold mb-1">{export_item.title}</h3>
              <p className="text-xs text-slate-400 mb-3">{export_item.desc}</p>
              <button className="w-full px-3 py-2 bg-blue-600 hover:bg-blue-700 rounded text-sm transition-colors">
                Download
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
          <h2 className="text-xl font-semibold mb-4">Scheduled Reports</h2>
          <div className="space-y-3">
            {[
              { name: "Weekly Attendance Summary", schedule: "Every Monday 9:00 AM", recipients: "HR Team" },
              { name: "Monthly Performance Report", schedule: "1st of every month", recipients: "Management" },
              { name: "Daily Ticket Status", schedule: "Every day 6:00 PM", recipients: "IT Team" },
            ].map((scheduled, idx) => (
              <div key={idx} className="p-4 bg-slate-800/50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-sm">{scheduled.name}</h3>
                  <button className="text-xs text-blue-400">Edit</button>
                </div>
                <p className="text-xs text-slate-400">{scheduled.schedule}</p>
                <p className="text-xs text-slate-500 mt-1">To: {scheduled.recipients}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 bg-gradient-to-br from-purple-600/10 to-blue-600/10 border border-purple-500/30 rounded-xl">
          <h2 className="text-xl font-semibold mb-4">AI-Generated Insights</h2>
          <div className="space-y-3">
            <div className="p-4 bg-slate-800/50 rounded-lg">
              <p className="text-sm font-medium mb-2">Attendance Trend Summary</p>
              <p className="text-xs text-slate-400">Overall attendance improved by 2.3% this month. Engineering department shows highest improvement at 3.8%.</p>
            </div>
            <div className="p-4 bg-slate-800/50 rounded-lg">
              <p className="text-sm font-medium mb-2">Ticket Resolution Insight</p>
              <p className="text-xs text-slate-400">Average resolution time decreased by 15%. Infrastructure tickets taking 20% longer than average.</p>
            </div>
            <div className="p-4 bg-slate-800/50 rounded-lg">
              <p className="text-sm font-medium mb-2">Performance Prediction</p>
              <p className="text-xs text-slate-400">Based on current trends, expect 5% performance improvement next quarter across all departments.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
