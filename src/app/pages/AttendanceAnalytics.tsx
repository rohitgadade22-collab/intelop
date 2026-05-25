import { CheckCircle, XCircle, Clock, TrendingUp, AlertTriangle, Download } from "lucide-react";
import { LineChart, Line, BarChart, Bar, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const monthlyData = [
  { month: "Jan", present: 21, absent: 2, late: 1, overtime: 5 },
  { month: "Feb", present: 20, absent: 1, late: 2, overtime: 6 },
  { month: "Mar", present: 22, absent: 1, late: 1, overtime: 4 },
  { month: "Apr", present: 21, absent: 2, late: 3, overtime: 7 },
  { month: "May", present: 18, absent: 3, late: 2, overtime: 5 },
];

const departmentData = [
  { dept: "Engineering", rate: 96, trend: "up" },
  { dept: "Sales", rate: 92, trend: "up" },
  { dept: "Marketing", rate: 88, trend: "down" },
  { dept: "HR", rate: 94, trend: "up" },
  { dept: "Support", rate: 90, trend: "stable" },
];

const hourlyPattern = [
  { hour: "08:00", checkins: 234 },
  { hour: "09:00", checkins: 412 },
  { hour: "10:00", checkins: 89 },
  { hour: "11:00", checkins: 23 },
  { hour: "12:00", checkins: 156 },
  { hour: "13:00", checkins: 198 },
  { hour: "14:00", checkins: 45 },
  { hour: "15:00", checkins: 67 },
  { hour: "16:00", checkins: 234 },
  { hour: "17:00", checkins: 389 },
];

export function AttendanceAnalytics() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Attendance Analytics</h1>
          <p className="text-slate-400 mt-1">Deep dive into attendance patterns and trends</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center gap-2 transition-colors">
          <Download className="w-5 h-5" />
          Export Report
        </button>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <div className="p-5 bg-gradient-to-br from-green-600/20 to-green-400/20 border border-green-500/30 rounded-xl">
          <div className="flex items-center justify-between mb-3">
            <CheckCircle className="w-8 h-8 text-green-400" />
            <TrendingUp className="w-5 h-5 text-green-400" />
          </div>
          <p className="text-2xl font-bold text-green-400">96.2%</p>
          <p className="text-sm text-slate-400 mt-1">Attendance Rate</p>
        </div>

        <div className="p-5 bg-gradient-to-br from-yellow-600/20 to-yellow-400/20 border border-yellow-500/30 rounded-xl">
          <div className="flex items-center justify-between mb-3">
            <Clock className="w-8 h-8 text-yellow-400" />
            <span className="text-xs text-yellow-400">+5% this week</span>
          </div>
          <p className="text-2xl font-bold text-yellow-400">2.8%</p>
          <p className="text-sm text-slate-400 mt-1">Late Rate</p>
        </div>

        <div className="p-5 bg-gradient-to-br from-red-600/20 to-red-400/20 border border-red-500/30 rounded-xl">
          <div className="flex items-center justify-between mb-3">
            <XCircle className="w-8 h-8 text-red-400" />
            <span className="text-xs text-red-400">-1% this week</span>
          </div>
          <p className="text-2xl font-bold text-red-400">1.0%</p>
          <p className="text-sm text-slate-400 mt-1">Absence Rate</p>
        </div>

        <div className="p-5 bg-gradient-to-br from-blue-600/20 to-blue-400/20 border border-blue-500/30 rounded-xl">
          <div className="flex items-center justify-between mb-3">
            <Clock className="w-8 h-8 text-blue-400" />
            <span className="text-xs text-blue-400">127 employees</span>
          </div>
          <p className="text-2xl font-bold text-blue-400">5.2%</p>
          <p className="text-sm text-slate-400 mt-1">Overtime Rate</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
          <h2 className="text-xl font-semibold mb-6">Monthly Attendance Trends</h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={monthlyData}>
              <defs>
                <linearGradient id="presentGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="month" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip
                contentStyle={{ backgroundColor: "#1e293b", border: "1px solid #334155", borderRadius: "8px" }}
              />
              <Legend />
              <Area type="monotone" dataKey="present" stroke="#10b981" fillOpacity={1} fill="url(#presentGradient)" name="Present Days" />
              <Area type="monotone" dataKey="late" stroke="#f59e0b" fillOpacity={0.3} fill="#f59e0b" name="Late" />
              <Area type="monotone" dataKey="absent" stroke="#ef4444" fillOpacity={0.3} fill="#ef4444" name="Absent" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
          <h2 className="text-xl font-semibold mb-6">Department Rates</h2>
          <div className="space-y-4">
            {departmentData.map((dept) => (
              <div key={dept.dept}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-slate-400">{dept.dept}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold">{dept.rate}%</span>
                    {dept.trend === "up" && <TrendingUp className="w-4 h-4 text-green-400" />}
                  </div>
                </div>
                <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${
                      dept.rate >= 95 ? "bg-green-500" : dept.rate >= 90 ? "bg-yellow-500" : "bg-red-500"
                    }`}
                    style={{ width: `${dept.rate}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
          <h2 className="text-xl font-semibold mb-6">Check-in Pattern (Hourly)</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={hourlyPattern}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="hour" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip
                contentStyle={{ backgroundColor: "#1e293b", border: "1px solid #334155", borderRadius: "8px" }}
              />
              <Bar dataKey="checkins" fill="#3b82f6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
          <h2 className="text-xl font-semibold mb-6">Overtime Analysis</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="month" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip
                contentStyle={{ backgroundColor: "#1e293b", border: "1px solid #334155", borderRadius: "8px" }}
              />
              <Line type="monotone" dataKey="overtime" stroke="#8b5cf6" strokeWidth={3} dot={{ r: 6 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
          <h2 className="text-xl font-semibold mb-4">Top Performers (Attendance)</h2>
          <div className="space-y-3">
            {["Sarah Chen - 100%", "Mike Johnson - 100%", "Alice Wang - 98%", "Carol Davis - 97%", "Bob Smith - 96%"].map((perf, idx) => (
              <div key={idx} className="p-3 bg-slate-800/50 rounded-lg flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-lg font-bold text-slate-500">#{idx + 1}</span>
                  <span className="text-sm">{perf.split(" - ")[0]}</span>
                </div>
                <span className="text-sm font-bold text-green-400">{perf.split(" - ")[1]}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 bg-gradient-to-br from-purple-600/10 to-blue-600/10 border border-purple-500/30 rounded-xl">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="w-6 h-6 text-purple-400" />
            <h2 className="text-xl font-semibold">AI Insights</h2>
          </div>
          <div className="space-y-3">
            <div className="p-4 bg-slate-800/50 rounded-lg">
              <p className="text-sm font-medium mb-1">Attendance Pattern Anomaly</p>
              <p className="text-xs text-slate-400">15% increase in late arrivals on Mondays detected in Engineering</p>
              <button className="text-xs text-purple-400 mt-2">View Details</button>
            </div>
            <div className="p-4 bg-slate-800/50 rounded-lg">
              <p className="text-sm font-medium mb-1">Seasonal Prediction</p>
              <p className="text-xs text-slate-400">Expected 8% increase in sick leaves next week based on flu season data</p>
              <button className="text-xs text-purple-400 mt-2">Prepare Backup</button>
            </div>
            <div className="p-4 bg-slate-800/50 rounded-lg">
              <p className="text-sm font-medium mb-1">Optimization Opportunity</p>
              <p className="text-xs text-slate-400">Flexible shift timing could reduce late rate by 20%</p>
              <button className="text-xs text-purple-400 mt-2">Apply Recommendation</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
