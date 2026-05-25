import { useState } from "react";
import { Plus, Search, Filter, Download, Edit, Trash2, Eye, Mail, Phone, MapPin } from "lucide-react";
import { EmployeeModal } from "../components/modals/EmployeeModal";

const employees = [
  { id: 1, name: "Sarah Chen", email: "sarah.chen@company.com", department: "Engineering", role: "Senior Developer", status: "Active", phone: "+1 234 567 8901", location: "New York", joinDate: "2022-01-15", avatar: "SC" },
  { id: 2, name: "Mike Johnson", email: "mike.j@company.com", department: "Sales", role: "Sales Manager", status: "Active", phone: "+1 234 567 8902", location: "San Francisco", joinDate: "2021-06-20", avatar: "MJ" },
  { id: 3, name: "Alice Wang", email: "alice.w@company.com", department: "Engineering", role: "DevOps Engineer", status: "Active", phone: "+1 234 567 8903", location: "Austin", joinDate: "2023-03-10", avatar: "AW" },
  { id: 4, name: "Bob Smith", email: "bob.s@company.com", department: "Marketing", role: "Marketing Lead", status: "Active", phone: "+1 234 567 8904", location: "Chicago", joinDate: "2020-11-05", avatar: "BS" },
  { id: 5, name: "Carol Davis", email: "carol.d@company.com", department: "HR", role: "HR Manager", status: "Active", phone: "+1 234 567 8905", location: "Boston", joinDate: "2019-08-22", avatar: "CD" },
  { id: 6, name: "David Lee", email: "david.l@company.com", department: "Support", role: "Support Lead", status: "On Leave", phone: "+1 234 567 8906", location: "Seattle", joinDate: "2022-05-15", avatar: "DL" },
];

export function EmployeeManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"view" | "edit" | "create">("view");

  const handleCreateEmployee = () => {
    setModalMode("create");
    setSelectedEmployee(null);
    setIsModalOpen(true);
  };

  const handleViewEmployee = (employee: any) => {
    setModalMode("view");
    setSelectedEmployee(employee);
    setIsModalOpen(true);
  };

  const handleEditEmployee = (employee: any) => {
    setModalMode("edit");
    setSelectedEmployee(employee);
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Employee Management</h1>
          <p className="text-slate-400 mt-1">Manage your workforce and employee data</p>
        </div>
        <button
          onClick={handleCreateEmployee}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center gap-2 transition-colors"
        >
          <Plus className="w-5 h-5" />
          Add Employee
        </button>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <div className="p-5 bg-slate-800/30 border border-slate-700/50 rounded-xl">
          <p className="text-2xl font-bold">1,247</p>
          <p className="text-sm text-slate-400 mt-1">Total Employees</p>
        </div>
        <div className="p-5 bg-slate-800/30 border border-slate-700/50 rounded-xl">
          <p className="text-2xl font-bold text-green-400">1,234</p>
          <p className="text-sm text-slate-400 mt-1">Active</p>
        </div>
        <div className="p-5 bg-slate-800/30 border border-slate-700/50 rounded-xl">
          <p className="text-2xl font-bold text-yellow-400">13</p>
          <p className="text-sm text-slate-400 mt-1">On Leave</p>
        </div>
        <div className="p-5 bg-slate-800/30 border border-slate-700/50 rounded-xl">
          <p className="text-2xl font-bold text-blue-400">45</p>
          <p className="text-sm text-slate-400 mt-1">New This Month</p>
        </div>
      </div>

      <div className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
        <div className="flex items-center gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search employees by name, email, or department..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
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
                <th className="text-left py-3 px-4 text-sm font-semibold text-slate-400">Employee</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-slate-400">Department</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-slate-400">Role</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-slate-400">Contact</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-slate-400">Status</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-slate-400">Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees
                .filter((emp) =>
                  emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  emp.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  emp.department.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((employee) => (
                  <tr
                    key={employee.id}
                    className="border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors"
                  >
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center font-semibold">
                          {employee.avatar}
                        </div>
                        <div>
                          <p className="font-medium">{employee.name}</p>
                          <p className="text-sm text-slate-400">{employee.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-sm">{employee.department}</td>
                    <td className="py-4 px-4 text-sm">{employee.role}</td>
                    <td className="py-4 px-4">
                      <div className="flex flex-col gap-1">
                        <span className="text-xs text-slate-400 flex items-center gap-1">
                          <Phone className="w-3 h-3" />
                          {employee.phone}
                        </span>
                        <span className="text-xs text-slate-400 flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {employee.location}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span
                        className={`inline-flex px-2 py-1 rounded text-xs font-medium ${
                          employee.status === "Active"
                            ? "bg-green-600/20 text-green-400 border border-green-500/30"
                            : "bg-yellow-600/20 text-yellow-400 border border-yellow-500/30"
                        }`}
                      >
                        {employee.status}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => handleViewEmployee(employee)}
                          className="p-2 hover:bg-slate-700 rounded-lg transition-colors"
                          title="View Details"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleEditEmployee(employee)}
                          className="p-2 hover:bg-slate-700 rounded-lg transition-colors"
                          title="Edit"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          className="p-2 hover:bg-red-900/50 rounded-lg transition-colors text-red-400"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-800">
          <p className="text-sm text-slate-400">Showing 1-6 of 1,247 employees</p>
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

      {isModalOpen && (
        <EmployeeModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          employee={selectedEmployee}
          mode={modalMode}
        />
      )}
    </div>
  );
}
