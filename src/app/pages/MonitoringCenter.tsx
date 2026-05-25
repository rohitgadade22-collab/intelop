import { useState, useEffect } from "react";
import { Server, Activity, AlertTriangle, CheckCircle, TrendingUp } from "lucide-react";
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const serverData = [
  { name: "server-01", status: "Healthy", cpu: 45, memory: 62, uptime: "99.9%", location: "US-East" },
  { name: "server-02", status: "Healthy", cpu: 52, memory: 68, uptime: "99.8%", location: "US-West" },
  { name: "server-03", status: "Warning", cpu: 87, memory: 82, uptime: "98.5%", location: "EU-Central" },
  { name: "server-04", status: "Healthy", cpu: 38, memory: 55, uptime: "99.9%", location: "Asia-Pacific" },
  { name: "server-05", status: "Critical", cpu: 92, memory: 95, uptime: "97.2%", location: "US-East" },
];

export function MonitoringCenter() {
  const [liveMetrics, setLiveMetrics] = useState([
    { time: "00:00", cpu: 45, memory: 62, requests: 1200 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveMetrics((prev) => {
        const newMetric = {
          time: new Date().toLocaleTimeString(),
          cpu: Math.floor(Math.random() * 40) + 40,
          memory: Math.floor(Math.random() * 30) + 50,
          requests: Math.floor(Math.random() * 2000) + 1000,
        };
        return [...prev.slice(-20), newMetric];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Monitoring Center</h1>
          <p className="text-slate-400 mt-1">Real-time infrastructure health and performance</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-green-600/20 border border-green-500/30 rounded-lg">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-sm font-medium text-green-400">All Systems Operational</span>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <div className="p-5 bg-slate-800/30 border border-slate-700/50 rounded-xl">
          <div className="flex items-center justify-between mb-3">
            <Server className="w-8 h-8 text-blue-400" />
            <div className="text-right">
              <p className="text-2xl font-bold">48/52</p>
              <p className="text-sm text-slate-400">Servers Online</p>
            </div>
          </div>
          <p className="text-xs text-blue-400">92.3% uptime</p>
        </div>

        <div className="p-5 bg-slate-800/30 border border-slate-700/50 rounded-xl">
          <div className="flex items-center justify-between mb-3">
            <Activity className="w-8 h-8 text-green-400" />
            <div className="text-right">
              <p className="text-2xl font-bold">3.2K</p>
              <p className="text-sm text-slate-400">Requests/sec</p>
            </div>
          </div>
          <p className="text-xs text-green-400">+15% from avg</p>
        </div>

        <div className="p-5 bg-slate-800/30 border border-yellow-500/30 rounded-xl">
          <div className="flex items-center justify-between mb-3">
            <AlertTriangle className="w-8 h-8 text-yellow-400" />
            <div className="text-right">
              <p className="text-2xl font-bold text-yellow-400">3</p>
              <p className="text-sm text-slate-400">Warnings</p>
            </div>
          </div>
          <p className="text-xs text-yellow-400">Needs attention</p>
        </div>

        <div className="p-5 bg-slate-800/30 border border-red-500/30 rounded-xl">
          <div className="flex items-center justify-between mb-3">
            <AlertTriangle className="w-8 h-8 text-red-400" />
            <div className="text-right">
              <p className="text-2xl font-bold text-red-400">1</p>
              <p className="text-sm text-slate-400">Critical Alert</p>
            </div>
          </div>
          <p className="text-xs text-red-400">Immediate action</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Live CPU Usage</h2>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-xs text-slate-400">Real-time</span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={liveMetrics}>
              <defs>
                <linearGradient id="cpuGradient" x1="0" y1="0" x2="0" y2="1">
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
              <Area type="monotone" dataKey="cpu" stroke="#3b82f6" fillOpacity={1} fill="url(#cpuGradient)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Memory Usage</h2>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
              <span className="text-xs text-slate-400">Real-time</span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={liveMetrics}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="time" stroke="#94a3b8" hide />
              <YAxis stroke="#94a3b8" />
              <Tooltip
                contentStyle={{ backgroundColor: "#1e293b", border: "1px solid #334155", borderRadius: "8px" }}
              />
              <Line type="monotone" dataKey="memory" stroke="#8b5cf6" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
        <h2 className="text-xl font-semibold mb-6">Server Health Status</h2>
        <div className="space-y-4">
          {serverData.map((server) => (
            <div
              key={server.name}
              className="p-5 bg-slate-800/50 border border-slate-700/30 rounded-xl hover:bg-slate-700/50 transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      server.status === "Healthy"
                        ? "bg-green-400"
                        : server.status === "Warning"
                        ? "bg-yellow-400"
                        : "bg-red-400"
                    } animate-pulse`}
                  />
                  <div>
                    <h3 className="font-semibold">{server.name}</h3>
                    <p className="text-sm text-slate-400">{server.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <p className="text-sm text-slate-400">CPU</p>
                    <p className={`font-semibold ${server.cpu > 80 ? "text-red-400" : "text-green-400"}`}>
                      {server.cpu}%
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-slate-400">Memory</p>
                    <p className={`font-semibold ${server.memory > 80 ? "text-red-400" : "text-green-400"}`}>
                      {server.memory}%
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-slate-400">Uptime</p>
                    <p className="font-semibold text-blue-400">{server.uptime}</p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded text-xs font-medium ${
                      server.status === "Healthy"
                        ? "bg-green-600/20 text-green-400 border border-green-500/30"
                        : server.status === "Warning"
                        ? "bg-yellow-600/20 text-yellow-400 border border-yellow-500/30"
                        : "bg-red-600/20 text-red-400 border border-red-500/30"
                    }`}
                  >
                    {server.status}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-slate-400">CPU Usage</span>
                    <span className="text-xs font-medium">{server.cpu}%</span>
                  </div>
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${
                        server.cpu > 80 ? "bg-red-500" : server.cpu > 60 ? "bg-yellow-500" : "bg-green-500"
                      }`}
                      style={{ width: `${server.cpu}%` }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-slate-400">Memory Usage</span>
                    <span className="text-xs font-medium">{server.memory}%</span>
                  </div>
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${
                        server.memory > 80 ? "bg-red-500" : server.memory > 60 ? "bg-yellow-500" : "bg-green-500"
                      }`}
                      style={{ width: `${server.memory}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
