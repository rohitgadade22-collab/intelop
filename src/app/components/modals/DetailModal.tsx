import { X, TrendingUp, Clock, User, AlertCircle } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface DetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: any;
}

export function DetailModal({ isOpen, onClose, data }: DetailModalProps) {
  if (!isOpen) return null;

  const mockTrendData = [
    { time: "Mon", value: 820 },
    { time: "Tue", value: 835 },
    { time: "Wed", value: 842 },
    { time: "Thu", value: 838 },
    { time: "Fri", value: 847 },
  ];

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-6">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl">
        <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-gradient-to-r from-blue-600/20 to-purple-600/20">
          <div className="flex items-center gap-4">
            {data.type === "kpi" && (
              <>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <data.data.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{data.data.label}</h2>
                  <p className="text-slate-400">Detailed analytics and insights</p>
                </div>
              </>
            )}
            {data.type === "ticket" && (
              <div>
                <h2 className="text-2xl font-bold">{data.data.id}</h2>
                <p className="text-slate-400">{data.data.title}</p>
              </div>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-100px)]">
          {data.type === "kpi" && (
            <div className="space-y-6">
              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 bg-slate-800/50 border border-slate-700/50 rounded-xl">
                  <p className="text-sm text-slate-400 mb-1">Current Value</p>
                  <p className="text-3xl font-bold">{data.data.value}</p>
                </div>
                <div className="p-4 bg-slate-800/50 border border-slate-700/50 rounded-xl">
                  <p className="text-sm text-slate-400 mb-1">Change</p>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-400" />
                    <p className="text-3xl font-bold text-green-400">{data.data.change}</p>
                  </div>
                </div>
                <div className="p-4 bg-slate-800/50 border border-slate-700/50 rounded-xl">
                  <p className="text-sm text-slate-400 mb-1">Target</p>
                  <p className="text-3xl font-bold">950</p>
                </div>
              </div>

              <div className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
                <h3 className="text-lg font-semibold mb-4">7-Day Trend</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <AreaChart data={mockTrendData}>
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis dataKey="time" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip
                      contentStyle={{ backgroundColor: "#1e293b", border: "1px solid #334155", borderRadius: "8px" }}
                    />
                    <Area type="monotone" dataKey="value" stroke="#3b82f6" fillOpacity={1} fill="url(#colorValue)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <div className="p-6 bg-gradient-to-br from-purple-600/10 to-blue-600/10 border border-purple-500/30 rounded-xl">
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-purple-400" />
                  AI Recommendations
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2" />
                    <span>Schedule additional shifts during peak hours to maintain optimal coverage</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2" />
                    <span>Consider implementing flexible work arrangements for better retention</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2" />
                    <span>Review attendance policies with HR for potential improvements</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {data.type === "ticket" && (
            <div className="space-y-6">
              <div className="grid grid-cols-4 gap-4">
                <div className="p-4 bg-slate-800/50 border border-slate-700/50 rounded-xl">
                  <p className="text-sm text-slate-400 mb-1">Priority</p>
                  <span className={`inline-block px-3 py-1 rounded text-sm font-medium ${
                    data.data.priority === "Critical"
                      ? "bg-red-600/20 text-red-400 border border-red-500/30"
                      : "bg-orange-600/20 text-orange-400 border border-orange-500/30"
                  }`}>
                    {data.data.priority}
                  </span>
                </div>
                <div className="p-4 bg-slate-800/50 border border-slate-700/50 rounded-xl">
                  <p className="text-sm text-slate-400 mb-1">Status</p>
                  <span className="inline-block px-3 py-1 rounded text-sm font-medium bg-blue-600/20 text-blue-400">
                    {data.data.status}
                  </span>
                </div>
                <div className="p-4 bg-slate-800/50 border border-slate-700/50 rounded-xl">
                  <p className="text-sm text-slate-400 mb-1">Assignee</p>
                  <p className="text-sm font-medium flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {data.data.assignee}
                  </p>
                </div>
                <div className="p-4 bg-slate-800/50 border border-slate-700/50 rounded-xl">
                  <p className="text-sm text-slate-400 mb-1">Created</p>
                  <p className="text-sm font-medium flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {data.data.time}
                  </p>
                </div>
              </div>

              <div className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">Description</h3>
                <p className="text-sm text-slate-300">
                  {data.data.title}. This issue requires immediate attention from the technical team.
                  Users are experiencing connection timeouts when attempting to access the database.
                  The problem appears to be related to connection pool saturation during peak hours.
                </p>
              </div>

              <div className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
                <h3 className="text-lg font-semibold mb-4">Activity Timeline</h3>
                <div className="space-y-4">
                  {[
                    { action: "Ticket created", user: "System", time: data.data.time },
                    { action: "Assigned to " + data.data.assignee, user: "Admin", time: "1 min after creation" },
                    { action: "Status changed to In Progress", user: data.data.assignee, time: "5 min after assignment" },
                  ].map((activity, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2" />
                      <div className="flex-1">
                        <p className="text-sm">{activity.action}</p>
                        <p className="text-xs text-slate-400 mt-1">
                          by {activity.user} • {activity.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <button className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors">
                  Update Status
                </button>
                <button className="flex-1 px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg font-medium transition-colors">
                  Reassign
                </button>
                <button className="flex-1 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg font-medium transition-colors">
                  Resolve
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
