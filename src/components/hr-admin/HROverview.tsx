import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Progress } from "../ui/progress";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { User } from "../../App";
import { Footer } from "../Footer";
import {
  Users,
  TrendingUp,
  Target,
  DollarSign,
  Clock,
  Award,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  BarChart3,
  BookOpen,
  UserCheck,
  Calendar,
  PieChart,
  Activity,
} from "lucide-react";

interface HROverviewProps {
  user: User;
  onViewChange: (
    view:
      | "dashboard"
      | "profile"
      | "analytics"
      | "learning"
      | "messages",
  ) => void;
}

const getMockHRData = (user: User) => ({
  teamMetrics: {
    totalEmployees: 500, // Total POWERGRID employees organization-wide
    activeIDPs: 435, // Active IDPs (87% of 500)
    completionRate: 87.4,
    averageSkillGrow: 15,
    budgetUtilized: 78.5,
    trainingHours: 6125, // Proportional to total employees (500*12.25)
  },
  skillGaps: [
    {
      skill: "Grid Management",
      employeesWithGap: 115,
      priority: "high",
      growthNeeded: 23,
    },
    {
      skill: "Leadership",
      employeesWithGap: 98,
      priority: "high",
      growthNeeded: 20,
    },
    {
      skill: "Project Management",
      employeesWithGap: 85,
      priority: "medium",
      growthNeeded: 18,
    },
    {
      skill: "Renewable Integration",
      employeesWithGap: 73,
      priority: "medium",
      growthNeeded: 15,
    },
  ],
  successionPlanning: [
    {
      position: "Senior Engineering Manager",
      department: "Engineering",
      candidates: [
        {
          name: "Soham Patil",
          readiness: 85,
          timeToReady: "6 months",
        },
        {
          name: "Aditya Pharande",
          readiness: 72,
          timeToReady: "12 months",
        },
      ],
    },
    {
      position: "Operations Lead",
      department: "Operations",
      candidates: [
        {
          name: "Neha Kedar",
          readiness: 92,
          timeToReady: "3 months",
        },
        {
          name: "Soham Patil",
          readiness: 78,
          timeToReady: "9 months",
        },
      ],
    },
  ],
  recentActivities: [
    {
      type: "approval",
      message:
        "Approved IDP for Soham Patil - Grid Management certification path",
      timestamp: "2 hours ago",
      priority: "medium",
    },
    {
      type: "completion",
      message: "48 employees completed Q4 skill assessments",
      timestamp: "4 hours ago",
      priority: "low",
    },
    {
      type: "alert",
      message:
        "Budget threshold reached for Engineering L&D (85%)",
      timestamp: "1 day ago",
      priority: "high",
    },
    {
      type: "milestone",
      message:
        "PowerGrid Analytics dashboard launched successfully",
      timestamp: "2 days ago",
      priority: "low",
    },
  ],
  upcomingTasks: [
    {
      task: "Review Q1 2025 learning budget allocations",
      due: "2024-12-30",
      priority: "high",
    },
    {
      task: "Approve pending mentorship matches (13)",
      due: "2025-01-03",
      priority: "medium",
    },
    {
      task: "Complete annual succession planning review",
      due: "2025-01-10",
      priority: "high",
    },
    {
      task: "Analyze Q4 training ROI metrics",
      due: "2025-01-15",
      priority: "medium",
    },
  ],
});

