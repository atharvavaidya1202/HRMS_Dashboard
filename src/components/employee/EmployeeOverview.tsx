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
  Target,
  TrendingUp,
  Award,
  Clock,
  BookOpen,
  Users,
  AlertCircle,
  CheckCircle2,
  ArrowRight,
  Brain,
  Star,
  Calendar,
} from "lucide-react";

interface EmployeeOverviewProps {
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

// Mock data for employee's current state
const mockEmployeeData = {
  currentSkills: [
    { name: "Grid Operations", level: 80, target: 90 },
    { name: "Project Management", level: 65, target: 85 },
    { name: "Power System Analysis", level: 55, target: 80 },
    { name: "Leadership", level: 50, target: 75 },
  ],
  recentAchievements: [
    {
      title: "Completed Smart Grid Analytics Certification",
      date: "2024-12-15",
      type: "certification",
    },
    {
      title: "Led Substation Automation Project Successfully",
      date: "2024-12-10",
      type: "milestone",
    },
    {
      title:
        "Mentored 2 Junior Engineers in Transmission Planning",
      date: "2024-12-01",
      type: "mentoring",
    },
  ],
  upcomingDeadlines: [
    {
      title: "Complete Leadership Assessment (PMI Gurgaon)",
      due: "2024-12-30",
      priority: "high",
    },
    {
      title: "Submit Q4 Self-Review - POWERGRID Portal",
      due: "2025-01-05",
      priority: "medium",
    },
    {
      title: "Attend Renewable Energy Integration Workshop",
      due: "2025-01-10",
      priority: "low",
    },
  ],
  recommendations: [
    {
      type: "course",
      title: "Power System Protection and Switchgear",
      description:
        "Strengthen your technical foundation in system protection and meet your skill targets.",
      priority: "high",
      estimatedTime: "4 weeks",
    },
    {
      type: "mentor",
      title:
        "Connect with Senior Manager - Transmission Projects",
      description:
        "Ananya Iyer from POWERGRID can guide you on project execution and strategic planning.",
      priority: "medium",
      estimatedTime: "2 hours/week",
    },
    {
      type: "project",
      title: "Lead Renewable Integration Pilot",
      description:
        "Opportunity to enhance leadership skills while managing integration of solar farms into the regional grid.",
      priority: "high",
      estimatedTime: "8 weeks",
    },
  ],
};

export function EmployeeOverview({
  user,
  onViewChange,
}: EmployeeOverviewProps) {
  const overallProgress = Math.round(
    mockEmployeeData.currentSkills.reduce(
      (acc, skill) => acc + skill.level,
      0,
    ) / mockEmployeeData.currentSkills.length,
  );

  const targetProgress = Math.round(
    mockEmployeeData.currentSkills.reduce(
      (acc, skill) => acc + skill.target,
      0,
    ) / mockEmployeeData.currentSkills.length,
  );

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl mb-2">
              Welcome back, {user.name.split(" ")[0]}!
            </h1>
            <p className="opacity-90">
              Your development journey continues. You're{" "}
              {overallProgress}% towards your current goals.
            </p>
          </div>
          <div className="text-right">
            <div className="text-3xl mb-1">
              {overallProgress}%
            </div>
            <div className="text-sm opacity-90">
              Overall Progress
            </div>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 flex items-center space-x-3">
            <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
              <Target className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-2xl">
                {mockEmployeeData.currentSkills.length}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Active Skills
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 flex items-center space-x-3">
            <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-2xl">{overallProgress}%</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Current Level
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 flex items-center space-x-3">
            <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
              <Award className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <p className="text-2xl">
                {mockEmployeeData.recentAchievements.length}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Recent Wins
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 flex items-center space-x-3">
            <div className="p-2 bg-orange-100 dark:bg-orange-900 rounded-lg">
              <Clock className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <p className="text-2xl">
                {mockEmployeeData.upcomingDeadlines.length}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Due Items
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Skills Progress */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Target className="w-5 h-5" />
              <span>Skill Development Progress</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {mockEmployeeData.currentSkills.map(
              (skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">
                      {skill.name}
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {skill.level}% / {skill.target}%
                    </span>
                  </div>
                  <div className="space-y-1">
                    <Progress
                      value={skill.level}
                      className="h-2"
                    />
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Current</span>
                      <span>Target: {skill.target}%</span>
                    </div>
                  </div>
                </div>
              ),
            )}
            <Button
              variant="outline"
              className="w-full mt-4"
              onClick={() => onViewChange("profile")}
            >
              View Full Skill Profile
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </CardContent>
        </Card>

        {/* AI Recommendations */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Brain className="w-5 h-5" />
              <span>AI Recommendations</span>
              <Badge variant="secondary" className="ml-auto">
                Personalized
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {mockEmployeeData.recommendations
              .slice(0, 2)
              .map((rec, index) => (
                <div
                  key={index}
                  className="p-3 border rounded-lg"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      {rec.type === "course" && (
                        <BookOpen className="w-4 h-4 text-blue-600" />
                      )}
                      {rec.type === "mentor" && (
                        <Users className="w-4 h-4 text-green-600" />
                      )}
                      {rec.type === "project" && (
                        <Target className="w-4 h-4 text-purple-600" />
                      )}
                      <span className="text-sm">
                        {rec.title}
                      </span>
                    </div>
                    <Badge
                      variant={
                        rec.priority === "high"
                          ? "destructive"
                          : "secondary"
                      }
                      className="text-xs"
                    >
                      {rec.priority}
                    </Badge>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                    {rec.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">
                      ⏱ {rec.estimatedTime}
                    </span>
                    <Button size="sm" variant="outline">
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            <Button
              className="w-full"
              onClick={() => onViewChange("learning")}
            >
              View All Recommendations
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Achievements */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Award className="w-5 h-5" />
              <span>Recent Achievements</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {mockEmployeeData.recentAchievements.map(
              (achievement, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm">
                      {achievement.title}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {achievement.date}
                    </p>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {achievement.type}
                  </Badge>
                </div>
              ),
            )}
          </CardContent>
        </Card>

        {/* Upcoming Deadlines */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>Upcoming Deadlines</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {mockEmployeeData.upcomingDeadlines.map(
              (deadline, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-3 border rounded-lg"
                >
                  <AlertCircle
                    className={`w-5 h-5 flex-shrink-0 ${
                      deadline.priority === "high"
                        ? "text-red-600"
                        : deadline.priority === "medium"
                          ? "text-yellow-600"
                          : "text-blue-600"
                    }`}
                  />
                  <div className="flex-1">
                    <p className="text-sm">{deadline.title}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Due: {deadline.due}
                    </p>
                  </div>
                  <Badge
                    variant={
                      deadline.priority === "high"
                        ? "destructive"
                        : deadline.priority === "medium"
                          ? "secondary"
                          : "outline"
                    }
                    className="text-xs"
                  >
                    {deadline.priority}
                  </Badge>
                </div>
              ),
            )}
          </CardContent>
        </Card>
      </div>
      
      <Footer />
    </div>
  );
}