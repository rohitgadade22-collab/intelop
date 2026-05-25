import { Brain, Lightbulb, TrendingUp, Zap, CheckCircle, Target, DollarSign } from "lucide-react";

const recommendations = [
  {
    id: 1,
    category: "Operations",
    title: "Optimize Shift Scheduling",
    description: "Implement staggered shift timing to reduce peak hour congestion and improve coverage",
    impact: "High",
    savings: "$12K/month",
    confidence: 92,
    priority: "critical",
    timeToImplement: "2 weeks",
  },
  {
    id: 2,
    category: "Performance",
    title: "Database Connection Pool Upgrade",
    description: "Increase connection pool size during 9-11 AM window when traffic peaks at 3.2K req/sec",
    impact: "Critical",
    savings: "45% faster",
    confidence: 95,
    priority: "high",
    timeToImplement: "2 days",
  },
  {
    id: 3,
    category: "Workforce",
    title: "Hire Additional Support Staff",
    description: "Add 2 support engineers for Q4 season based on historical ticket volume patterns",
    impact: "Medium",
    savings: "30% SLA improvement",
    confidence: 87,
    priority: "medium",
    timeToImplement: "4 weeks",
  },
  {
    id: 4,
    category: "Cost Optimization",
    title: "Server Resource Reallocation",
    description: "Move web-server-03 workload to underutilized servers, save $8K/month in infrastructure costs",
    impact: "High",
    savings: "$8K/month",
    confidence: 89,
    priority: "high",
    timeToImplement: "1 week",
  },
  {
    id: 5,
    category: "Automation",
    title: "Automate Ticket Routing",
    description: "Implement AI-based ticket categorization to route 80% of tickets automatically",
    impact: "High",
    savings: "60% faster routing",
    confidence: 91,
    priority: "high",
    timeToImplement: "3 weeks",
  },
  {
    id: 6,
    category: "Security",
    title: "Enhanced Access Controls",
    description: "Implement role-based access with MFA for admin panel after detecting 3 unauthorized attempts",
    impact: "Critical",
    savings: "Security improvement",
    confidence: 96,
    priority: "critical",
    timeToImplement: "1 week",
  },
];

