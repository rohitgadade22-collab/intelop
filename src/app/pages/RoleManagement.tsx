import { useState } from "react";
import { Shield, Plus, Edit, Trash2, Check, X } from "lucide-react";

const roles = [
  { id: 1, name: "Super Admin", users: 5, description: "Full system access", color: "red" },
  { id: 2, name: "HR Admin", users: 12, description: "Human resources management", color: "blue" },
  { id: 3, name: "IT Admin", users: 8, description: "IT and infrastructure management", color: "purple" },
  { id: 4, name: "Manager", users: 45, description: "Team and department management", color: "green" },
  { id: 5, name: "Employee", users: 1177, description: "Standard employee access", color: "slate" },
];

const permissions = [
  { module: "Dashboard", view: true, create: true, edit: true, delete: true },
  { module: "Employees", view: true, create: true, edit: true, delete: false },
  { module: "Attendance", view: true, create: true, edit: true, delete: false },
  { module: "Tickets", view: true, create: true, edit: true, delete: true },
  { module: "Monitoring", view: true, create: false, edit: false, delete: false },
  { module: "AI Insights", view: true, create: false, edit: false, delete: false },
  { module: "Reports", view: true, create: true, edit: false, delete: false },
  { module: "Settings", view: false, create: false, edit: false, delete: false },
];

export function RoleManagement() {
  const [selectedRole, setSelectedRole] = useState(roles[0]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Role Management</h1>
          <p className="text-slate-400 mt-1">Define roles and permissions</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center gap-2 transition-colors">
          <Plus className="w-5 h-5" />
          Create Role
        </button>
      </div>

      <div className="grid grid-cols-5 gap-4">
        {roles.map((role) => (
          <div
            key={role.id}
            onClick={() => setSelectedRole(role)}
            className={`p-5 bg-slate-800/30 border rounded-xl cursor-pointer transition-all ${
              selectedRole.id === role.id
                ? "border-blue-500 bg-blue-600/10"
                : "border-slate-700/50 hover:border-slate-600"
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <Shield className={`w-6 h-6 text-${role.color}-400`} />
              <span className="text-xs text-slate-500">{role.users} users</span>
            </div>
            <h3 className="font-semibold mb-1">{role.name}</h3>
            <p className="text-xs text-slate-400">{role.description}</p>
          </div>
        ))}
      </div>

      <div className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold">{selectedRole.name} Permissions</h2>
            <p className="text-sm text-slate-400 mt-1">Configure module access and permissions</p>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm transition-colors">
              Save Changes
            </button>
            <button className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-sm transition-colors">
              <Edit className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-800">
                <th className="text-left py-3 px-4 text-sm font-semibold text-slate-400">Module</th>
                <th className="text-center py-3 px-4 text-sm font-semibold text-slate-400">View</th>
                <th className="text-center py-3 px-4 text-sm font-semibold text-slate-400">Create</th>
                <th className="text-center py-3 px-4 text-sm font-semibold text-slate-400">Edit</th>
                <th className="text-center py-3 px-4 text-sm font-semibold text-slate-400">Delete</th>
              </tr>
            </thead>
            <tbody>
              {permissions.map((perm, idx) => (
                <tr key={idx} className="border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-4 font-medium">{perm.module}</td>
                  <td className="py-4 px-4 text-center">
                    {perm.view ? (
                      <Check className="w-5 h-5 text-green-400 mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-red-400 mx-auto" />
                    )}
                  </td>
                  <td className="py-4 px-4 text-center">
                    {perm.create ? (
                      <Check className="w-5 h-5 text-green-400 mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-red-400 mx-auto" />
                    )}
                  </td>
                  <td className="py-4 px-4 text-center">
                    {perm.edit ? (
                      <Check className="w-5 h-5 text-green-400 mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-red-400 mx-auto" />
                    )}
                  </td>
                  <td className="py-4 px-4 text-center">
                    {perm.delete ? (
                      <Check className="w-5 h-5 text-green-400 mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-red-400 mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
          <h2 className="text-xl font-semibold mb-4">Role Assignment</h2>
          <div className="space-y-3">
            {["Sarah Chen - HR Admin", "Mike Johnson - IT Admin", "Alice Wang - Manager"].map((assignment, idx) => (
              <div key={idx} className="p-3 bg-slate-800/50 rounded-lg flex items-center justify-between">
                <span className="text-sm">{assignment}</span>
                <button className="text-xs text-blue-400 hover:text-blue-300">Change Role</button>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <button className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-left transition-colors">
              <p className="font-medium">Clone Role</p>
              <p className="text-xs text-blue-200 mt-1">Duplicate existing role</p>
            </button>
            <button className="w-full px-4 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg text-left transition-colors">
              <p className="font-medium">Export Permissions</p>
              <p className="text-xs text-slate-400 mt-1">Download as CSV</p>
            </button>
            <button className="w-full px-4 py-3 bg-red-600/20 hover:bg-red-600/30 rounded-lg text-left transition-colors border border-red-500/30">
              <p className="font-medium text-red-400">Delete Role</p>
              <p className="text-xs text-red-300 mt-1">Remove role permanently</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
