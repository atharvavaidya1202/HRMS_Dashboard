import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Input } from "../ui/input";
import { Avatar, AvatarFallback } from "../ui/avatar";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { User } from "../../App";
import {
  BookOpen,
  Users,
  DollarSign,
  CheckCircle2,
  Clock,
  Search,
  Plus,
  Edit,
  Trash2,
  Award,
  TrendingUp,
  AlertTriangle,
  Target,
  Calendar,
  Filter,
} from "lucide-react";

interface HRLearningProps {
  user: User;
}

const getMockHRLearningData = (user: User) => ({
  budgetOverview: {
    totalBudget: user.role === 'admin' ? 7000000 : 3500000,
    allocated: user.role === 'admin' ? 5150000 : 2575000,
    spent: user.role === 'admin' ? 3670000 : 1835000,
    remaining: user.role === 'admin' ? 3330000 : 1665000,
    quarterlyBreakdown: [
      {
        quarter: "Q1",
        budget: user.role === 'admin' ? 1650000 : 825000,
        spent: user.role === 'admin' ? 1525000 : 762500,
        utilization: 92.5,
      },
      {
        quarter: "Q2",
        budget: user.role === 'admin' ? 1650000 : 825000,
        spent: user.role === 'admin' ? 1470000 : 735000,
        utilization: 89.0,
      },
      {
        quarter: "Q3",
        budget: user.role === 'admin' ? 1850000 : 925000,
        spent: user.role === 'admin' ? 1635000 : 817500,
        utilization: 88.0,
      },
      {
        quarter: "Q4",
        budget: user.role === 'admin' ? 1850000 : 925000,
        spent: user.role === 'admin' ? 690000 : 345000,
        utilization: 37.3,
      },
    ],
  },
  pendingApprovals: [
    {
      id: 1,
      employee: "Soham Patil",
      department: "Engineering",
      request: "Advanced Grid Management Certification",
      cost: 28800,
      priority: "high",
      submittedDate: "2024-12-20",
      justification:
        "Essential for upcoming substation optimization project",
    },
    {
      id: 2,
      employee: "Aditya Pharande",
      department: "Operations",
      request: "Electrical Safety Workshop",
      cost: 9900,
      priority: "medium",
      submittedDate: "2024-12-19",
      justification:
        "Improve compliance with safety protocols across sites",
    },
    {
      id: 3,
      employee: "Neha Kedar",
      department: "Planning",
      request: "Renewable Integration Bootcamp",
      cost: 23100,
      priority: "high",
      submittedDate: "2024-12-18",
      justification:
        "Support PowerGrid’s renewable energy integration roadmap",
    },
  ],
  courseLibrary: [
    {
      id: 1,
      title: "Leadership Essentials for Managers",
      provider: "LinkedIn Learning",
      category: "Leadership",
      enrolled: 23,
      completed: 18,
      rating: 4.7,
      cost: 240,
      duration: "4 hours",
      active: true,
    },
    {
      id: 2,
      title: "Power Systems Analysis with Python",
      provider: "Coursera",
      category: "Technical",
      enrolled: 15,
      completed: 12,
      rating: 4.5,
      cost: 405,
      duration: "8 weeks",
      active: true,
    },
    {
      id: 3,
      title: "Advanced Project Management for Utilities",
      provider: "PMI",
      category: "Leadership",
      enrolled: 8,
      completed: 5,
      rating: 4.8,
      cost: 2465,
      duration: "12 weeks",
      active: true,
    },
  ],
  mentorshipProgram: {
    totalPairs: 45,
    activePairs: 38,
    pendingMatches: 7,
    successRate: 84,
    averageRating: 4.6,
    recentMatches: [
      {
        mentor: "Aditya Pharande",
        mentee: "Soham Patil",
        skillFocus: "Electrical Systems & Safety",
        matchDate: "2024-12-20",
        status: "active",
      },
      {
        mentor: "Neha Kedar",
        mentee: "Atharva Vaidya",
        skillFocus: "Grid Operations Optimization",
        matchDate: "2024-12-18",
        status: "active",
      },
      {
        mentor: "Soham Patil",
        mentee: "Neha Kedar",
        skillFocus: "Renewable Energy Integration",
        matchDate: "2024-12-15",
        status: "pending",
      },
    ],
  },
  trainingMetrics: [
    {
      metric: "Course Completion Rate",
      value: "78%",
      trend: "+5%",
      status: "good",
    },
    {
      metric: "Average Training Score",
      value: "4.2/5",
      trend: "+0.3",
      status: "good",
    },
    {
      metric: "Skill Improvement Rate",
      value: "15%",
      trend: "+2%",
      status: "excellent",
    },
    {
      metric: "Training Satisfaction",
      value: "89%",
      trend: "-1%",
      status: "good",
    },
  ],
});

