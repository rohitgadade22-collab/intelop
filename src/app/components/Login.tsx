import { useState } from "react";
import { Eye, EyeOff, Lock, Mail, Building2, AlertCircle, XCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

type ErrorType = "auth" | "network" | "rate_limit" | "server" | "validation";

interface ApiError {
  type: ErrorType;
  message: string;
  details?: string;
}

export function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );
  const [apiError, setApiError] = useState<ApiError | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors: { email?: string; password?: string } = {};

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Clear previous API errors when attempting new login
    setApiError(null);

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call - In production, this would be your actual authentication endpoint
      // Example: const response = await fetch('/api/auth/login', { method: 'POST', ... })

      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Simulate different error scenarios for demonstration
      // In production, remove this and handle real API responses
      const scenario = Math.random();

      if (scenario < 0.25) {
        // Invalid credentials
        throw {
          type: "auth",
          message: "Invalid email or password",
          details: "Please check your credentials and try again. If you've forgotten your password, use the 'Forgot password?' link above."
        };
      } else if (scenario < 0.4) {
        // Account locked due to too many attempts
        throw {
          type: "rate_limit",
          message: "Account temporarily locked",
          details: "Too many failed login attempts. Your account has been locked for 15 minutes for security reasons. Please try again later or contact support."
        };
      } else if (scenario < 0.5) {
        // Network error
        throw {
          type: "network",
          message: "Connection failed",
          details: "Unable to connect to the server. Please check your internet connection and try again."
        };
      } else if (scenario < 0.6) {
        // Server error
        throw {
          type: "server",
          message: "Service temporarily unavailable",
          details: "We're experiencing technical difficulties. Our team has been notified and is working to resolve the issue. Please try again in a few minutes."
        };
      } else {
        // Success
        console.log("Login successful:", { email });
        // In production: redirect to dashboard or set auth token
      }
    } catch (error: any) {
      setApiError(error as ApiError);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50 p-4">
      <div className="w-full max-w-md">
        {/* Logo and Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mb-4">
            <Building2 className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome Back
          </h1>
          <p className="text-gray-600">
            Sign in to access your digital banking account
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          {/* API Error Display */}
{apiError && (
  <div className="mb-4 rounded-lg border border-red-500 bg-red-100 p-4">
    <div className="flex items-center gap-2">
      <XCircle className="w-5 h-5 text-red-600" />

      <div>
        <h3 className="font-semibold text-red-800">
          {apiError.message}
        </h3>

        {apiError.details && (
          <p className="text-sm text-red-700">
            {apiError.details}
          </p>
        )}
      </div>
    </div>
  </div>
)}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`pl-10 ${
                    errors.email ? "border-red-500 focus:ring-red-500" : ""
                  }`}
                />
              </div>
              {errors.email && (
                <p className="text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <button
                  type="button"
                  className="text-sm text-blue-600 hover:text-blue-700 hover:underline"
                >
                  Forgot password?
                </button>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`pl-10 pr-10 ${
                    errors.password ? "border-red-500 focus:ring-red-500" : ""
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-sm text-red-600">{errors.password}</p>
              )}
            </div>

            {/* Remember Me */}
            <div className="flex items-center">
              <input
                id="remember"
                type="checkbox"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label
                htmlFor="remember"
                className="ml-2 text-sm text-gray-700 cursor-pointer"
              >
                Remember me
              </label>
            </div>

            {/* Login Button */}
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Signing In...
                </span>
              ) : (
                "Sign In"
              )}
            </Button>
          </form>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>
            Protected by industry-leading security measures
          </p>
          <div className="mt-2 flex items-center justify-center gap-4">
            <a href="#" className="hover:text-gray-700">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="#" className="hover:text-gray-700">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}