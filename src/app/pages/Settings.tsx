import { Bell, Lock, Globe, Database, Mail, Palette, Shield, Zap } from "lucide-react";

export function Settings() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-slate-400 mt-1">System configuration and preferences</p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
              <Bell className="w-5 h-5 text-blue-400" />
            </div>
            <h2 className="text-lg font-semibold">Notifications</h2>
          </div>
          <div className="space-y-4">
            {[
              { label: "Email Notifications", enabled: true },
              { label: "Push Notifications", enabled: true },
              { label: "SMS Alerts", enabled: false },
              { label: "Slack Integration", enabled: true },
            ].map((setting, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <span className="text-sm text-slate-300">{setting.label}</span>
                <div className={`w-11 h-6 rounded-full transition-colors cursor-pointer ${
                  setting.enabled ? "bg-blue-600" : "bg-slate-700"
                }`}>
                  <div className={`w-4 h-4 bg-white rounded-full mt-1 transition-transform ${
                    setting.enabled ? "ml-6" : "ml-1"
                  }`} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center">
              <Lock className="w-5 h-5 text-purple-400" />
            </div>
            <h2 className="text-lg font-semibold">Security</h2>
          </div>
          <div className="space-y-4">
            {[
              { label: "Two-Factor Auth", enabled: true },
              { label: "Session Timeout", value: "30 min" },
              { label: "Password Policy", value: "Strong" },
              { label: "Login Attempts", value: "5 max" },
            ].map((setting, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <span className="text-sm text-slate-300">{setting.label}</span>
                {setting.enabled !== undefined ? (
                  <div className={`w-11 h-6 rounded-full transition-colors cursor-pointer ${
                    setting.enabled ? "bg-purple-600" : "bg-slate-700"
                  }`}>
                    <div className={`w-4 h-4 bg-white rounded-full mt-1 transition-transform ${
                      setting.enabled ? "ml-6" : "ml-1"
                    }`} />
                  </div>
                ) : (
                  <span className="text-sm text-purple-400">{setting.value}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center">
              <Globe className="w-5 h-5 text-green-400" />
            </div>
            <h2 className="text-lg font-semibold">Regional</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-slate-400 mb-2">Timezone</label>
              <select className="w-full px-3 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-sm">
                <option>UTC-05:00 (EST)</option>
                <option>UTC-08:00 (PST)</option>
                <option>UTC+00:00 (GMT)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-slate-400 mb-2">Language</label>
              <select className="w-full px-3 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-sm">
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-slate-400 mb-2">Date Format</label>
              <select className="w-full px-3 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-sm">
                <option>MM/DD/YYYY</option>
                <option>DD/MM/YYYY</option>
                <option>YYYY-MM-DD</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-orange-600/20 rounded-lg flex items-center justify-center">
              <Database className="w-5 h-5 text-orange-400" />
            </div>
            <h2 className="text-lg font-semibold">Database & Backup</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
              <div>
                <p className="text-sm font-medium">Automatic Backups</p>
                <p className="text-xs text-slate-400 mt-1">Daily at 2:00 AM</p>
              </div>
              <button className="px-3 py-1 bg-orange-600 hover:bg-orange-700 rounded text-xs transition-colors">
                Configure
              </button>
            </div>
            <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
              <div>
                <p className="text-sm font-medium">Last Backup</p>
                <p className="text-xs text-slate-400 mt-1">2 hours ago</p>
              </div>
              <button className="px-3 py-1 bg-slate-700 hover:bg-slate-600 rounded text-xs transition-colors">
                Restore
              </button>
            </div>
            <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
              <div>
                <p className="text-sm font-medium">Storage Used</p>
                <p className="text-xs text-slate-400 mt-1">234 GB / 500 GB</p>
              </div>
              <div className="w-24 h-2 bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full bg-orange-500" style={{ width: "47%" }} />
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-cyan-600/20 rounded-lg flex items-center justify-center">
              <Mail className="w-5 h-5 text-cyan-400" />
            </div>
            <h2 className="text-lg font-semibold">Email Configuration</h2>
          </div>
          <div className="space-y-3">
            <div>
              <label className="block text-sm text-slate-400 mb-2">SMTP Server</label>
              <input
                type="text"
                defaultValue="smtp.company.com"
                className="w-full px-3 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-sm"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm text-slate-400 mb-2">Port</label>
                <input
                  type="text"
                  defaultValue="587"
                  className="w-full px-3 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-sm"
                />
              </div>
              <div>
                <label className="block text-sm text-slate-400 mb-2">Encryption</label>
                <select className="w-full px-3 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-sm">
                  <option>TLS</option>
                  <option>SSL</option>
                  <option>None</option>
                </select>
              </div>
            </div>
            <button className="w-full px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-lg text-sm transition-colors">
              Test Connection
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-pink-600/20 rounded-lg flex items-center justify-center">
              <Palette className="w-5 h-5 text-pink-400" />
            </div>
            <h2 className="text-lg font-semibold">Appearance</h2>
          </div>
          <div className="space-y-3">
            <div className="flex gap-2">
              <div className="flex-1 h-16 bg-slate-950 border-2 border-blue-500 rounded-lg cursor-pointer" />
              <div className="flex-1 h-16 bg-white border border-slate-300 rounded-lg cursor-pointer" />
            </div>
            <p className="text-xs text-slate-400 text-center">Dark mode selected</p>
          </div>
        </div>

        <div className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-yellow-600/20 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-yellow-400" />
            </div>
            <h2 className="text-lg font-semibold">AI Settings</h2>
          </div>
          <div className="space-y-3">
            {[
              { label: "AI Predictions", enabled: true },
              { label: "Auto-Recommendations", enabled: true },
              { label: "Anomaly Detection", enabled: true },
            ].map((setting, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <span className="text-sm text-slate-300">{setting.label}</span>
                <div className={`w-11 h-6 rounded-full transition-colors cursor-pointer ${
                  setting.enabled ? "bg-yellow-600" : "bg-slate-700"
                }`}>
                  <div className={`w-4 h-4 bg-white rounded-full mt-1 transition-transform ${
                    setting.enabled ? "ml-6" : "ml-1"
                  }`} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-6 h-6 text-blue-400" />
            <h2 className="text-lg font-semibold">System Status</h2>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-400">Version</span>
              <span className="font-medium">v2.4.1</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-400">Uptime</span>
              <span className="font-medium text-green-400">99.9%</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-400">Last Update</span>
              <span className="font-medium">2 days ago</span>
            </div>
            <button className="w-full mt-3 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm transition-colors">
              Check for Updates
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-3">
        <button className="px-6 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors">
          Reset to Defaults
        </button>
        <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
          Save Changes
        </button>
      </div>
    </div>
  );
}
