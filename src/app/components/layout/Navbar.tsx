import { useState } from "react";
import { Search, Bell, Settings, User, ChevronDown, Building2, Sun, Moon } from "lucide-react";

export function Navbar() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const notifications = [
    { id: 1, text: "Server CPU usage above 80%", time: "2 min ago", type: "critical" },
    { id: 2, text: "New ticket assigned to you", time: "5 min ago", type: "info" },
    { id: 3, text: "AI detected attendance anomaly", time: "12 min ago", type: "warning" },
  ];

  return (
    <header className="h-16 bg-slate-900/50 backdrop-blur-xl border-b border-slate-800/50 flex items-center justify-between px-6">
      <div className="flex items-center gap-4 flex-1 max-w-2xl">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search employees, tickets, servers..."
            className="w-full pl-10 pr-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 placeholder:text-slate-500"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <button className="px-3 py-1.5 bg-slate-800/50 border border-slate-700/50 rounded-lg flex items-center gap-2 hover:bg-slate-800 transition-colors">
            <Building2 className="w-4 h-4" />
            <span className="text-sm">Acme Corp</span>
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 bg-green-600/20 border border-green-500/30 rounded-lg">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-xs font-medium text-green-400">All Systems Operational</span>
        </div>

        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
        >
          {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>

        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="p-2 hover:bg-slate-800 rounded-lg transition-colors relative"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
          </button>
          {showNotifications && (
            <div className="absolute right-0 top-12 w-80 bg-slate-800 border border-slate-700 rounded-lg shadow-xl z-50">
              <div className="p-4 border-b border-slate-700">
                <h3 className="font-semibold">Notifications</h3>
              </div>
              <div className="max-h-96 overflow-y-auto">
                {notifications.map((notif) => (
                  <div
                    key={notif.id}
                    className="p-4 border-b border-slate-700/50 hover:bg-slate-700/30 cursor-pointer"
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-2 h-2 rounded-full mt-1.5 ${
                          notif.type === "critical"
                            ? "bg-red-500"
                            : notif.type === "warning"
                            ? "bg-yellow-500"
                            : "bg-blue-500"
                        }`}
                      />
                      <div className="flex-1">
                        <p className="text-sm">{notif.text}</p>
                        <p className="text-xs text-slate-400 mt-1">{notif.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="relative">
          <button
            onClick={() => setShowProfile(!showProfile)}
            className="flex items-center gap-3 p-2 hover:bg-slate-800 rounded-lg transition-colors"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <User className="w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-sm font-medium">Admin User</p>
              <p className="text-xs text-slate-400">Super Admin</p>
            </div>
            <ChevronDown className="w-4 h-4" />
          </button>
          {showProfile && (
            <div className="absolute right-0 top-12 w-56 bg-slate-800 border border-slate-700 rounded-lg shadow-xl z-50">
              <div className="p-2">
                <button className="w-full px-3 py-2 text-left text-sm hover:bg-slate-700 rounded flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Profile
                </button>
                <button className="w-full px-3 py-2 text-left text-sm hover:bg-slate-700 rounded flex items-center gap-2">
                  <Settings className="w-4 h-4" />
                  Settings
                </button>
                <div className="border-t border-slate-700 my-2" />
                <button className="w-full px-3 py-2 text-left text-sm hover:bg-slate-700 rounded text-red-400">
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
