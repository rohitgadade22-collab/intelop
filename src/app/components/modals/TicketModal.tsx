import { X, AlertTriangle, Clock, User, Tag, MessageSquare } from "lucide-react";

interface TicketModalProps {
  isOpen: boolean;
  onClose: () => void;
  ticket: any;
}

export function TicketModal({ isOpen, onClose, ticket }: TicketModalProps) {
  if (!isOpen || !ticket) return null;

  const comments = [
    { user: "System", text: "Ticket created and assigned", time: ticket.created },
    { user: ticket.assignee, text: "Investigating the issue. Will update soon.", time: "1 min after creation" },
    { user: "DevOps Team", text: "Found connection pool saturation during peak hours", time: "15 min after creation" },
  ];

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-6">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl">
        <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-gradient-to-r from-blue-600/20 to-purple-600/20">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-2xl font-bold">{ticket.id}</h2>
              <span
                className={`px-3 py-1 rounded text-sm font-medium ${
                  ticket.priority === "Critical"
                    ? "bg-red-600/20 text-red-400 border border-red-500/30"
                    : ticket.priority === "High"
                    ? "bg-orange-600/20 text-orange-400 border border-orange-500/30"
                    : "bg-blue-600/20 text-blue-400 border border-blue-500/30"
                }`}
              >
                {ticket.priority}
              </span>
              <span
                className={`px-3 py-1 rounded text-sm font-medium ${
                  ticket.status === "Open"
                    ? "bg-blue-600/20 text-blue-400 border border-blue-500/30"
                    : ticket.status === "In Progress"
                    ? "bg-yellow-600/20 text-yellow-400 border border-yellow-500/30"
                    : "bg-green-600/20 text-green-400 border border-green-500/30"
                }`}
              >
                {ticket.status}
              </span>
            </div>
            <p className="text-lg text-slate-300">{ticket.title}</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-800 rounded-lg transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
          <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="p-4 bg-slate-800/50 border border-slate-700/50 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <User className="w-4 h-4 text-slate-400" />
                <p className="text-sm text-slate-400">Assignee</p>
              </div>
              <p className="font-medium">{ticket.assignee}</p>
            </div>
            <div className="p-4 bg-slate-800/50 border border-slate-700/50 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <Tag className="w-4 h-4 text-slate-400" />
                <p className="text-sm text-slate-400">Category</p>
              </div>
              <p className="font-medium">{ticket.category}</p>
            </div>
            <div className="p-4 bg-slate-800/50 border border-slate-700/50 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-slate-400" />
                <p className="text-sm text-slate-400">Created</p>
              </div>
              <p className="font-medium">{ticket.created}</p>
            </div>
            <div className="p-4 bg-slate-800/50 border border-slate-700/50 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-slate-400" />
                <p className="text-sm text-slate-400">SLA Status</p>
              </div>
              <p className="font-medium text-yellow-400">{ticket.sla}</p>
            </div>
          </div>

          <div className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl mb-6">
            <h3 className="font-semibold mb-3">Description</h3>
            <p className="text-sm text-slate-300">{ticket.description}</p>
            <p className="text-sm text-slate-400 mt-3">
              This issue requires immediate attention from the technical team. Users are experiencing
              connection timeouts when attempting to access the database. The problem appears to be
              related to connection pool saturation during peak hours.
            </p>
          </div>

          <div className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl mb-6">
            <div className="flex items-center gap-2 mb-4">
              <MessageSquare className="w-5 h-5" />
              <h3 className="font-semibold">Comments & Activity</h3>
            </div>
            <div className="space-y-4">
              {comments.map((comment, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                    {comment.user.split(" ").map((n: any[]) => n[0]).join("")}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-sm">{comment.user}</span>
                      <span className="text-xs text-slate-500">{comment.time}</span>
                    </div>
                    <p className="text-sm text-slate-300">{comment.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-slate-700">
              <textarea
                placeholder="Add a comment..."
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 placeholder:text-slate-500 resize-none"
                rows={3}
              />
              <div className="flex justify-end mt-2">
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-medium transition-colors">
                  Add Comment
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-slate-800 flex gap-3">
          <button className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors">
            Update Status
          </button>
          <button className="flex-1 px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg font-medium transition-colors">
            Reassign
          </button>
          <button className="flex-1 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg font-medium transition-colors">
            Resolve Ticket
          </button>
        </div>
      </div>
    </div>
  );
}
