import { useState } from "react";
import { Plus, Search, Filter, Download, Edit, Trash2, Eye, Shield, UserCircle } from "lucide-react";

const users = [
  { id: 1, name: "Admin User", email: "admin@company.com", role: "Super Admin", status: "Active", lastLogin: "2 min ago", permissions: "Full Access" },
  { id: 2, name: "Sarah Chen", email: "sarah.chen@company.com", role: "HR Admin", status: "Active", lastLogin: "1 hour ago", permissions: "HR Module" },
  { id: 3, name: "Mike Johnson", email: "mike.j@company.com", role: "IT Admin", status: "Active", lastLogin: "3 hours ago", permissions: "IT, Monitoring" },
  { id: 4, name: "Alice Wang", email: "alice.w@company.com", role: "Manager", status: "Active", lastLogin: "5 hours ago", permissions: "View Only" },
  { id: 5, name: "Bob Smith", email: "bob.s@company.com", role: "Employee", status: "Inactive", lastLogin: "2 days ago", permissions: "Self Service" },
];

export function UserManagement() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">User Management</h1>
          <p className="text-slate-400 mt-1">Manage system users and access control</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center gap-2 transition-colors"
        >
          <Plus className="w-5 h-5" />
          Add User
        </button>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <div className="p-5 bg-slate-800/30 border border-slate-700/50 rounded-xl">
          <p className="text-2xl font-bold">1,247</p>
          <p className="text-sm text-slate-400 mt-1">Total Users</p>
        </div>
        <div className="p-5 bg-slate-800/30 border border-green-500/30 rounded-xl">
          <p className="text-2xl font-bold text-green-400">1,234</p>
          <p className="text-sm text-slate-400 mt-1">Active Users</p>
        </div>
        <div className="p-5 bg-slate-800/30 border border-yellow-500/30 rounded-xl">
          <p className="text-2xl font-bold text-yellow-400">13</p>
          <p className="text-sm text-slate-400 mt-1">Inactive</p>
        </div>
        <div className="p-5 bg-slate-800/30 border border-blue-500/30 rounded-xl">
          <p className="text-2xl font-bold text-blue-400">5</p>
          <p className="text-sm text-slate-400 mt-1">Admin Roles</p>
        </div>
      </div>

      <div className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
        <div className="flex items-center gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search users by name, email, or role..."
              className="w-full pl-10 pr-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 placeholder:text-slate-500"
            />
          </div>
          <button className="px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg flex items-center gap-2 hover:bg-slate-800 transition-colors">
            <Filter className="w-5 h-5" />
            Filter
          </button>
          <button className="px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg flex items-center gap-2 hover:bg-slate-800 transition-colors">
            <Download className="w-5 h-5" />
            Export
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-800">
                <th className="text-left py-3 px-4 text-sm font-semibold text-slate-400">User</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-slate-400">Role</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-slate-400">Permissions</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-slate-400">Last Login</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-slate-400">Status</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-slate-400">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                        <UserCircle className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-medium">{user.name}</p>
                        <p className="text-sm text-slate-400">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className="px-2 py-1 bg-purple-600/20 text-purple-400 rounded text-xs font-medium">
                      {user.role}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-sm text-slate-400">{user.permissions}</td>
                  <td className="py-4 px-4 text-sm">{user.lastLogin}</td>
                  <td className="py-4 px-4">
                    <span
                      className={`inline-flex px-2 py-1 rounded text-xs font-medium ${
                        user.status === "Active"
                          ? "bg-green-600/20 text-green-400 border border-green-500/30"
                          : "bg-red-600/20 text-red-400 border border-red-500/30"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 hover:bg-slate-700 rounded-lg transition-colors">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 hover:bg-slate-700 rounded-lg transition-colors">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 hover:bg-red-900/50 rounded-lg transition-colors text-red-400">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-3">
            {[
              { user: "Admin User", action: "Created new user account", time: "5 min ago" },
              { user: "Sarah Chen", action: "Updated role permissions", time: "1 hour ago" },
              { user: "Mike Johnson", action: "Deactivated user account", time: "2 hours ago" },
            ].map((activity, idx) => (
              <div key={idx} className="p-3 bg-slate-800/50 rounded-lg flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">{activity.user}</p>
                  <p className="text-xs text-slate-400">{activity.action}</p>
                </div>
                <span className="text-xs text-slate-500">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 bg-gradient-to-br from-purple-600/10 to-blue-600/10 border border-purple-500/30 rounded-xl">
          <div className="flex items-center gap-2 mb-4">
            <Shield className="w-6 h-6 text-purple-400" />
            <h2 className="text-xl font-semibold">Security Insights</h2>
          </div>
          <div className="space-y-3">
            <div className="p-4 bg-slate-800/50 rounded-lg">
              <p className="text-sm">3 users haven't logged in for 30+ days</p>
              <button className="text-xs text-purple-400 mt-2">Review Inactive Users</button>
            </div>
            <div className="p-4 bg-slate-800/50 rounded-lg">
              <p className="text-sm">2 failed login attempts detected</p>
              <button className="text-xs text-purple-400 mt-2">View Security Log</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
