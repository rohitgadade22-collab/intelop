import { useState } from "react";
import { Calendar, Clock, CheckCircle, XCircle, AlertCircle, Download, Filter } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const attendanceData = [
  { id: 1, name: "Sarah Chen", checkIn: "08:45 AM", checkOut: "05:30 PM", status: "Present", hours: "8.75", date: "2026-05-17" },
  { id: 2, name: "Mike Johnson", checkIn: "09:15 AM", checkOut: "06:00 PM", status: "Late", hours: "8.75", date: "2026-05-17" },
  { id: 3, name: "Alice Wang", checkIn: "08:55 AM", checkOut: "05:45 PM", status: "Present", hours: "8.83", date: "2026-05-17" },
  { id: 4, name: "Bob Smith", checkIn: "-", checkOut: "-", status: "Absent", hours: "0", date: "2026-05-17" },
  { id: 5, name: "Carol Davis", checkIn: "08:30 AM", checkOut: "05:00 PM", status: "Present", hours: "8.50", date: "2026-05-17" },
];

const weeklyStats = [
  { day: "Mon", present: 820, late: 25, absent: 30 },
  { day: "Tue", present: 835, late: 30, absent: 28 },
  { day: "Wed", present: 842, late: 28, absent: 25 },
  { day: "Thu", present: 838, late: 32, absent: 27 },
  { day: "Fri", present: 847, late: 34, absent: 23 },
];

export function AttendanceManagement() {
  const [selectedDate, setSelectedDate] = useState("2026-05-17");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Attendance Management</h1>
          <p className="text-slate-400 mt-1">Track and manage employee attendance</p>
        </div>
        <div className="flex items-center gap-3">
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          />
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center gap-2 transition-colors">
            <Download className="w-5 h-5" />
            Export Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <div className="p-5 bg-gradient-to-br from-green-600/20 to-green-400/20 border border-green-500/30 rounded-xl">
          <div className="flex items-center justify-between mb-3">
            <CheckCircle className="w-8 h-8 text-green-400" />
            <div className="text-right">
              <p className="text-2xl font-bold text-green-400">847</p>
              <p className="text-sm text-slate-400">Present</p>
            </div>
          </div>
          <p className="text-xs text-green-400">+2.3% from yesterday</p>
        </div>

        <div className="p-5 bg-gradient-to-br from-red-600/20 to-red-400/20 border border-red-500/30 rounded-xl">
          <div className="flex items-center justify-between mb-3">
            <XCircle className="w-8 h-8 text-red-400" />
            <div className="text-right">
              <p className="text-2xl font-bold text-red-400">23</p>
              <p className="text-sm text-slate-400">Absent</p>
            </div>
          </div>
          <p className="text-xs text-red-400">-0.5% from yesterday</p>
        </div>

        <div className="p-5 bg-gradient-to-br from-yellow-600/20 to-yellow-400/20 border border-yellow-500/30 rounded-xl">
          <div className="flex items-center justify-between mb-3">
            <AlertCircle className="w-8 h-8 text-yellow-400" />
            <div className="text-right">
              <p className="text-2xl font-bold text-yellow-400">34</p>
              <p className="text-sm text-slate-400">Late</p>
            </div>
          </div>
          <p className="text-xs text-yellow-400">+1.2% from yesterday</p>
        </div>

        <div className="p-5 bg-gradient-to-br from-blue-600/20 to-blue-400/20 border border-blue-500/30 rounded-xl">
          <div className="flex items-center justify-between mb-3">
            <Clock className="w-8 h-8 text-blue-400" />
            <div className="text-right">
              <p className="text-2xl font-bold text-blue-400">96.2%</p>
              <p className="text-sm text-slate-400">Attendance Rate</p>
            </div>
          </div>
          <p className="text-xs text-blue-400">Target: 95%</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
          <h2 className="text-xl font-semibold mb-6">Weekly Attendance Overview</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={weeklyStats}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="day" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip
                contentStyle={{ backgroundColor: "#1e293b", border: "1px solid #334155", borderRadius: "8px" }}
              />
              <Bar dataKey="present" fill="#10b981" radius={[8, 8, 0, 0]} />
              <Bar dataKey="late" fill="#f59e0b" radius={[8, 8, 0, 0]} />
              <Bar dataKey="absent" fill="#ef4444" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <button className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-left transition-colors">
              <p className="font-medium">Mark Attendance</p>
              <p className="text-xs text-blue-200 mt-1">Bulk check-in/out</p>
            </button>
            <button className="w-full px-4 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg text-left transition-colors">
              <p className="font-medium">Add Leave Request</p>
              <p className="text-xs text-slate-400 mt-1">Submit leave application</p>
            </button>
            <button className="w-full px-4 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg text-left transition-colors">
              <p className="font-medium">Generate Report</p>
              <p className="text-xs text-slate-400 mt-1">Custom attendance report</p>
            </button>
          </div>

          <div className="mt-6 p-4 bg-purple-600/20 border border-purple-500/30 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle className="w-5 h-5 text-purple-400" />
              <span className="text-sm font-semibold text-purple-400">AI Insight</span>
            </div>
            <p className="text-xs text-slate-300">
              Engineering department shows 15% higher late arrivals this week. Consider reviewing shift timings.
            </p>
          </div>
        </div>
      </div>

      <div className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Today's Attendance</h2>
          <button className="px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg flex items-center gap-2 hover:bg-slate-800 transition-colors">
            <Filter className="w-5 h-5" />
            Filter by Department
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-800">
                <th className="text-left py-3 px-4 text-sm font-semibold text-slate-400">Employee</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-slate-400">Check In</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-slate-400">Check Out</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-slate-400">Total Hours</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-slate-400">Status</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-slate-400">Date</th>
              </tr>
            </thead>
            <tbody>
              {attendanceData.map((record) => (
                <tr
                  key={record.id}
                  className="border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors"
                >
                  <td className="py-4 px-4 font-medium">{record.name}</td>
                  <td className="py-4 px-4 text-sm">{record.checkIn}</td>
                  <td className="py-4 px-4 text-sm">{record.checkOut}</td>
                  <td className="py-4 px-4 text-sm">{record.hours} hrs</td>
                  <td className="py-4 px-4">
                    <span
                      className={`inline-flex px-2 py-1 rounded text-xs font-medium ${
                        record.status === "Present"
                          ? "bg-green-600/20 text-green-400 border border-green-500/30"
                          : record.status === "Late"
                          ? "bg-yellow-600/20 text-yellow-400 border border-yellow-500/30"
                          : "bg-red-600/20 text-red-400 border border-red-500/30"
                      }`}
                    >
                      {record.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-sm text-slate-400">{record.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
