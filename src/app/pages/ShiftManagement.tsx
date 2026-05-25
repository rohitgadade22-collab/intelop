import { useState } from "react";
import { CalendarClock, Plus, Clock, Users, Edit } from "lucide-react";

const shifts = [
  { id: 1, name: "Morning Shift", time: "08:00 - 16:00", employees: 245, color: "blue", days: "Mon-Fri" },
  { id: 2, name: "Evening Shift", time: "16:00 - 00:00", employees: 156, color: "orange", days: "Mon-Fri" },
  { id: 3, name: "Night Shift", time: "00:00 - 08:00", employees: 89, color: "purple", days: "Mon-Fri" },
  { id: 4, name: "Weekend Shift", time: "09:00 - 17:00", employees: 67, color: "green", days: "Sat-Sun" },
];

const schedule = [
  { employee: "Sarah Chen", shift: "Morning Shift", days: ["Mon", "Tue", "Wed", "Thu", "Fri"], hours: 40 },
  { employee: "Mike Johnson", shift: "Evening Shift", days: ["Mon", "Tue", "Wed", "Thu", "Fri"], hours: 40 },
  { employee: "Alice Wang", shift: "Morning Shift", days: ["Mon", "Tue", "Wed", "Thu"], hours: 32 },
  { employee: "Bob Smith", shift: "Night Shift", days: ["Mon", "Tue", "Wed", "Thu", "Fri"], hours: 40 },
  { employee: "Carol Davis", shift: "Weekend Shift", days: ["Sat", "Sun"], hours: 16 },
];

export function ShiftManagement() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Shift Management</h1>
          <p className="text-slate-400 mt-1">Manage employee shifts and schedules</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center gap-2 transition-colors">
          <Plus className="w-5 h-5" />
          Create Shift
        </button>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <div className="p-5 bg-slate-800/30 border border-slate-700/50 rounded-xl">
          <p className="text-2xl font-bold">{shifts.length}</p>
          <p className="text-sm text-slate-400 mt-1">Active Shifts</p>
        </div>
        <div className="p-5 bg-slate-800/30 border border-slate-700/50 rounded-xl">
          <p className="text-2xl font-bold">557</p>
          <p className="text-sm text-slate-400 mt-1">Assigned Employees</p>
        </div>
        <div className="p-5 bg-slate-800/30 border border-slate-700/50 rounded-xl">
          <p className="text-2xl font-bold text-green-400">98%</p>
          <p className="text-sm text-slate-400 mt-1">Coverage Rate</p>
        </div>
        <div className="p-5 bg-slate-800/30 border border-yellow-500/30 rounded-xl">
          <p className="text-2xl font-bold text-yellow-400">12</p>
          <p className="text-sm text-slate-400 mt-1">Conflicts</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {shifts.map((shift) => {
          const colorClasses = {
            blue: { bg: "from-blue-600/20 to-blue-400/20", border: "border-blue-500/30", text: "text-blue-400" },
            orange: { bg: "from-orange-600/20 to-orange-400/20", border: "border-orange-500/30", text: "text-orange-400" },
            purple: { bg: "from-purple-600/20 to-purple-400/20", border: "border-purple-500/30", text: "text-purple-400" },
            green: { bg: "from-green-600/20 to-green-400/20", border: "border-green-500/30", text: "text-green-400" },
          }[shift.color];

          return (
            <div
              key={shift.id}
              className={`p-6 bg-gradient-to-br ${colorClasses.bg} border ${colorClasses.border} rounded-xl`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <CalendarClock className={`w-8 h-8 ${colorClasses.text}`} />
                  <div>
                    <h3 className="text-xl font-bold">{shift.name}</h3>
                    <p className="text-sm text-slate-400">{shift.days}</p>
                  </div>
                </div>
                <button className="p-2 hover:bg-slate-800/50 rounded-lg transition-colors">
                  <Edit className="w-4 h-4" />
                </button>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-slate-400" />
                  <span className="font-semibold">{shift.time}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-slate-400" />
                  <span className="font-semibold">{shift.employees} Employees Assigned</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
        <h2 className="text-xl font-semibold mb-6">Employee Schedule</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-800">
                <th className="text-left py-3 px-4 text-sm font-semibold text-slate-400">Employee</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-slate-400">Shift</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-slate-400">Days</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-slate-400">Weekly Hours</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-slate-400">Actions</th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((item, idx) => (
                <tr key={idx} className="border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-4 font-medium">{item.employee}</td>
                  <td className="py-4 px-4">
                    <span className="px-2 py-1 bg-blue-600/20 text-blue-400 rounded text-xs font-medium">
                      {item.shift}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex gap-1">
                      {item.days.map((day, i) => (
                        <span key={i} className="px-2 py-1 bg-slate-700 rounded text-xs">
                          {day}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-4 px-4">{item.hours} hrs</td>
                  <td className="py-4 px-4">
                    <div className="flex items-center justify-end gap-2">
                      <button className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-xs transition-colors">
                        Reassign
                      </button>
                      <button className="px-3 py-1 bg-slate-700 hover:bg-slate-600 rounded text-xs transition-colors">
                        Edit
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
          <h2 className="text-xl font-semibold mb-4">Shift Coverage (This Week)</h2>
          <div className="space-y-3">
            {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((day) => (
              <div key={day} className="flex items-center justify-between">
                <span className="text-sm text-slate-400">{day}</span>
                <div className="flex-1 mx-4 h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500" style={{ width: `${Math.random() * 20 + 80}%` }} />
                </div>
                <span className="text-sm font-semibold text-green-400">
                  {Math.floor(Math.random() * 20 + 80)}%
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 bg-gradient-to-br from-purple-600/10 to-blue-600/10 border border-purple-500/30 rounded-xl">
          <h2 className="text-xl font-semibold mb-4">AI Recommendations</h2>
          <div className="space-y-3">
            <div className="p-4 bg-slate-800/50 rounded-lg">
              <p className="text-sm">Optimize morning shift coverage by adding 2 employees on Wednesdays</p>
            </div>
            <div className="p-4 bg-slate-800/50 rounded-lg">
              <p className="text-sm">Weekend shift understaffed - recommend hiring 5 additional employees</p>
            </div>
            <div className="p-4 bg-slate-800/50 rounded-lg">
              <p className="text-sm">Shift rotation efficiency can be improved by 15% with smart scheduling</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
