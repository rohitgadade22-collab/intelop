import { AlertTriangle, CheckCircle, Clock, TrendingUp, Target } from "lucide-react";
import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const slaMetrics = [
  { label: "Met SLA", value: 234, percentage: 94, color: "#10b981" },
  { label: "At Risk", value: 12, percentage: 5, color: "#f59e0b" },
  { label: "Breached", value: 3, percentage: 1, color: "#ef4444" },
];

const tickets = [
  { id: "TKT-2891", title: "Database timeout", priority: "Critical", sla: "2h", remaining: "45min", status: "at-risk", progress: 62 },
  { id: "TKT-2890", title: "Login issue", priority: "High", sla: "4h", remaining: "2h 15min", status: "on-track", progress: 43 },
  { id: "TKT-2889", title: "Report slow", priority: "Medium", sla: "8h", remaining: "30min", status: "at-risk", progress: 93 },
  { id: "TKT-2888", title: "Mobile crash", priority: "High", sla: "4h", remaining: "BREACHED", status: "breached", progress: 100 },
  { id: "TKT-2887", title: "Email notifications", priority: "Medium", sla: "8h", remaining: "5h 20min", status: "on-track", progress: 33 },
];

const trendData = [
  { week: "Week 1", met: 96, breached: 4 },
  { week: "Week 2", met: 94, breached: 6 },
  { week: "Week 3", met: 95, breached: 5 },
  { week: "Week 4", met: 97, breached: 3 },
  { week: "Week 5", met: 94, breached: 6 },
];

