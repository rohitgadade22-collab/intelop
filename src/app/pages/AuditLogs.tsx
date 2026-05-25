import { History, Search, Filter, Download, AlertCircle, CheckCircle, XCircle, Edit } from "lucide-react";

const logs = [
  { id: 1, timestamp: "2026-05-18 14:32:15", user: "Admin User", action: "User Created", resource: "user_1247", status: "success", ip: "192.168.1.100" },
  { id: 2, timestamp: "2026-05-18 14:28:43", user: "Sarah Chen", action: "Role Updated", resource: "hr_admin", status: "success", ip: "192.168.1.101" },
  { id: 3, timestamp: "2026-05-18 14:15:22", user: "Mike Johnson", action: "Login Failed", resource: "auth", status: "failed", ip: "192.168.1.102" },
  { id: 4, timestamp: "2026-05-18 13:45:10", user: "System", action: "Backup Completed", resource: "database", status: "success", ip: "internal" },
  { id: 5, timestamp: "2026-05-18 13:30:55", user: "Alice Wang", action: "Report Generated", resource: "attendance_report", status: "success", ip: "192.168.1.103" },
  { id: 6, timestamp: "2026-05-18 13:12:38", user: "Admin User", action: "Settings Changed", resource: "system_config", status: "success", ip: "192.168.1.100" },
  { id: 7, timestamp: "2026-05-18 12:58:27", user: "Bob Smith", action: "Ticket Created", resource: "ticket_2891", status: "success", ip: "192.168.1.104" },
  { id: 8, timestamp: "2026-05-18 12:45:16", user: "Unknown", action: "Unauthorized Access", resource: "admin_panel", status: "blocked", ip: "203.0.113.45" },
];

const activityStats = [
  { label: "Total Events", value: "12,847", color: "blue" },
  { label: "Success", value: "12,234", color: "green" },
  { label: "Failed", value: "234", color: "red" },
  { label: "Blocked", value: "379", color: "yellow" },
];

export function AuditLogs() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Audit Logs</h1>
          <p className="text-slate-400 mt-1">System activity and audit trail</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center gap-2 transition-colors">
          <Download className="w-5 h-5" />
          Export Logs
        </button>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {activityStats.map((stat, idx) => {
          const colorClasses = {
            blue: { bg: "bg-blue-600/20", text: "text-blue-400", border: "border-blue-500/30" },
            green: { bg: "bg-green-600/20", text: "text-green-400", border: "border-green-500/30" },
            red: { bg: "bg-red-600/20", text: "text-red-400", border: "border-red-500/30" },
            yellow: { bg: "bg-yellow-600/20", text: "text-yellow-400", border: "border-yellow-500/30" },
          }[stat.color];

          return (
            <div key={idx} className={`p-5 ${colorClasses.bg} border ${colorClasses.border} rounded-xl`}>
              <p className={`text-2xl font-bold ${colorClasses.text}`}>{stat.value}</p>
              <p className="text-sm text-slate-400 mt-1">{stat.label}</p>
            </div>
          );
        })}
      </div>

      <div className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
        <div className="flex items-center gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search logs by user, action, or resource..."
              className="w-full pl-10 pr-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 placeholder:text-slate-500"
            />
          </div>
          <button className="px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg flex items-center gap-2 hover:bg-slate-800 transition-colors">
            <Filter className="w-5 h-5" />
            Filter
          </button>
          <select className="px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg">
            <option>Last 24 hours</option>
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Custom range</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-800">
                <th className="text-left py-3 px-4 text-sm font-semibold text-slate-400">Timestamp</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-slate-400">User</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-slate-400">Action</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-slate-400">Resource</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-slate-400">IP Address</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-slate-400">Status</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((log) => (
                <tr key={log.id} className="border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-4 text-sm font-mono text-slate-400">{log.timestamp}</td>
                  <td className="py-4 px-4 text-sm font-medium">{log.user}</td>
                  <td className="py-4 px-4 text-sm">{log.action}</td>
                  <td className="py-4 px-4 text-sm font-mono text-blue-400">{log.resource}</td>
                  <td className="py-4 px-4 text-sm text-slate-400">{log.ip}</td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      {log.status === "success" && (
                        <>
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span className="text-xs text-green-400">Success</span>
                        </>
                      )}
                      {log.status === "failed" && (
                        <>
                          <XCircle className="w-4 h-4 text-red-400" />
                          <span className="text-xs text-red-400">Failed</span>
                        </>
                      )}
                      {log.status === "blocked" && (
                        <>
                          <AlertCircle className="w-4 h-4 text-yellow-400" />
                          <span className="text-xs text-yellow-400">Blocked</span>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-800">
          <p className="text-sm text-slate-400">Showing 1-8 of 12,847 logs</p>
          <div className="flex gap-2">
            <button className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 rounded hover:bg-slate-800 transition-colors text-sm">
              Previous
            </button>
            <button className="px-3 py-1 bg-blue-600 rounded text-sm">1</button>
            <button className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 rounded hover:bg-slate-800 transition-colors text-sm">
              2
            </button>
            <button className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 rounded hover:bg-slate-800 transition-colors text-sm">
              3
            </button>
            <button className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 rounded hover:bg-slate-800 transition-colors text-sm">
              Next
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
          <h2 className="text-xl font-semibold mb-4">Recent Critical Events</h2>
          <div className="space-y-3">
            {logs.filter(l => l.status !== "success").map((log) => (
              <div key={log.id} className="p-4 bg-slate-800/50 border border-red-500/30 rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-red-400" />
                    <span className="text-sm font-medium">{log.action}</span>
                  </div>
                  <span className="text-xs text-slate-500">{log.timestamp.split(" ")[1]}</span>
                </div>
                <p className="text-xs text-slate-400">User: {log.user}</p>
                <p className="text-xs text-slate-400">IP: {log.ip}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 bg-gradient-to-br from-purple-600/10 to-blue-600/10 border border-purple-500/30 rounded-xl">
          <h2 className="text-xl font-semibold mb-4">Security Insights</h2>
          <div className="space-y-3">
            <div className="p-4 bg-slate-800/50 rounded-lg">
              <p className="text-sm font-medium mb-2">Suspicious Activity Detected</p>
              <p className="text-xs text-slate-400">3 failed login attempts from IP 203.0.113.45 in the last hour</p>
              <button className="text-xs text-purple-400 mt-2">Block IP</button>
            </div>
            <div className="p-4 bg-slate-800/50 rounded-lg">
              <p className="text-sm font-medium mb-2">Unusual Access Pattern</p>
              <p className="text-xs text-slate-400">After-hours admin panel access detected</p>
              <button className="text-xs text-purple-400 mt-2">Investigate</button>
            </div>
            <div className="p-4 bg-slate-800/50 rounded-lg">
              <p className="text-sm font-medium mb-2">Compliance Alert</p>
              <p className="text-xs text-slate-400">12 sensitive data access events require review</p>
              <button className="text-xs text-purple-400 mt-2">Review Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