export function AIRecommendations() {
  const criticalCount = recommendations.filter(r => r.priority === "critical").length;
  const highCount = recommendations.filter(r => r.priority === "high").length;
  const avgConfidence = Math.round(recommendations.reduce((sum, r) => sum + r.confidence, 0) / recommendations.length);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            AI Recommendations
          </h1>
          <p className="text-slate-400 mt-1">AI-powered operational recommendations</p>
        </div>
        <div className="flex items-center gap-3 px-4 py-2 bg-purple-600/20 border border-purple-500/30 rounded-lg">
          <Brain className="w-5 h-5 text-purple-400 animate-pulse" />
          <span className="text-sm font-medium text-purple-400">AI Agent Active</span>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <div className="p-5 bg-slate-800/30 border border-slate-700/50 rounded-xl">
          <div className="flex items-center justify-between mb-3">
            <Lightbulb className="w-8 h-8 text-yellow-400" />
            <span className="text-xs text-slate-400">total</span>
          </div>
          <p className="text-2xl font-bold">{recommendations.length}</p>
          <p className="text-sm text-slate-400 mt-1">Recommendations</p>
        </div>

        <div className="p-5 bg-gradient-to-br from-red-600/20 to-red-400/20 border border-red-500/30 rounded-xl">
          <div className="flex items-center justify-between mb-3">
            <Target className="w-8 h-8 text-red-400" />
            <span className="text-xs text-red-400">urgent</span>
          </div>
          <p className="text-2xl font-bold text-red-400">{criticalCount}</p>
          <p className="text-sm text-slate-400 mt-1">Critical Priority</p>
        </div>

        <div className="p-5 bg-gradient-to-br from-orange-600/20 to-orange-400/20 border border-orange-500/30 rounded-xl">
          <div className="flex items-center justify-between mb-3">
            <TrendingUp className="w-8 h-8 text-orange-400" />
            <span className="text-xs text-orange-400">important</span>
          </div>
          <p className="text-2xl font-bold text-orange-400">{highCount}</p>
          <p className="text-sm text-slate-400 mt-1">High Priority</p>
        </div>

        <div className="p-5 bg-gradient-to-br from-purple-600/20 to-purple-400/20 border border-purple-500/30 rounded-xl">
          <div className="flex items-center justify-between mb-3">
            <Brain className="w-8 h-8 text-purple-400" />
            <span className="text-xs text-purple-400">accuracy</span>
          </div>
          <p className="text-2xl font-bold text-purple-400">{avgConfidence}%</p>
          <p className="text-sm text-slate-400 mt-1">Avg Confidence</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {recommendations.map((rec) => (
          <div
            key={rec.id}
            className={`p-6 bg-slate-800/30 border rounded-xl ${
              rec.priority === "critical"
                ? "border-red-500/30"
                : rec.priority === "high"
                ? "border-orange-500/30"
                : "border-slate-700/50"
            }`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    rec.priority === "critical"
                      ? "bg-red-600/20"
                      : rec.priority === "high"
                      ? "bg-orange-600/20"
                      : "bg-blue-600/20"
                  }`}
                >
                  {rec.category === "Operations" && <Zap className="w-5 h-5 text-orange-400" />}
                  {rec.category === "Performance" && <TrendingUp className="w-5 h-5 text-green-400" />}
                  {rec.category === "Workforce" && <Target className="w-5 h-5 text-blue-400" />}
                  {rec.category === "Cost Optimization" && <DollarSign className="w-5 h-5 text-green-400" />}
                  {rec.category === "Automation" && <Brain className="w-5 h-5 text-purple-400" />}
                  {rec.category === "Security" && <CheckCircle className="w-5 h-5 text-red-400" />}
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-1">{rec.category}</p>
                  <h3 className="font-semibold text-lg">{rec.title}</h3>
                </div>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span
                  className={`px-2 py-1 rounded text-xs font-medium ${
                    rec.priority === "critical"
                      ? "bg-red-600/20 text-red-400 border border-red-500/30"
                      : rec.priority === "high"
                      ? "bg-orange-600/20 text-orange-400 border border-orange-500/30"
                      : "bg-blue-600/20 text-blue-400 border border-blue-500/30"
                  }`}
                >
                  {rec.priority.toUpperCase()}
                </span>
                <span className="text-xs text-slate-500">{rec.timeToImplement}</span>
              </div>
            </div>

            <p className="text-sm text-slate-300 mb-4">{rec.description}</p>

            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="p-3 bg-slate-800/50 rounded-lg">
                <p className="text-xs text-slate-400 mb-1">Impact</p>
                <p className={`text-sm font-semibold ${
                  rec.impact === "Critical" ? "text-red-400" : rec.impact === "High" ? "text-orange-400" : "text-blue-400"
                }`}>
                  {rec.impact}
                </p>
              </div>
              <div className="p-3 bg-slate-800/50 rounded-lg">
                <p className="text-xs text-slate-400 mb-1">Est. Savings</p>
                <p className="text-sm font-semibold text-green-400">{rec.savings}</p>
              </div>
              <div className="p-3 bg-slate-800/50 rounded-lg">
                <p className="text-xs text-slate-400 mb-1">Confidence</p>
                <p className="text-sm font-semibold text-purple-400">{rec.confidence}%</p>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-slate-400">AI Confidence Score</span>
                <span className="text-xs font-medium text-purple-400">{rec.confidence}%</span>
              </div>
              <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full bg-purple-500" style={{ width: `${rec.confidence}%` }} />
              </div>
            </div>

            <div className="flex gap-2">
              <button className="flex-1 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-sm font-medium transition-colors">
                Implement Now
              </button>
              <button className="px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg text-sm font-medium transition-colors">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
          <h2 className="text-xl font-semibold mb-4">Implementation Timeline</h2>
          <div className="space-y-3">
            {recommendations.slice(0, 4).map((rec, idx) => (
              <div key={idx} className="p-3 bg-slate-800/50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">{rec.title}</span>
                  <span className="text-xs text-slate-400">{rec.timeToImplement}</span>
                </div>
                <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${
                      rec.priority === "critical" ? "bg-red-500" : rec.priority === "high" ? "bg-orange-500" : "bg-blue-500"
                    }`}
                    style={{ width: "35%" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 bg-gradient-to-br from-purple-600/10 to-blue-600/10 border border-purple-500/30 rounded-xl">
          <h2 className="text-xl font-semibold mb-4">AI Model Performance</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-400">Recommendations Generated</span>
              <span className="text-sm font-semibold">127 this week</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-400">Avg Implementation Success</span>
              <span className="text-sm font-semibold text-green-400">94%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-400">Total Cost Savings</span>
              <span className="text-sm font-semibold text-green-400">$45K/month</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-400">Model Accuracy</span>
              <span className="text-sm font-semibold text-purple-400">91%</span>
            </div>
            <button className="w-full mt-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-sm font-medium transition-colors">
              View Full Analytics
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