export function HRLearning({ user }: HRLearningProps) {
  const mockHRLearningData = getMockHRLearningData(user);
  const [selectedTab, setSelectedTab] = useState("budget");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");

  const handleApproveRequest = (requestId: number) => {
    // In a real app, this would make an API call
    console.log(`Approved request ${requestId}`);
  };

  const handleRejectRequest = (requestId: number) => {
    // In a real app, this would make an API call
    console.log(`Rejected request ${requestId}`);
  };

  const filteredCourses =
    mockHRLearningData.courseLibrary.filter(
      (course) =>
        course.title
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) &&
        (filterCategory === "all" ||
          course.category.toLowerCase() ===
            filterCategory.toLowerCase()),
    );

  const totalBudgetUtilization = Math.round(
    (mockHRLearningData.budgetOverview.spent /
      mockHRLearningData.budgetOverview.totalBudget) *
      100,
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl mb-2">
            Learning & Development Management
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage training programs, approve requests, and
            track team development progress
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge
            variant="secondary"
            className="flex items-center space-x-1"
          >
            <DollarSign className="w-4 h-4" />
            <span>{totalBudgetUtilization}% budget used</span>
          </Badge>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Add Course
          </Button>
        </div>
      </div>

      <Tabs
        value={selectedTab}
        onValueChange={setSelectedTab}
        className="space-y-4"
      >
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="budget">Budget & ROI</TabsTrigger>
          <TabsTrigger value="approvals">
            Pending Approvals
          </TabsTrigger>
          <TabsTrigger value="library">
            Course Library
          </TabsTrigger>
          <TabsTrigger value="mentorship">
            Mentorship
          </TabsTrigger>
          <TabsTrigger value="metrics">
            Training Metrics
          </TabsTrigger>
        </TabsList>

        <TabsContent value="budget" className="space-y-6">
          {/* Budget Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl text-blue-600 mb-1">
                  ₹{(
                    mockHRLearningData.budgetOverview
                      .totalBudget / 100000
                  ).toFixed(1)} lakhs
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Total Budget
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl text-green-600 mb-1">
                  ₹{(
                    mockHRLearningData.budgetOverview
                      .allocated / 100000
                  ).toFixed(1)} lakhs
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Allocated
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl text-orange-600 mb-1">
                  ₹{(
                    mockHRLearningData.budgetOverview.spent /
                    100000
                  ).toFixed(1)} lakhs
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Spent
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl text-purple-600 mb-1">
                  ₹{(
                    mockHRLearningData.budgetOverview
                      .remaining / 100000
                  ).toFixed(1)} lakhs
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Remaining
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quarterly Budget Breakdown */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <DollarSign className="w-5 h-5" />
                <span>Quarterly Budget Utilization</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockHRLearningData.budgetOverview.quarterlyBreakdown.map(
                  (quarter, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">
                          {quarter.quarter}
                        </span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          ₹{(quarter.spent / 100000).toFixed(1)} lakhs
                          / ₹
                          {(quarter.budget / 100000).toFixed(1)} lakhs
                          ({quarter.utilization}%)
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${
                            quarter.utilization > 90
                              ? "bg-green-600"
                              : quarter.utilization > 70
                                ? "bg-yellow-600"
                                : "bg-blue-600"
                          }`}
                          style={{
                            width: `${Math.min(quarter.utilization, 100)}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  ),
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="approvals" className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg">
              Training Requests Pending Approval
            </h3>
            <Badge variant="secondary">
              {mockHRLearningData.pendingApprovals.length}{" "}
              pending
            </Badge>
          </div>

          <div className="space-y-4">
            {mockHRLearningData.pendingApprovals.map(
              (request) => (
                <Card key={request.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <Avatar className="w-10 h-10">
                            <AvatarFallback className="bg-blue-600 text-white">
                              {request.employee
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="text-lg">
                              {request.employee}
                            </h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {request.department}
                            </p>
                          </div>
                        </div>

                        <h5 className="mb-2">
                          {request.request}
                        </h5>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                          {request.justification}
                        </p>

                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>
                            Submitted: {request.submittedDate}
                          </span>
                          <span>•</span>
                          <span>
                            Cost: ₹
                            {request.cost.toLocaleString()}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <Badge
                          variant={
                            request.priority === "high"
                              ? "destructive"
                              : "secondary"
                          }
                          className="mb-2"
                        >
                          {request.priority} priority
                        </Badge>
                      </div>
                    </div>

                    <div className="flex items-center justify-end space-x-2 pt-4 border-t">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() =>
                          handleRejectRequest(request.id)
                        }
                      >
                        Reject
                      </Button>
                      <Button
                        size="sm"
                        onClick={() =>
                          handleApproveRequest(request.id)
                        }
                      >
                        <CheckCircle2 className="w-4 h-4 mr-2" />
                        Approve
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ),
            )}
          </div>
        </TabsContent>

        <TabsContent value="library" className="space-y-4">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex-1">
              <Input
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
            <Select
              value={filterCategory}
              onValueChange={setFilterCategory}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">
                  All Categories
                </SelectItem>
                <SelectItem value="technical">
                  Technical
                </SelectItem>
                <SelectItem value="leadership">
                  Leadership
                </SelectItem>
                <SelectItem value="analytical">
                  Analytical
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCourses.map((course) => (
              <Card key={course.id}>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <Badge
                      variant="outline"
                      className="text-xs"
                    >
                      {course.category}
                    </Badge>
                    <div className="flex items-center space-x-1 text-sm">
                      <Award className="w-4 h-4 text-yellow-600" />
                      <span>{course.rating}</span>
                    </div>
                  </div>

                  <h4 className="mb-2">{course.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    {course.provider}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span>Enrolled: {course.enrolled}</span>
                      <span>Completed: {course.completed}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Duration: {course.duration}</span>
                      <span>Cost: ₹{course.cost}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <Badge
                      variant={
                        course.active ? "default" : "secondary"
                      }
                      className={
                        course.active ? "bg-green-600" : ""
                      }
                    >
                      {course.active ? "Active" : "Inactive"}
                    </Badge>
                    <div className="flex space-x-1">
                      <Button size="sm" variant="outline">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="mentorship" className="space-y-6">
          {/* Mentorship Program Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl text-blue-600 mb-1">
                  {
                    mockHRLearningData.mentorshipProgram
                      .totalPairs
                  }
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Total Pairs
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl text-green-600 mb-1">
                  {
                    mockHRLearningData.mentorshipProgram
                      .activePairs
                  }
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Active Pairs
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl text-orange-600 mb-1">
                  {
                    mockHRLearningData.mentorshipProgram
                      .pendingMatches
                  }
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Pending Matches
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl text-purple-600 mb-1">
                  {
                    mockHRLearningData.mentorshipProgram
                      .successRate
                  }
                  %
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Success Rate
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Mentorship Matches */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>Recent Mentorship Matches</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {mockHRLearningData.mentorshipProgram.recentMatches.map(
                (match, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 border rounded-lg"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <Avatar className="w-8 h-8">
                          <AvatarFallback className="bg-green-600 text-white text-sm">
                            {match.mentor
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-sm">
                          {match.mentor}
                        </span>
                      </div>
                      <div className="text-gray-400">→</div>
                      <div className="flex items-center space-x-2">
                        <Avatar className="w-8 h-8">
                          <AvatarFallback className="bg-blue-600 text-white text-sm">
                            {match.mentee
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-sm">
                          {match.mentee}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm mb-1">
                        {match.skillFocus}
                      </p>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-gray-500">
                          {match.matchDate}
                        </span>
                        <Badge
                          variant={
                            match.status === "active"
                              ? "default"
                              : "secondary"
                          }
                          className={
                            match.status === "active"
                              ? "bg-green-600"
                              : ""
                          }
                        >
                          {match.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ),
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="metrics" className="space-y-6">
          {/* Training Metrics Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {mockHRLearningData.trainingMetrics.map(
              (metric, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {metric.metric}
                      </div>
                      <div
                        className={`flex items-center space-x-1 text-xs ${
                          metric.status === "excellent"
                            ? "text-green-600"
                            : metric.status === "good"
                              ? "text-blue-600"
                              : "text-yellow-600"
                        }`}
                      >
                        <TrendingUp className="w-3 h-3" />
                        <span>{metric.trend}</span>
                      </div>
                    </div>
                    <div className="text-2xl mb-1">
                      {metric.value}
                    </div>
                    <Badge
                      variant={
                        metric.status === "excellent"
                          ? "default"
                          : metric.status === "good"
                            ? "secondary"
                            : "outline"
                      }
                      className={
                        metric.status === "excellent"
                          ? "bg-green-600"
                          : ""
                      }
                    >
                      {metric.status}
                    </Badge>
                  </CardContent>
                </Card>
              ),
            )}
          </div>

          {/* Additional Metrics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>
                  Training Completion Trends
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">
                      Technical Training
                    </span>
                    <span className="text-sm">
                      85% completion
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: "85%" }}
                    ></div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm">
                      Leadership Training
                    </span>
                    <span className="text-sm">
                      72% completion
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-purple-600 h-2 rounded-full"
                      style={{ width: "72%" }}
                    ></div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm">
                      Soft Skills Training
                    </span>
                    <span className="text-sm">
                      91% completion
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-green-600 h-2 rounded-full"
                      style={{ width: "91%" }}
                    ></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>
                  Learning Impact Assessment
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <span className="text-sm">
                      High Impact Programs
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Leadership Bootcamp, Data Science
                    Certification showing 20%+ skill improvement
                  </p>
                </div>

                <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <AlertTriangle className="w-5 h-5 text-yellow-600" />
                    <span className="text-sm">
                      Areas for Improvement
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Communication skills training needs better
                    engagement strategies
                  </p>
                </div>

                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Target className="w-5 h-5 text-blue-600" />
                    <span className="text-sm">
                      Recommended Actions
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Increase practical workshops, add peer
                    learning components
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}