export function HROverview({
  user,
  onViewChange,
}: HROverviewProps) {
  const mockHRData = getMockHRData(user);
  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl mb-2">
              {user.role === "admin" ? "Admin" : "HR"} Dashboard
              - Welcome, {user.name.split(" ")[0]}!
            </h1>
            <p className="opacity-90">
              Managing {mockHRData.teamMetrics.totalEmployees}{" "}
              employees with {mockHRData.teamMetrics.activeIDPs}{" "}
              active development plans
            </p>
          </div>
          <div className="text-right">
            <div className="text-3xl mb-1">
              {mockHRData.teamMetrics.completionRate}%
            </div>
            <div className="text-sm opacity-90">
              IDP Completion Rate
            </div>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 flex items-center space-x-3">
            <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
              <Users className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-2xl">
                {mockHRData.teamMetrics.totalEmployees}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Total Employees
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 flex items-center space-x-3">
            <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
              <Target className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-2xl">
                {mockHRData.teamMetrics.activeIDPs}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Active IDPs
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 flex items-center space-x-3">
            <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
              <TrendingUp className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <p className="text-2xl">
                +{mockHRData.teamMetrics.averageSkillGrow}%
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Avg. Skill Growth
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 flex items-center space-x-3">
            <div className="p-2 bg-orange-100 dark:bg-orange-900 rounded-lg">
              <DollarSign className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <p className="text-2xl">
                {mockHRData.teamMetrics.budgetUtilized}%
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Budget Utilized
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Critical Skill Gaps */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertTriangle className="w-5 h-5 text-orange-600" />
              <span>Critical Skill Gaps</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {mockHRData.skillGaps.map((gap, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm">{gap.skill}</span>
                    <Badge
                      variant={
                        gap.priority === "high"
                          ? "destructive"
                          : "secondary"
                      }
                      className="text-xs"
                    >
                      {gap.priority}
                    </Badge>
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {gap.employeesWithGap} employees
                  </span>
                </div>
                <div className="space-y-1">
                  <Progress
                    value={100 - gap.growthNeeded}
                    className="h-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>
                      Current Level: {100 - gap.growthNeeded}%
                    </span>
                    <span>
                      Growth Needed: +{gap.growthNeeded}%
                    </span>
                  </div>
                </div>
              </div>
            ))}
            <Button
              variant="outline"
              className="w-full mt-4"
              onClick={() => onViewChange("analytics")}
            >
              View Detailed Analytics
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </CardContent>
        </Card>

        {/* Succession Planning */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <UserCheck className="w-5 h-5" />
              <span>Succession Planning</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {mockHRData.successionPlanning.map(
              (position, index) => (
                <div
                  key={index}
                  className="p-3 border rounded-lg"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="text-sm">
                        {position.position}
                      </h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        {position.department}
                      </p>
                    </div>
                    <Badge
                      variant="outline"
                      className="text-xs"
                    >
                      {position.candidates.length} candidates
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    {position.candidates.map(
                      (candidate, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between"
                        >
                          <div className="flex items-center space-x-2">
                            <Avatar className="w-6 h-6">
                              <AvatarFallback className="bg-blue-600 text-white text-xs">
                                {candidate.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <span className="text-sm">
                              {candidate.name}
                            </span>
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-green-600">
                              {candidate.readiness}%
                            </div>
                            <div className="text-xs text-gray-500">
                              {candidate.timeToReady}
                            </div>
                          </div>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              ),
            )}
            <Button variant="outline" className="w-full">
              View Full Succession Plan
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Activity className="w-5 h-5" />
              <span>Recent Activities</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {mockHRData.recentActivities.map(
              (activity, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50"
                >
                  <div
                    className={`p-1.5 rounded-full ${
                      activity.type === "approval"
                        ? "bg-blue-100 dark:bg-blue-900"
                        : activity.type === "completion"
                          ? "bg-green-100 dark:bg-green-900"
                          : activity.type === "alert"
                            ? "bg-red-100 dark:bg-red-900"
                            : "bg-purple-100 dark:bg-purple-900"
                    }`}
                  >
                    {activity.type === "approval" && (
                      <CheckCircle2 className="w-4 h-4 text-blue-600" />
                    )}
                    {activity.type === "completion" && (
                      <Award className="w-4 h-4 text-green-600" />
                    )}
                    {activity.type === "alert" && (
                      <AlertTriangle className="w-4 h-4 text-red-600" />
                    )}
                    {activity.type === "milestone" && (
                      <Target className="w-4 h-4 text-purple-600" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm mb-1">
                      {activity.message}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">
                        {activity.timestamp}
                      </span>
                      <Badge
                        variant={
                          activity.priority === "high"
                            ? "destructive"
                            : activity.priority === "medium"
                              ? "secondary"
                              : "outline"
                        }
                        className="text-xs"
                      >
                        {activity.priority}
                      </Badge>
                    </div>
                  </div>
                </div>
              ),
            )}
          </CardContent>
        </Card>

        {/* Upcoming Tasks */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>Upcoming Tasks</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {mockHRData.upcomingTasks.map((task, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 p-3 border rounded-lg"
              >
                <Clock
                  className={`w-5 h-5 flex-shrink-0 ${
                    task.priority === "high"
                      ? "text-red-600"
                      : task.priority === "medium"
                        ? "text-yellow-600"
                        : "text-blue-600"
                  }`}
                />
                <div className="flex-1">
                  <p className="text-sm mb-1">{task.task}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">
                      Due: {task.due}
                    </span>
                    <Badge
                      variant={
                        task.priority === "high"
                          ? "destructive"
                          : task.priority === "medium"
                            ? "secondary"
                            : "outline"
                      }
                      className="text-xs"
                    >
                      {task.priority}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button
              variant="outline"
              className="flex flex-col items-center space-y-2 h-20"
              onClick={() => onViewChange("analytics")}
            >
              <BarChart3 className="w-6 h-6" />
              <span className="text-sm">View Analytics</span>
            </Button>

            <Button
              variant="outline"
              className="flex flex-col items-center space-y-2 h-20"
              onClick={() => onViewChange("learning")}
            >
              <BookOpen className="w-6 h-6" />
              <span className="text-sm">Manage Learning</span>
            </Button>

            <Button
              variant="outline"
              className="flex flex-col items-center space-y-2 h-20"
            >
              <Users className="w-6 h-6" />
              <span className="text-sm">Team Overview</span>
            </Button>

            <Button
              variant="outline"
              className="flex flex-col items-center space-y-2 h-20"
            >
              <DollarSign className="w-6 h-6" />
              <span className="text-sm">Budget Reports</span>
            </Button>
          </div>
        </CardContent>
      </Card>
      
      <Footer />
    </div>
  );
}