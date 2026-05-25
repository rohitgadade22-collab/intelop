import { useState, useEffect } from "react";
import { Activity, Zap, AlertTriangle, CheckCircle, Clock } from "lucide-react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const endpoints = [
  { id: 1, path: "/api/v1/employees", method: "GET", requests: 12847, latency: 45, errors: 12, uptime: 99.9, status: "healthy" },
  { id: 2, path: "/api/v1/attendance", method: "POST", requests: 8934, latency: 82, errors: 34, uptime: 99.6, status: "healthy" },
  { id: 3, path: "/api/v1/tickets", method: "GET", requests: 15621, latency: 156, errors: 234, uptime: 98.5, status: "warning" },
  { id: 4, path: "/api/v1/auth/login", method: "POST", requests: 4521, latency: 234, errors: 567, uptime: 87.4, status: "critical" },
  { id: 5, path: "/api/v1/reports", method: "GET", requests: 3245, latency: 67, errors: 8, uptime: 99.7, status: "healthy" },
];

export function APIMonitoring() {
  const [liveRequests, setLiveRequests] = useState([
    { time: "00:00", requests: 1200 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveRequests((prev) => {
        const newPoint = {
          time: new Date().toLocaleTimeString(),
          requests: Math.floor(Math.random() * 2000) + 1000,
        };
        return [...prev.slice(-20), newPoint];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const totalRequests = endpoints.reduce((sum, e) => sum + e.requests, 0);
  const avgLatency = Math.round(endpoints.reduce((sum, e) => sum + e.latency, 0) / endpoints.length);
  const totalErrors = endpoints.reduce((sum, e) => sum + e.errors, 0);
  const errorRate = ((totalErrors / totalRequests) * 100).toFixed(2);

  const latencyData = [
    { time: "00:00", latency: 45 },
    { time: "04:00", latency: 38 },
    { time: "08:00", latency: 67 },
    { time: "12:00", latency: 89 },
    { time: "16:00", latency: 72 },
    { time: "20:00", latency: 53 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">API Monitoring</h1>
        <p className="text-slate-400 mt-1">Track API performance and health</p>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <div className="p-5 bg-slate-800/30 border border-slate-700/50 rounded-xl">
          <div className="flex items-center justify-between mb-3">
            <Zap className="w-8 h-8 text-blue-400" />
            <Activity className="w-5 h-5 text-blue-400" />
          </div>
          <p className="text-2xl font-bold">{(totalRequests / 1000).toFixed(1)}K</p>
          <p className="text-sm text-slate-400 mt-1">Total Requests</p>
        </div>

        <div className="p-5 bg-gradient-to-br from-green-600/20 to-green-400/20 border border-green-500/30 rounded-xl">
          <div className="flex items-center justify-between mb-3">
            <Clock className="w-8 h-8 text-green-400" />
            <span className="text-xs text-green-400">avg</span>
          </div>
          <p className="text-2xl font-bold text-green-400">{avgLatency}ms</p>
          <p className="text-sm text-slate-400 mt-1">Avg Latency</p>
        </div>

        <div className="p-5 bg-gradient-to-br from-red-600/20 to-red-400/20 border border-red-500/30 rounded-xl">
          <div className="flex items-center justify-between mb-3">
            <AlertTriangle className="w-8 h-8 text-red-400" />
            <span className="text-xs text-red-400">{errorRate}%</span>
          </div>
          <p className="text-2xl font-bold text-red-400">{totalErrors}</p>
          <p className="text-sm text-slate-400 mt-1">Total Errors</p>
        </div>

        <div className="p-5 bg-gradient-to-br from-purple-600/20 to-purple-400/20 border border-purple-500/30 rounded-xl">
          <div className="flex items-center justify-between mb-3">
            <CheckCircle className="w-8 h-8 text-purple-400" />
            <span className="text-xs text-purple-400">healthy</span>
          </div>
          <p className="text-2xl font-bold text-purple-400">97.8%</p>
          <p className="text-sm text-slate-400 mt-1">Success Rate</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Live Request Volume</h2>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-xs text-slate-400">Real-time</span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={liveRequests}>
              <defs>
                <linearGradient id="requestGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="time" stroke="#94a3b8" hide />
              <YAxis stroke="#94a3b8" />
              <Tooltip
                contentStyle={{ backgroundColor: "#1e293b", border: "1px solid #334155", borderRadius: "8px" }}
              />
              <Area type="monotone" dataKey="requests" stroke="#3b82f6" fillOpacity={1} fill="url(#requestGradient)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
          <h2 className="text-xl font-semibold mb-6">Response Time Trend</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={latencyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="time" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip
                contentStyle={{ backgroundColor: "#1e293b", border: "1px solid #334155", borderRadius: "8px" }}
              />
              <Line type="monotone" dataKey="latency" stroke="#10b981" strokeWidth={2} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
        <h2 className="text-xl font-semibold mb-6">API Endpoints</h2>
        <div className="space-y-3">
          {endpoints.map((endpoint) => (
            <div
              key={endpoint.id}
              className={`p-5 bg-slate-800/50 border rounded-xl ${
                endpoint.status === "critical"
                  ? "border-red-500/30"
                  : endpoint.status === "warning"
                  ? "border-yellow-500/30"
                  : "border-slate-700/30"
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className={`px-2 py-1 rounded text-xs font-mono font-medium ${
                        endpoint.method === "GET"
                          ? "bg-blue-600/20 text-blue-400"
                          : "bg-green-600/20 text-green-400"
                      }`}
                    >
                      {endpoint.method}
                    </span>
                    <code className="text-sm text-slate-300">{endpoint.path}</code>
                    {endpoint.status === "critical" && (
                      <span className="px-2 py-1 bg-red-600/20 text-red-400 rounded text-xs font-medium border border-red-500/30">
                        CRITICAL
                      </span>
                    )}
                    {endpoint.status === "warning" && (
                      <span className="px-2 py-1 bg-yellow-600/20 text-yellow-400 rounded text-xs font-medium border border-yellow-500/30">
                        WARNING
                      </span>
                    )}
                  </div>
                  <div className="grid grid-cols-4 gap-4 text-sm">
                    <div>
                      <p className="text-xs text-slate-400 mb-1">Requests</p>
                      <p className="font-semibold">{endpoint.requests.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 mb-1">Avg Latency</p>
                      <p className={`font-semibold ${endpoint.latency > 100 ? "text-red-400" : "text-green-400"}`}>
                        {endpoint.latency}ms
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 mb-1">Errors</p>
                      <p className="font-semibold text-red-400">{endpoint.errors}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 mb-1">Uptime</p>
                      <p className={`font-semibold ${endpoint.uptime < 95 ? "text-red-400" : "text-green-400"}`}>
                        {endpoint.uptime}%
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <p className="text-xs text-slate-400 mb-1">Performance</p>
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${
                        endpoint.latency > 150 ? "bg-red-500" : endpoint.latency > 80 ? "bg-yellow-500" : "bg-green-500"
                      }`}
                      style={{ width: `${100 - (endpoint.latency / 250) * 100}%` }}
                    />
                  </div>
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-1">Reliability</p>
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500" style={{ width: `${endpoint.uptime}%` }} />
                  </div>
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-1">Error Rate</p>
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-red-500"
                      style={{ width: `${(endpoint.errors / endpoint.requests) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
          <h2 className="text-xl font-semibold mb-4">Top Slowest Endpoints</h2>
          <div className="space-y-3">
            {endpoints
              .sort((a, b) => b.latency - a.latency)
              .slice(0, 3)
              .map((endpoint, idx) => (
                <div key={idx} className="p-3 bg-slate-800/50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <code className="text-xs text-slate-300">{endpoint.path}</code>
                    <span className="text-sm font-bold text-red-400">{endpoint.latency}ms</span>
                  </div>
                  <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-red-500" style={{ width: `${(endpoint.latency / 250) * 100}%` }} />
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="p-6 bg-gradient-to-br from-purple-600/10 to-blue-600/10 border border-purple-500/30 rounded-xl">
          <h2 className="text-xl font-semibold mb-4">AI Recommendations</h2>
          <div className="space-y-3">
            <div className="p-4 bg-slate-800/50 rounded-lg">
              <p className="text-sm font-medium mb-2">Performance Optimization</p>
              <p className="text-xs text-slate-400">/api/v1/auth/login experiencing high latency. Implement caching to reduce by 60%</p>
              <button className="text-xs text-purple-400 mt-2">Apply Fix</button>
            </div>
            <div className="p-4 bg-slate-800/50 rounded-lg">
              <p className="text-sm font-medium mb-2">Error Rate Alert</p>
              <p className="text-xs text-slate-400">/api/v1/tickets has 1.5% error rate. Check database connection pool</p>
              <button className="text-xs text-purple-400 mt-2">Investigate</button>
            </div>
            <div className="p-4 bg-slate-800/50 rounded-lg">
              <p className="text-sm font-medium mb-2">Scale Recommendation</p>
              <p className="text-xs text-slate-400">Traffic increased 45%. Add 2 API servers to handle load</p>
              <button className="text-xs text-purple-400 mt-2">Scale Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
