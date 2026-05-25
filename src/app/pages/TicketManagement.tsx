import { useState } from "react";
import { Plus, Search, Filter, Clock, AlertTriangle, CheckCircle } from "lucide-react";
import { TicketModal } from "../components/modals/TicketModal";

const tickets = [
  { id: "TKT-2891", title: "Database connection timeout", description: "Users experiencing timeout errors", priority: "Critical", status: "Open", assignee: "John Doe", created: "2 min ago", sla: "2h remaining", category: "Infrastructure" },
  { id: "TKT-2890", title: "Employee portal login issue", description: "Cannot login to portal", priority: "High", status: "In Progress", assignee: "Sarah Chen", created: "15 min ago", sla: "4h remaining", category: "Application" },
  { id: "TKT-2889", title: "Report generation slow", description: "Performance issues with reports", priority: "Medium", status: "Open", assignee: "Mike Johnson", created: "1 hour ago", sla: "8h remaining", category: "Performance" },
  { id: "TKT-2888", title: "Mobile app crash on iOS", description: "App crashes on launch", priority: "High", status: "In Progress", assignee: "Alice Wang", created: "2 hours ago", sla: "3h remaining", category: "Mobile" },
  { id: "TKT-2887", title: "Email notifications not working", description: "Users not receiving emails", priority: "Medium", status: "Resolved", assignee: "Bob Smith", created: "3 hours ago", sla: "Resolved", category: "Integration" },
];

export function TicketManagement() {
  const [selectedTicket, setSelectedTicket] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filterStatus, setFilterStatus] = useState("All");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Ticket Management</h1>
          <p className="text-slate-400 mt-1">Track and resolve support tickets</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center gap-2 transition-colors">
          <Plus className="w-5 h-5" />
          Create Ticket
        </button>
      </div>

      <div className="grid grid-cols-5 gap-4">
        <div className="p-5 bg-slate-800/30 border border-slate-700/50 rounded-xl">
          <p className="text-2xl font-bold">156</p>
          <p className="text-sm text-slate-400 mt-1">Open Tickets</p>
        </div>
        <div className="p-5 bg-slate-800/30 border border-yellow-500/30 rounded-xl">
          <p className="text-2xl font-bold text-yellow-400">89</p>
          <p className="text-sm text-slate-400 mt-1">In Progress</p>
        </div>
        <div className="p-5 bg-slate-800/30 border border-green-500/30 rounded-xl">
          <p className="text-2xl font-bold text-green-400">234</p>
          <p className="text-sm text-slate-400 mt-1">Resolved</p>
        </div>
        <div className="p-5 bg-slate-800/30 border border-red-500/30 rounded-xl">
          <p className="text-2xl font-bold text-red-400">12</p>
          <p className="text-sm text-slate-400 mt-1">SLA Breach</p>
        </div>
        <div className="p-5 bg-slate-800/30 border border-blue-500/30 rounded-xl">
          <p className="text-2xl font-bold text-blue-400">2.3h</p>
          <p className="text-sm text-slate-400 mt-1">Avg Resolution</p>
        </div>
      </div>

      <div className="flex gap-3">
        {["All", "Open", "In Progress", "Resolved"].map((status) => (
          <button
            key={status}
            onClick={() => setFilterStatus(status)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              filterStatus === status
                ? "bg-blue-600 text-white"
                : "bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800"
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      <div className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
        <div className="flex items-center gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search tickets by ID, title, or assignee..."
              className="w-full pl-10 pr-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 placeholder:text-slate-500"
            />
          </div>
          <button className="px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg flex items-center gap-2 hover:bg-slate-800 transition-colors">
            <Filter className="w-5 h-5" />
            Filters
          </button>
        </div>

        <div className="space-y-3">
          {tickets
            .filter((ticket) => filterStatus === "All" || ticket.status === filterStatus)
            .map((ticket) => (
              <div
                key={ticket.id}
                onClick={() => {
                  setSelectedTicket(ticket);
                  setIsModalOpen(true);
                }}
                className="p-5 bg-slate-800/50 border border-slate-700/30 rounded-xl hover:bg-slate-700/50 transition-all cursor-pointer"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm text-slate-400">{ticket.id}</span>
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        ticket.priority === "Critical"
                          ? "bg-red-600/20 text-red-400 border border-red-500/30"
                          : ticket.priority === "High"
                          ? "bg-orange-600/20 text-orange-400 border border-orange-500/30"
                          : "bg-blue-600/20 text-blue-400 border border-blue-500/30"
                      }`}
                    >
                      {ticket.priority}
                    </span>
                    <span className="px-2 py-1 bg-slate-700/50 rounded text-xs text-slate-400">
                      {ticket.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span
                      className={`px-3 py-1 rounded text-xs font-medium ${
                        ticket.status === "Open"
                          ? "bg-blue-600/20 text-blue-400 border border-blue-500/30"
                          : ticket.status === "In Progress"
                          ? "bg-yellow-600/20 text-yellow-400 border border-yellow-500/30"
                          : "bg-green-600/20 text-green-400 border border-green-500/30"
                      }`}
                    >
                      {ticket.status}
                    </span>
                    <span className="text-xs text-slate-500">{ticket.created}</span>
                  </div>
                </div>

                <h3 className="font-semibold text-lg mb-2">{ticket.title}</h3>
                <p className="text-sm text-slate-400 mb-4">{ticket.description}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-xs font-bold">
                      {ticket.assignee.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <span className="text-slate-400">Assigned to {ticket.assignee}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    {ticket.sla === "Resolved" ? (
                      <>
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-green-400">{ticket.sla}</span>
                      </>
                    ) : ticket.sla.includes("remaining") ? (
                      <>
                        <Clock className="w-4 h-4 text-yellow-400" />
                        <span className="text-yellow-400">SLA: {ticket.sla}</span>
                      </>
                    ) : (
                      <>
                        <AlertTriangle className="w-4 h-4 text-red-400" />
                        <span className="text-red-400">SLA Breach</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {isModalOpen && (
        <TicketModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          ticket={selectedTicket}
        />
      )}
    </div>
  );
}
