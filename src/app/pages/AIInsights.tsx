import { Brain, TrendingUp, AlertTriangle, Lightbulb, Target, Zap } from "lucide-react";
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const predictions = [
  { title: "Attendance Decline Predicted", description: "AI predicts 15% increase in sick leaves next week based on seasonal flu patterns and historical data", severity: "warning", confidence: 87, action: "Prepare backup staff" },
  { title: "Server Capacity Alert", description: "Server-03 showing degradation signs. 85% probability of failure within 48 hours", severity: "critical", confidence: 92, action: "Schedule maintenance" },
  { title: "Ticket Surge Expected", description: "Expected 40% increase in support tickets on Monday after product release", severity: "info", confidence: 78, action: "Allocate resources" },
  { title: "Employee Turnover Risk", description: "3 employees in Sales department show high turnover risk indicators", severity: "warning", confidence: 81, action: "HR intervention needed" },
];

const aiRecommendations = [
  { category: "Operations", recommendation: "Implement staggered shift timing to reduce peak hour congestion", impact: "High", savings: "$12K/month" },
  { category: "Performance", recommendation: "Upgrade database connection pool size during 9-11 AM window", impact: "Critical", savings: "45% faster" },
  { category: "Workforce", recommendation: "Hire 2 additional support staff for upcoming Q4 season", impact: "Medium", savings: "30% SLA improvement" },
];

const predictionAccuracy = [
  { month: "Jan", accuracy: 78 },
  { month: "Feb", accuracy: 82 },
  { month: "Mar", accuracy: 85 },
  { month: "Apr", accuracy: 88 },
  { month: "May", accuracy: 91 },
];

const anomalyDetection = [
  { type: "Attendance", anomalies: 12, trend: "up" },
  { type: "Servers", anomalies: 5, trend: "down" },
  { type: "Tickets", anomalies: 18, trend: "up" },
  { type: "Performance", anomalies: 7, trend: "stable" },
];

export function AIInsights() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            AI Insights & Predictions
          </h1>
          <p className="text-slate-400 mt-1">Machine learning powered analytics and forecasting</p>
        </div>
        <div className="flex items-center gap-3 px-4 py-2 bg-purple-600/20 border border-purple-500/30 rounded-lg">
          <Brain className="w-5 h-5 text-purple-400 animate-pulse" />
          <span className="text-sm font-medium text-purple-400">AI Agent Active</span>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {anomalyDetection.map((item) => (
          <div key={item.type} className="p-5 bg-slate-800/30 border border-slate-700/50 rounded-xl">
            <div className="flex items-center justify-between mb-3">
              <AlertTriangle className={`w-6 h-6 ${item.trend === "up" ? "text-red-400" : "text-green-400"}`} />
              <TrendingUp className={`w-5 h-5 ${item.trend === "up" ? "text-red-400" : "text-green-400"}`} />
            </div>
            <p className="text-2xl font-bold">{item.anomalies}</p>
            <p className="text-sm text-slate-400 mt-1">{item.type} Anomalies</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 space-y-6">
          <div className="p-6 bg-gradient-to-br from-purple-600/10 to-blue-600/10 border border-purple-500/30 rounded-xl">
            <div className="flex items-center gap-3 mb-6">
              <Brain className="w-6 h-6 text-purple-400" />
              <h2 className="text-xl font-semibold">AI Predictions</h2>
              <div className="ml-auto w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
            </div>

            <div className="space-y-4">
              {predictions.map((prediction, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-slate-800/50 border border-slate-700/30 rounded-xl hover:bg-slate-700/50 transition-all"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          prediction.severity === "critical"
                            ? "bg-red-400"
                            : prediction.severity === "warning"
                            ? "bg-yellow-400"
                            : "bg-blue-400"
                        } animate-pulse`}
                      />
                      <h3 className="font-semibold text-lg">{prediction.title}</h3>
                    </div>
                    <div className="flex items-center gap-2">
                      <Target className="w-4 h-4 text-purple-400" />
                      <span className="text-sm font-medium text-purple-400">{prediction.confidence}% confident</span>
                    </div>
                  </div>
                  <p className="text-sm text-slate-300 mb-4">{prediction.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Lightbulb className="w-4 h-4 text-yellow-400" />
                      <span className="text-sm text-slate-400">Recommended: {prediction.action}</span>
                    </div>
                    <button className="px-3 py-1 bg-purple-600 hover:bg-purple-700 rounded text-sm font-medium transition-colors">
                      Take Action
                    </button>
                  </div>
                  <div className="mt-3">
                    <div className="h-1 bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-purple-500"
                        style={{ width: `${prediction.confidence}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
            <h2 className="text-xl font-semibold mb-6">AI Model Accuracy Over Time</h2>
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={predictionAccuracy}>
                <defs>
                  <linearGradient id="accuracyGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="month" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" domain={[0, 100]} />
                <Tooltip
                  contentStyle={{ backgroundColor: "#1e293b", border: "1px solid #334155", borderRadius: "8px" }}
                />
                <Area type="monotone" dataKey="accuracy" stroke="#8b5cf6" fillOpacity={1} fill="url(#accuracyGradient)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="space-y-6">
          <div className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
            <div className="flex items-center gap-2 mb-6">
              <Zap className="w-6 h-6 text-yellow-400" />
              <h2 className="text-xl font-semibold">Quick Recommendations</h2>
            </div>
            <div className="space-y-4">
              {aiRecommendations.map((rec, idx) => (
                <div key={idx} className="p-4 bg-slate-800/50 border border-slate-700/30 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-blue-400">{rec.category}</span>
                    <span
                      className={`px-2 py-0.5 rounded text-xs font-medium ${
                        rec.impact === "Critical"
                          ? "bg-red-600/20 text-red-400"
                          : rec.impact === "High"
                          ? "bg-orange-600/20 text-orange-400"
                          : "bg-blue-600/20 text-blue-400"
                      }`}
                    >
                      {rec.impact}
                    </span>
                  </div>
                  <p className="text-sm mb-3">{rec.recommendation}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-green-400">{rec.savings}</span>
                    <button className="text-xs text-blue-400 hover:text-blue-300">Apply</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl">
            <h3 className="font-semibold mb-4">AI Agent Status</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-400">Model Version</span>
                <span className="text-sm font-medium">v2.4.1</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-400">Last Training</span>
                <span className="text-sm font-medium">2 hours ago</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-400">Predictions Today</span>
                <span className="text-sm font-medium">127</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-400">Accuracy Rate</span>
                <span className="text-sm font-medium text-green-400">91%</span>
              </div>
            </div>
            <button className="w-full mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-medium transition-colors">
              Retrain Model
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
