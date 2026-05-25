import { Outlet } from "react-router";
import { Sidebar } from "./Sidebar";
import { Navbar } from "./Navbar";
import { AIChat } from "./AIChat";
import { LiveActivityPanel } from "./LiveActivityPanel";

export function MainLayout() {
  return (
    <div className="flex h-screen bg-slate-950 text-slate-100 overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <Navbar />
        <main className="flex-1 overflow-auto p-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
          <Outlet />
        </main>
      </div>
      <LiveActivityPanel />
      <AIChat />
    </div>
  );
}
