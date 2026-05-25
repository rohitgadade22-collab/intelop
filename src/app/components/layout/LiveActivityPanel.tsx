import { Activity, AlertCircle, CheckCircle, Clock, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";

export function LiveActivityPanel() {
  const [activities, setActivities] = useState([
    { id: 1, type: "check-in", user: "Sarah Chen", action: "checked in", time: "Just now", icon: CheckCircle, color: "text-green-400" },
    { id: 2, type: "ticket", user: "System", action: "created ticket #2891", time: "2 min ago", icon: AlertCircle, color: "text-orange-400" },
    { id: 3, type: "alert", user: "AI Agent", action: "detected anomaly in server-03", time: "3 min ago", icon: TrendingUp, color: "text-red-400" },
    { id: 4, type: "check-in", user: "Mike Johnson", action: "checked in", time: "5 min ago", icon: CheckCircle, color: "text-green-400" },
    { id: 5, type: "system", user: "Database", action: "backup completed", time: "8 min ago", icon: Clock, color: "text-blue-400" },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newActivity = {
        id: Date.now(),
        type: "check-in",
        user: ["Alice Wang", "Bob Smith", "Carol Davis", "David Lee"][Math.floor(Math.random() * 4)],
        action: ["checked in", "checked out", "started shift", "ended shift"][Math.floor(Math.random() * 4)],
        time: "Just now",
        icon: CheckCircle,
        color: "text-green-400",
      };
      setActivities((prev) => [newActivity, ...prev].slice(0, 10));
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-80 bg-slate-900/50 backdrop-blur-xl border-l border-slate-800/50 flex flex-col">
      <div className="p-4 border-b border-slate-800/50">
        <div className="flex items-center gap-2">
          <Activity className="w-5 h-5 text-blue-400" />
          <h2 className="font-semibold">Live Activity</h2>
          <div className="ml-auto w-2 h-2 bg-green-400 rounded-full animate-pulse" />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="p-3 bg-slate-800/30 border border-slate-700/30 rounded-lg hover:bg-slate-800/50 transition-all cursor-pointer"
          >
            <div className="flex items-start gap-3">
              <activity.icon className={`w-5 h-5 mt-0.5 ${activity.color}`} />
              <div className="flex-1 min-w-0">
                <p className="text-sm">
                  <span className="font-medium">{activity.user}</span>{" "}
                  <span className="text-slate-400">{activity.action}</span>
                </p>
                <p className="text-xs text-slate-500 mt-1">{activity.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 border-t border-slate-800/50">
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 bg-green-600/20 border border-green-500/30 rounded-lg">
            <p className="text-2xl font-bold text-green-400">847</p>
            <p className="text-xs text-slate-400 mt-1">Present</p>
          </div>
          <div className="p-3 bg-red-600/20 border border-red-500/30 rounded-lg">
            <p className="text-2xl font-bold text-red-400">23</p>
            <p className="text-xs text-slate-400 mt-1">Absent</p>
          </div>
        </div>
      </div>
    </div>
  );
}
