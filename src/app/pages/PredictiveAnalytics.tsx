import { TrendingUp, Target, AlertTriangle, Brain, Calendar, Activity } from "lucide-react";
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const attendancePrediction = [
  { week: "Week 1", actual: 847, predicted: 850 },
  { week: "Week 2", actual: 842, predicted: 845 },
  { week: "Week 3", actual: 851, predicted: 848 },
  { week: "Week 4", actual: null, predicted: 835 },
  { week: "Week 5", actual: null, predicted: 820 },
  { week: "Week 6", actual: null, predicted: 825 },
];

const ticketVolumeForecast = [
  { month: "Jan", actual: 145, predicted: 148 },
  { month: "Feb", actual: 167, predicted: 165 },
  { month: "Mar", actual: 134, predicted: 138 },
  { month: "Apr", actual: 156, predicted: 154 },
  { month: "May", actual: 142, predicted: 145 },
  { month: "Jun", actual: null, predicted: 178 },
  { month: "Jul", actual: null, predicted: 195 },
  { month: "Aug", actual: null, predicted: 210 },
];

const resourceDemand = [
  { day: "Mon", current: 820, forecasted: 850 },
  { day: "Tue", current: 835, forecasted: 860 },
  { day: "Wed", current: 842, forecasted: 870 },
  { day: "Thu", current: 838, forecasted: 865 },
  { day: "Fri", current: 847, forecasted: 880 },
];

const predictions = [
  {
    id: 1,
    title: "Attendance Decline Expected",
    forecast: "15% increase in sick leaves next week",
    confidence: 87,
    severity: "warning",
    category: "Workforce",
    timeline: "Next 7 days",
  },
  {
    id: 2,
    title: "Server Capacity Critical",
    forecast: "Server-03 failure predicted within 48 hours",
    confidence: 92,
    severity: "critical",
    category: "Infrastructure",
    timeline: "48 hours",
  },
  {
    id: 3,
    title: "Ticket Surge Incoming",
    forecast: "40% increase in tickets expected Monday",
    confidence: 78,
    severity: "info",
    category: "Operations",
    timeline: "Next Monday",
  },
  {
    id: 4,
    title: "Resource Shortage",
    forecast: "Support team understaffed for Q4 by 12%",
    confidence: 85,
    severity: "warning",
    category: "Workforce",
    timeline: "Q4 2026",
  },
];

