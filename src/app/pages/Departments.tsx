import { useState } from "react";
import { Building2, Plus, Users, TrendingUp, Edit, Trash2 } from "lucide-react";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const departments = [
  { id: 1, name: "Engineering", employees: 245, manager: "Sarah Chen", budget: "$2.4M", performance: 92, color: "#3b82f6" },
  { id: 2, name: "Sales", employees: 156, manager: "Mike Johnson", budget: "$1.8M", performance: 88, color: "#10b981" },
  { id: 3, name: "Marketing", employees: 89, manager: "Alice Wang", budget: "$1.2M", performance: 85, color: "#f59e0b" },
  { id: 4, name: "HR", employees: 45, manager: "Carol Davis", budget: "$800K", performance: 90, color: "#8b5cf6" },
  { id: 5, name: "Support", employees: 178, manager: "Bob Smith", budget: "$1.5M", performance: 87, color: "#ec4899" },
  { id: 6, name: "Finance", employees: 67, manager: "David Lee", budget: "$1.1M", performance: 94, color: "#06b6d4" },
];

const performanceData = departments.map(d => ({ name: d.name, performance: d.performance }));

export function Departments() {
  const [selectedDept, setSelectedDept] = useState<any>(null);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Departments</h1>
          <p className="text-slate-400 mt-1">Manage organizational departments</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center gap-2 transition-colors">
          <Plus className="w-5 h-5" />
          Add Department
        </button>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <div className="p-5 bg-slate-800/30 border border-slate-700/50 rounded-xl">
          <p className="text-2xl font-bold">{departments.length}</p>
          <p className="text-sm text-slate-400 mt-1">Total Departments</p>
        </div>
        <div className="p-5 bg-slate-800/30 border border-slate-700/50 rounded-xl">
          <p className="text-2xl font-bold">{departments.reduce((sum, d) => sum + d.employees, 0)}</p>
          <p className="text-sm text-slate-400 mt-1">Total Employees</p>
        </div>
        <div className="p-5 bg-slate-800/30 border border-slate-700/50 rounded-xl">
          <p className="text-2xl font-bold">$8.8M</p>
          <p className="text-sm text-slate-400 mt-1">Total Budget</p>
        </div>
        <div className="p-5 bg-slate-800/30 border border-green-500/30 rounded-xl">
          <p className="text-2xl font-bold text-green-400">89%</p>
          <p className="text-sm text-slate-400 mt-1">Avg Performance</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {departments.map((dept) => (
          <div
            key={dept.id}
            onClick={() => setSelectedDept(dept)}
            className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl hover:border-blue-500/50 transition-all cursor-pointer group"
          >
            <div className="flex items-center justify-between mb-4">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: dept.color + "20", border: `1px solid ${dept.color}40` }}
              >
                <Building2 className="w-6 h-6" style={{ color: dept.color }} />
              </div>
              <div className="flex gap-2">
                <button className="p-2 hover:bg-slate-700 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  <Edit className="w-4 h-4" />
                </button>
                <button className="p-2 hover:bg-red-900/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity text-red-400">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">{dept.name}</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-400">Employees</span>
                <span className="font-semibold">{dept.employees}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-400">Manager</span>
                <span className="font-semibold">{dept.manager}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-400">Budget</span>
                <span className="font-semibold">{dept.budget}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-400">Performance</span>
                <span className="font-semibold text-green-400">{dept.performance}%</span>
              </div>
            </div>
            <div className="mt-4">
              <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-green-500 to-blue-500"
                  style={{ width: `${dept.performance}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
          <h2 className="text-xl font-semibold mb-6">Employee Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={departments}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="employees"
              >
                {departments.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
          <h2 className="text-xl font-semibold mb-6">Department Performance</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="name" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" domain={[0, 100]} />
              <Tooltip
                contentStyle={{ backgroundColor: "#1e293b", border: "1px solid #334155", borderRadius: "8px" }}
              />
              <Bar dataKey="performance" radius={[8, 8, 0, 0]}>
                {performanceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={departments[index].color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
