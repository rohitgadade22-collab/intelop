import { useState, useEffect } from "react";
import { Server, Cpu, HardDrive, Activity, AlertTriangle, CheckCircle } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const servers = [
  { id: 1, name: "web-server-01", region: "US-East", cpu: 45, memory: 62, disk: 58, status: "healthy", uptime: "99.9%" },
  { id: 2, name: "web-server-02", region: "US-West", cpu: 52, memory: 68, disk: 63, status: "healthy", uptime: "99.8%" },
  { id: 3, name: "db-server-01", region: "EU-Central", cpu: 87, memory: 82, disk: 71, status: "warning", uptime: "98.5%" },
  { id: 4, name: "api-server-01", region: "Asia-Pacific", cpu: 38, memory: 55, disk: 49, status: "healthy", uptime: "99.9%" },
  { id: 5, name: "cache-server-01", region: "US-East", cpu: 92, memory: 95, disk: 88, status: "critical", uptime: "97.2%" },
  { id: 6, name: "web-server-03", region: "US-West", cpu: 41, memory: 59, disk: 54, status: "healthy", uptime: "99.7%" },
];

export function ServerHealth() {
  const [liveData, setLiveData] = useState([
    { time: "00:00", cpu: 45, memory: 62 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveData((prev) => {
        const newPoint = {
          time: new Date().toLocaleTimeString(),
          cpu: Math.floor(Math.random() * 40) + 40,
          memory: Math.floor(Math.random() * 30) + 50,
        };
        return [...prev.slice(-20), newPoint];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const healthyCount = servers.filter(s => s.status === "healthy").length;
  const warningCount = servers.filter(s => s.status === "warning").length;
  const criticalCount = servers.filter(s => s.status === "critical").length;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Server Health</h1>
        <p className="text-slate-400 mt-1">Monitor server infrastructure health</p>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <div className="p-5 bg-slate-800/30 border border-slate-700/50 rounded-xl">
          <div className="flex items-center justify-between mb-3">
            <Server className="w-8 h-8 text-blue-400" />
            <span className="text-xs text-blue-400">{servers.length} total</span>
          </div>
          <p className="text-2xl font-bold">{healthyCount + warningCount + criticalCount}/{servers.length}</p>
          <p className="text-sm text-slate-400 mt-1">Servers Online</p>
        </div>

        <div className="p-5 bg-gradient-to-br from-green-600/20 to-green-400/20 border border-green-500/30 rounded-xl">
          <div className="flex items-center justify-between mb-3">
            <CheckCircle className="w-8 h-8 text-green-400" />
            <span className="text-xs text-green-400">{healthyCount} servers</span>
          </div>
          <p className="text-2xl font-bold text-green-400">{healthyCount}</p>
          <p className="text-sm text-slate-400 mt-1">Healthy</p>
        </div>

        <div className="p-5 bg-gradient-to-br from-yellow-600/20 to-yellow-400/20 border border-yellow-500/30 rounded-xl">
          <div className="flex items-center justify-between mb-3">
            <AlertTriangle className="w-8 h-8 text-yellow-400" />
            <span className="text-xs text-yellow-400">{warningCount} server</span>
          </div>
          <p className="text-2xl font-bold text-yellow-400">{warningCount}</p>
          <p className="text-sm text-slate-400 mt-1">Warning</p>
        </div>

        <div className="p-5 bg-gradient-to-br from-red-600/20 to-red-400/20 border border-red-500/30 rounded-xl">
          <div className="flex items-center justify-between mb-3">
            <AlertTriangle className="w-8 h-8 text-red-400" />
            <span className="text-xs text-red-400">{criticalCount} server</span>
          </div>
          <p className="text-2xl font-bold text-red-400">{criticalCount}</p>
          <p className="text-sm text-slate-400 mt-1">Critical</p>
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
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={liveData}>
              <defs>
                <linearGradient id="cpuLive" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="time" stroke="#94a3b8" hide />
              <YAxis stroke="#94a3b8" domain={[0, 100]} />
              <Tooltip
                contentStyle={{ backgroundColor: "#1e293b", border: "1px solid #334155", borderRadius: "8px" }}
              />
              <Area type="monotone" dataKey="cpu" stroke="#3b82f6" fillOpacity={1} fill="url(#cpuLive)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Live Memory Usage</h2>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
              <span className="text-xs text-slate-400">Real-time</span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={liveData}>
              <defs>
                <linearGradient id="memLive" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="time" stroke="#94a3b8" hide />
              <YAxis stroke="#94a3b8" domain={[0, 100]} />
              <Tooltip
                contentStyle={{ backgroundColor: "#1e293b", border: "1px solid #334155", borderRadius: "8px" }}
              />
              <Area type="monotone" dataKey="memory" stroke="#8b5cf6" fillOpacity={1} fill="url(#memLive)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
        <h2 className="text-xl font-semibold mb-6">Server Status</h2>
        <div className="grid grid-cols-2 gap-4">
          {servers.map((server) => (
            <div
              key={server.id}
              className={`p-5 bg-slate-800/50 border rounded-xl ${
                server.status === "critical"
                  ? "border-red-500/30"
                  : server.status === "warning"
                  ? "border-yellow-500/30"
                  : "border-slate-700/30"
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      server.status === "healthy"
                        ? "bg-green-400"
                        : server.status === "warning"
                        ? "bg-yellow-400"
                        : "bg-red-400"
                    } animate-pulse`}
                  />
                  <div>
                    <h3 className="font-semibold">{server.name}</h3>
                    <p className="text-xs text-slate-400">{server.region}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-slate-400">Uptime</p>
                  <p className="text-sm font-semibold text-green-400">{server.uptime}</p>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-slate-400" />
                      <span className="text-xs text-slate-400">CPU</span>
                    </div>
                    <span className={`text-xs font-medium ${server.cpu > 80 ? "text-red-400" : "text-green-400"}`}>
                      {server.cpu}%
                    </span>
                  </div>
                  <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
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
                    <div className="flex items-center gap-2">
                      <Activity className="w-4 h-4 text-slate-400" />
                      <span className="text-xs text-slate-400">Memory</span>
                    </div>
                    <span className={`text-xs font-medium ${server.memory > 80 ? "text-red-400" : "text-green-400"}`}>
                      {server.memory}%
                    </span>
                  </div>
                  <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${
                        server.memory > 80 ? "bg-red-500" : server.memory > 60 ? "bg-yellow-500" : "bg-green-500"
                      }`}
                      style={{ width: `${server.memory}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <HardDrive className="w-4 h-4 text-slate-400" />
                      <span className="text-xs text-slate-400">Disk</span>
                    </div>
                    <span className={`text-xs font-medium ${server.disk > 80 ? "text-red-400" : "text-green-400"}`}>
                      {server.disk}%
                    </span>
                  </div>
                  <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${
                        server.disk > 80 ? "bg-red-500" : server.disk > 60 ? "bg-yellow-500" : "bg-green-500"
                      }`}
                      style={{ width: `${server.disk}%` }}
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