export function PredictiveAnalytics() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Predictive Analytics
          </h1>
          <p className="text-slate-400 mt-1">Forecast future trends and patterns with AI</p>
        </div>
        <div className="flex items-center gap-3 px-4 py-2 bg-cyan-600/20 border border-cyan-500/30 rounded-lg">
          <Brain className="w-5 h-5 text-cyan-400 animate-pulse" />
          <span className="text-sm font-medium text-cyan-400">Forecasting Active</span>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <div className="p-5 bg-gradient-to-br from-cyan-600/20 to-cyan-400/20 border border-cyan-500/30 rounded-xl">
          <div className="flex items-center justify-between mb-3">
            <TrendingUp className="w-8 h-8 text-cyan-400" />
            <span className="text-xs text-cyan-400">active</span>
          </div>
          <p className="text-2xl font-bold text-cyan-400">24</p>
          <p className="text-sm text-slate-400 mt-1">Active Predictions</p>
        </div>

        <div className="p-5 bg-slate-800/30 border border-slate-700/50 rounded-xl">
          <div className="flex items-center justify-between mb-3">
            <Target className="w-8 h-8 text-green-400" />
            <span className="text-xs text-green-400">accuracy</span>
          </div>
          <p className="text-2xl font-bold text-green-400">91%</p>
          <p className="text-sm text-slate-400 mt-1">Model Accuracy</p>
        </div>

        <div className="p-5 bg-gradient-to-br from-red-600/20 to-red-400/20 border border-red-500/30 rounded-xl">
          <div className="flex items-center justify-between mb-3">
            <AlertTriangle className="w-8 h-8 text-red-400" />
            <span className="text-xs text-red-400">urgent</span>
          </div>
          <p className="text-2xl font-bold text-red-400">3</p>
          <p className="text-sm text-slate-400 mt-1">Critical Forecasts</p>
        </div>

        <div className="p-5 bg-slate-800/30 border border-slate-700/50 rounded-xl">
          <div className="flex items-center justify-between mb-3">
            <Calendar className="w-8 h-8 text-blue-400" />
            <span className="text-xs text-blue-400">range</span>
          </div>
          <p className="text-2xl font-bold">30 days</p>
          <p className="text-sm text-slate-400 mt-1">Forecast Horizon</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
          <h2 className="text-xl font-semibold mb-6">Attendance Prediction (6 Weeks)</h2>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={attendancePrediction}>
              <defs>
                <linearGradient id="actualGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="predictedGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="week" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" domain={[800, 900]} />
              <Tooltip
                contentStyle={{ backgroundColor: "#1e293b", border: "1px solid #334155", borderRadius: "8px" }}
              />
              <Legend />
              <Area type="monotone" dataKey="actual" stroke="#10b981" fillOpacity={1} fill="url(#actualGrad)" name="Actual" />
              <Area type="monotone" dataKey="predicted" stroke="#06b6d4" fillOpacity={1} fill="url(#predictedGrad)" name="Predicted" strokeDasharray="5 5" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
          <h2 className="text-xl font-semibold mb-6">Ticket Volume Forecast (8 Months)</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={ticketVolumeForecast}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="month" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip
                contentStyle={{ backgroundColor: "#1e293b", border: "1px solid #334155", borderRadius: "8px" }}
              />
              <Legend />
              <Line type="monotone" dataKey="actual" stroke="#10b981" strokeWidth={2} name="Actual" />
              <Line type="monotone" dataKey="predicted" stroke="#f59e0b" strokeWidth={2} name="Forecast" strokeDasharray="5 5" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
        <h2 className="text-xl font-semibold mb-6">Resource Demand Forecast</h2>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={resourceDemand}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="day" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip
              contentStyle={{ backgroundColor: "#1e293b", border: "1px solid #334155", borderRadius: "8px" }}
            />
            <Legend />
            <Bar dataKey="current" fill="#3b82f6" name="Current Demand" radius={[8, 8, 0, 0]} />
            <Bar dataKey="forecasted" fill="#8b5cf6" name="Forecasted Demand" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {predictions.map((pred) => (
          <div
            key={pred.id}
            className={`p-6 bg-slate-800/30 border rounded-xl ${
              pred.severity === "critical"
                ? "border-red-500/30"
                : pred.severity === "warning"
                ? "border-yellow-500/30"
                : "border-blue-500/30"
            }`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    pred.severity === "critical"
                      ? "bg-red-600/20"
                      : pred.severity === "warning"
                      ? "bg-yellow-600/20"
                      : "bg-blue-600/20"
                  }`}
                >
                  <AlertTriangle
                    className={`w-5 h-5 ${
                      pred.severity === "critical"
                        ? "text-red-400"
                        : pred.severity === "warning"
                        ? "text-yellow-400"
                        : "text-blue-400"
                    }`}
                  />
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-1">{pred.category}</p>
                  <h3 className="font-semibold text-lg">{pred.title}</h3>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-xs text-slate-400 mb-1">Confidence</span>
                <span className="text-sm font-bold text-cyan-400">{pred.confidence}%</span>
              </div>
            </div>

            <p className="text-sm text-slate-300 mb-4">{pred.forecast}</p>

            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="p-3 bg-slate-800/50 rounded-lg">
                <p className="text-xs text-slate-400 mb-1">Timeline</p>
                <p className="text-sm font-semibold">{pred.timeline}</p>
              </div>
              <div className="p-3 bg-slate-800/50 rounded-lg">
                <p className="text-xs text-slate-400 mb-1">Priority</p>
                <p
                  className={`text-sm font-semibold ${
                    pred.severity === "critical"
                      ? "text-red-400"
                      : pred.severity === "warning"
                      ? "text-yellow-400"
                      : "text-blue-400"
                  }`}
                >
                  {pred.severity.toUpperCase()}
                </p>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-slate-400">Prediction Confidence</span>
                <span className="text-xs font-medium text-cyan-400">{pred.confidence}%</span>
              </div>
              <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full bg-cyan-500" style={{ width: `${pred.confidence}%` }} />
              </div>
            </div>

            <button className="w-full px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-lg text-sm font-medium transition-colors">
              View Detailed Analysis
            </button>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
          <h2 className="text-xl font-semibold mb-4">Model Performance Metrics</h2>
          <div className="space-y-4">
            {[
              { metric: "Prediction Accuracy", value: "91%", trend: "up" },
              { metric: "Mean Absolute Error", value: "3.2%", trend: "down" },
              { metric: "Predictions Made", value: "1,247", trend: "up" },
              { metric: "Model Confidence", value: "87%", trend: "up" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Activity className="w-5 h-5 text-cyan-400" />
                  <span className="text-sm">{item.metric}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-cyan-400">{item.value}</span>
                  <TrendingUp
                    className={`w-4 h-4 ${
                      item.trend === "up" ? "text-green-400" : "text-red-400 rotate-180"
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 bg-gradient-to-br from-purple-600/10 to-blue-600/10 border border-purple-500/30 rounded-xl">
          <h2 className="text-xl font-semibold mb-4">Next Actions</h2>
          <div className="space-y-3">
            <div className="p-4 bg-slate-800/50 rounded-lg">
              <p className="text-sm font-medium mb-2">Prepare for Attendance Drop</p>
              <p className="text-xs text-slate-400">Schedule backup staff for next week based on sick leave prediction</p>
              <button className="text-xs text-cyan-400 mt-2">Schedule Now</button>
            </div>
            <div className="p-4 bg-slate-800/50 rounded-lg">
              <p className="text-sm font-medium mb-2">Server Maintenance Required</p>
              <p className="text-xs text-slate-400">Immediate action needed on server-03 to prevent predicted failure</p>
              <button className="text-xs text-cyan-400 mt-2">Create Ticket</button>
            </div>
            <div className="p-4 bg-slate-800/50 rounded-lg">
              <p className="text-sm font-medium mb-2">Resource Planning</p>
              <p className="text-xs text-slate-400">Allocate additional support for Monday's predicted ticket surge</p>
              <button className="text-xs text-cyan-400 mt-2">Plan Resources</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
