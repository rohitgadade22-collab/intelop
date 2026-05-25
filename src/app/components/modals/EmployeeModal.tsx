import { X, User, Mail, Phone, MapPin, Calendar, Briefcase, Building2 } from "lucide-react";

interface EmployeeModalProps {
  isOpen: boolean;
  onClose: () => void;
  employee: any;
  mode: "view" | "edit" | "create";
}

export function EmployeeModal({ isOpen, onClose, employee, mode }: EmployeeModalProps) {
  if (!isOpen) return null;

  const isCreate = mode === "create";
  const isEdit = mode === "edit";
  const isView = mode === "view";

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-6">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden shadow-2xl">
        <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-gradient-to-r from-blue-600/20 to-purple-600/20">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center font-bold text-lg">
              {isCreate ? "+" : employee?.avatar}
            </div>
            <div>
              <h2 className="text-2xl font-bold">
                {isCreate ? "Add New Employee" : isEdit ? "Edit Employee" : employee?.name}
              </h2>
              <p className="text-slate-400">
                {isCreate ? "Fill in employee details" : isEdit ? "Update employee information" : employee?.role}
              </p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-800 rounded-lg transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
          {isView && employee && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-slate-400 flex items-center gap-2 mb-1">
                      <Mail className="w-4 h-4" />
                      Email
                    </label>
                    <p className="text-sm font-medium">{employee.email}</p>
                  </div>
                  <div>
                    <label className="text-sm text-slate-400 flex items-center gap-2 mb-1">
                      <Phone className="w-4 h-4" />
                      Phone
                    </label>
                    <p className="text-sm font-medium">{employee.phone}</p>
                  </div>
                  <div>
                    <label className="text-sm text-slate-400 flex items-center gap-2 mb-1">
                      <MapPin className="w-4 h-4" />
                      Location
                    </label>
                    <p className="text-sm font-medium">{employee.location}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-slate-400 flex items-center gap-2 mb-1">
                      <Building2 className="w-4 h-4" />
                      Department
                    </label>
                    <p className="text-sm font-medium">{employee.department}</p>
                  </div>
                  <div>
                    <label className="text-sm text-slate-400 flex items-center gap-2 mb-1">
                      <Briefcase className="w-4 h-4" />
                      Role
                    </label>
                    <p className="text-sm font-medium">{employee.role}</p>
                  </div>
                  <div>
                    <label className="text-sm text-slate-400 flex items-center gap-2 mb-1">
                      <Calendar className="w-4 h-4" />
                      Join Date
                    </label>
                    <p className="text-sm font-medium">{employee.joinDate}</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-slate-800/50 border border-slate-700/50 rounded-xl">
                <h3 className="font-semibold mb-3">Recent Activity</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-green-400 rounded-full" />
                    <span className="text-slate-400">Checked in at 9:00 AM today</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-blue-400 rounded-full" />
                    <span className="text-slate-400">Completed 5 tasks this week</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-purple-400 rounded-full" />
                    <span className="text-slate-400">Attended 3 meetings this week</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {(isEdit || isCreate) && (
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    defaultValue={employee?.name}
                    placeholder="John Doe"
                    className="w-full px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    defaultValue={employee?.email}
                    placeholder="john.doe@company.com"
                    className="w-full px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    defaultValue={employee?.phone}
                    placeholder="+1 234 567 8900"
                    className="w-full px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Location</label>
                  <input
                    type="text"
                    defaultValue={employee?.location}
                    placeholder="New York"
                    className="w-full px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Department</label>
                  <select
                    defaultValue={employee?.department}
                    className="w-full px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  >
                    <option>Engineering</option>
                    <option>Sales</option>
                    <option>Marketing</option>
                    <option>HR</option>
                    <option>Support</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Role</label>
                  <input
                    type="text"
                    defaultValue={employee?.role}
                    placeholder="Software Engineer"
                    className="w-full px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Join Date</label>
                  <input
                    type="date"
                    defaultValue={employee?.joinDate}
                    className="w-full px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Status</label>
                  <select
                    defaultValue={employee?.status}
                    className="w-full px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  >
                    <option>Active</option>
                    <option>On Leave</option>
                    <option>Inactive</option>
                  </select>
                </div>
              </div>
            </form>
          )}
        </div>

        <div className="p-6 border-t border-slate-800 flex gap-3">
          {isView && (
            <>
              <button className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors">
                Edit Employee
              </button>
              <button
                onClick={onClose}
                className="flex-1 px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg font-medium transition-colors"
              >
                Close
              </button>
            </>
          )}
          {(isEdit || isCreate) && (
            <>
              <button className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors">
                {isCreate ? "Create Employee" : "Save Changes"}
              </button>
              <button
                onClick={onClose}
                className="flex-1 px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg font-medium transition-colors"
              >
                Cancel
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
