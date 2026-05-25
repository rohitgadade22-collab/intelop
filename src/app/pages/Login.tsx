import { useState } from "react";
import { useNavigate } from "react-router";
import { Brain, Lock, Mail, Eye, EyeOff } from "lucide-react";

export function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center p-6">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full max-w-md">
        <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800/50 rounded-2xl p-8 shadow-2xl">
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
              <Brain className="w-10 h-10 text-white" />
            </div>
          </div>

          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">AI Operations Platform</h1>
            <p className="text-slate-400">Enterprise Management System</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@company.com"
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 placeholder:text-slate-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full pl-10 pr-12 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 placeholder:text-slate-500"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-300"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-slate-700 bg-slate-800" />
                <span className="text-sm text-slate-400">Remember me</span>
              </label>
              <button type="button" className="text-sm text-blue-400 hover:text-blue-300">
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-semibold transition-all shadow-lg shadow-blue-600/20"
            >
              Sign In
            </button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-800" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-slate-900 text-slate-400">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                className="py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg hover:bg-slate-800 transition-colors"
              >
                <span className="text-sm font-medium">SSO Login</span>
              </button>
              <button
                type="button"
                className="py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg hover:bg-slate-800 transition-colors"
              >
                <span className="text-sm font-medium">Azure AD</span>
              </button>
            </div>
          </form>

          <div className="mt-8 pt-6 border-t border-slate-800">
            <p className="text-center text-sm text-slate-400">
              Demo credentials: admin@company.com / admin123
            </p>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-slate-500">
          © 2026 AI Operations Platform. All rights reserved.
        </div>
      </div>
    </div>
  );
}