export function SLAMonitoring() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">SLA Monitoring</h1>
        <p className="text-slate-400 mt-1">Track service level agreement compliance</p>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <div className="p-5 bg-gradient-to-br from-green-600/20 to-green-400/20 border border-green-500/30 rounded-xl">
          <div className="flex items-center justify-between mb-3">
            <CheckCircle className="w-8 h-8 text-green-400" />
            <TrendingUp className="w-5 h-5 text-green-400" />
          </div>
          <p className="text-2xl font-bold text-green-400">94%</p>
          <p className="text-sm text-slate-400 mt-1">SLA Compliance</p>
        </div>

        <div className="p-5 bg-slate-800/30 border border-slate-700/50 rounded-xl">
          <div className="flex items-center justify-between mb-3">
            <Target className="w-8 h-8 text-blue-400" />
            <span className="text-xs text-blue-400">234 tickets</span>
          </div>
          <p className="text-2xl font-bold">234</p>
          <p className="text-sm text-slate-400 mt-1">Met SLA</p>
        </div>

        <div className="p-5 bg-gradient-to-br from-yellow-600/20 to-yellow-400/20 border border-yellow-500/30 rounded-xl">
          <div className="flex items-center justify-between mb-3">
            <AlertTriangle className="w-8 h-8 text-yellow-400" />
            <span className="text-xs text-yellow-400">12 tickets</span>
          </div>
          <p className="text-2xl font-bold text-yellow-400">12</p>
          <p className="text-sm text-slate-400 mt-1">At Risk</p>
        </div>

        <div className="p-5 bg-gradient-to-br from-red-600/20 to-red-400/20 border border-red-500/30 rounded-xl">
          <div className="flex items-center justify-between mb-3">
            <AlertTriangle className="w-8 h-8 text-red-400" />
            <span className="text-xs text-red-400">3 tickets</span>
          </div>
          <p className="text-2xl font-bold text-red-400">3</p>
          <p className="text-sm text-slate-400 mt-1">Breached</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
          <h2 className="text-xl font-semibold mb-6">SLA Distribution</h2>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={slaMetrics}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={5}
                dataKey="value"
              >
                {slaMetrics.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-1 gap-2 mt-4">
            {slaMetrics.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-sm text-slate-400">{item.label}</span>
                </div>
                <span className="text-sm font-semibold">{item.percentage}%</span>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-2 p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
          <h2 className="text-xl font-semibold mb-6">SLA Compliance Trend</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="week" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" domain={[0, 100]} />
              <Tooltip
                contentStyle={{ backgroundColor: "#1e293b", border: "1px solid #334155", borderRadius: "8px" }}
              />
              <Legend />
              <Line type="monotone" dataKey="met" stroke="#10b981" strokeWidth={2} name="Met SLA %" />
              <Line type="monotone" dataKey="breached" stroke="#ef4444" strokeWidth={2} name="Breached %" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
        <h2 className="text-xl font-semibold mb-6">Active Tickets - SLA Status</h2>
        <div className="space-y-3">
          {tickets.map((ticket) => (
            <div
              key={ticket.id}
              className={`p-5 bg-slate-800/50 border rounded-xl ${
                ticket.status === "breached"
                  ? "border-red-500/30"
                  : ticket.status === "at-risk"
                  ? "border-yellow-500/30"
                  : "border-slate-700/30"
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-sm text-slate-400">{ticket.id}</span>
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        ticket.priority === "Critical"
                          ? "bg-red-600/20 text-red-400 border border-red-500/30"
                          : ticket.priority === "High"
                          ? "bg-orange-600/20 text-orange-400 border border-orange-500/30"
                          : "bg-blue-600/20 text-blue-400 border border-blue-500/30"
                      }`}
                    >
                      {ticket.priority}
                    </span>
                    {ticket.status === "breached" && (
                      <span className="px-2 py-1 bg-red-600/20 text-red-400 rounded text-xs font-medium border border-red-500/30">
                        SLA BREACHED
                      </span>
                    )}
                    {ticket.status === "at-risk" && (
                      <span className="px-2 py-1 bg-yellow-600/20 text-yellow-400 rounded text-xs font-medium border border-yellow-500/30">
                        AT RISK
                      </span>
                    )}
                  </div>
                  <h3 className="font-semibold mb-2">{ticket.title}</h3>
                  <div className="flex items-center gap-6 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-slate-400" />
                      <span className="text-slate-400">SLA: {ticket.sla}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`font-medium ${
                          ticket.status === "breached"
                            ? "text-red-400"
                            : ticket.status === "at-risk"
                            ? "text-yellow-400"
                            : "text-green-400"
                        }`}
                      >
                        {ticket.remaining}
                      </span>
                      <span className="text-slate-500">remaining</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold">{ticket.progress}%</p>
                  <p className="text-xs text-slate-400">time elapsed</p>
                </div>
              </div>
              <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                <div
                  className={`h-full ${
                    ticket.status === "breached"
                      ? "bg-red-500"
                      : ticket.status === "at-risk"
                      ? "bg-yellow-500"
                      : "bg-green-500"
                  }`}
                  style={{ width: `${ticket.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
          <h2 className="text-xl font-semibold mb-4">SLA Targets by Priority</h2>
          <div className="space-y-4">
            {[
              { priority: "Critical", target: "2 hours", current: "1.8h avg", compliance: 92 },
              { priority: "High", target: "4 hours", current: "3.5h avg", compliance: 95 },
              { priority: "Medium", target: "8 hours", current: "6.2h avg", compliance: 97 },
              { priority: "Low", target: "24 hours", current: "18h avg", compliance: 98 },
            ].map((item, idx) => (
              <div key={idx} className="p-4 bg-slate-800/50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">{item.priority}</span>
                  <span className="text-sm text-green-400">{item.compliance}%</span>
                </div>
                <div className="flex items-center justify-between text-sm text-slate-400 mb-2">
                  <span>Target: {item.target}</span>
                  <span>Current: {item.current}</span>
                </div>
                <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500" style={{ width: `${item.compliance}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 bg-gradient-to-br from-purple-600/10 to-blue-600/10 border border-purple-500/30 rounded-xl">
          <h2 className="text-xl font-semibold mb-4">AI Recommendations</h2>
          <div className="space-y-3">
            <div className="p-4 bg-slate-800/50 rounded-lg">
              <p className="text-sm font-medium mb-2">Critical Ticket Alert</p>
              <p className="text-xs text-slate-400">TKT-2888 has breached SLA. Escalate to senior engineer immediately.</p>
              <button className="text-xs text-purple-400 mt-2">Escalate Now</button>
            </div>
            <div className="p-4 bg-slate-800/50 rounded-lg">
              <p className="text-sm font-medium mb-2">Resource Allocation</p>
              <p className="text-xs text-slate-400">Add 2 support engineers to reduce average resolution time by 25%</p>
              <button className="text-xs text-purple-400 mt-2">View Analysis</button>
            </div>
            <div className="p-4 bg-slate-800/50 rounded-lg">
              <p className="text-sm font-medium mb-2">Process Improvement</p>
              <p className="text-xs text-slate-400">Automate ticket routing to improve SLA compliance by 12%</p>
              <button className="text-xs text-purple-400 mt-2">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
