import { Plus } from "lucide-react";

export function CreateTicket() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Create Ticket</h1>
        <p className="text-slate-400 mt-1">Submit a new support ticket</p>
      </div>
      <div className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Title</label>
            <input
              type="text"
              placeholder="Brief description of the issue"
              className="w-full px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Description</label>
            <textarea
              placeholder="Detailed description"
              rows={5}
              className="w-full px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 resize-none"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Priority</label>
              <select className="w-full px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50">
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
                <option>Critical</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Category</label>
              <select className="w-full px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50">
                <option>Infrastructure</option>
                <option>Application</option>
                <option>Performance</option>
                <option>Security</option>
              </select>
            </div>
          </div>
          <button className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors">
            Create Ticket
          </button>
        </form>
      </div>
    </div>
  );
}
