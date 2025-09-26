import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../ui/tabs";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Area,
  AreaChart,
} from "recharts";
import { User } from "../../App";
import {
  BarChart3,
  TrendingUp,
  Users,
  Target,
  DollarSign,
  Download,
  Filter,
  Calendar,
  PieChart as PieChartIcon,
  Activity,
  Award,
  AlertTriangle,
} from "lucide-react";

interface HRAnalyticsProps {
  user: User;
}

const getMockAnalyticsData = (user: User) => ({
  skillDistribution: [
    {
      name: "Technical",
      current: 78,
      target: 85,
      employees: user.role === 'admin' ? 156 : 78,
    },
    {
      name: "Leadership",
      current: 65,
      target: 80,
      employees: user.role === 'admin' ? 89 : 44,
    },
    {
      name: "Analytical",
      current: 70,
      target: 75,
      employees: user.role === 'admin' ? 134 : 67,
    },
    {
      name: "Creative",
      current: 82,
      target: 85,
      employees: user.role === 'admin' ? 67 : 33,
    },
    {
      name: "Communication",
      current: 88,
      target: 90,
      employees: user.role === 'admin' ? 198 : 99,
    },
  ],
  skillProgressTrend: [
    {
      month: "Jul",
      technical: 72,
      leadership: 58,
      analytical: 65,
      creative: 78,
    },
    {
      month: "Aug",
      technical: 74,
      leadership: 61,
      analytical: 67,
      creative: 79,
    },
    {
      month: "Sep",
      technical: 76,
      leadership: 63,
      analytical: 68,
      creative: 80,
    },
    {
      month: "Oct",
      technical: 77,
      leadership: 64,
      analytical: 69,
      creative: 81,
    },
    {
      month: "Nov",
      technical: 78,
      leadership: 65,
      analytical: 70,
      creative: 82,
    },
    {
      month: "Dec",
      technical: 78,
      leadership: 65,
      analytical: 70,
      creative: 82,
    },
  ],
  departmentBreakdown: [
    { name: "Grid Operations", value: 89, color: "#3B82F6" },
    { name: "Transmission Projects", value: 34, color: "#8B5CF6" },
    { name: "Power System Planning", value: 28, color: "#10B981" },
    { name: "Renewable Integration", value: 45, color: "#F59E0B" },
    { name: "Protection & Control", value: 51, color: "#EF4444" },
  ],
  trainingROI: [
    {
      month: "Q1",
      invested: 1025000,
      returned: 2370000,
      roi: 230,
    },
    {
      month: "Q2",
      invested: 1218000,
      returned: 2754000,
      roi: 226,
    },
    {
      month: "Q3",
      invested: 1334000,
      returned: 3206000,
      roi: 240,
    },
    {
      month: "Q4",
      invested: 1442000,
      returned: 3576000,
      roi: 248,
    },
  ],
  topPerformers: [
    {
      name: "Atharva Vaidya",
      department: "Grid Operations",
      growthRate: 25,
      completedGoals: 8,
    },
    {
      name: "Shashank Ponna",
      department: "Human Resources",
      growthRate: 22,
      completedGoals: 7,
    },
    {
      name: "Vivek Dalimbkar",
      department: "Corporate Administration",
      growthRate: 20,
      completedGoals: 6,
    },
    {
      name: "Soham Patil",
      department: "Power System Planning",
      growthRate: 19,
      completedGoals: 7,
    },
    {
      name: "Aditya Pharande",
      department: "Transmission Projects",
      growthRate: 18,
      completedGoals: 5,
    },
    {
      name: "Neha Kedar",
      department: "Renewable Integration",
      growthRate: 17,
      completedGoals: 5,
    },
  ],
  atRiskEmployees: [
    {
      name: "Rohit Sharma",
      department: "Renewable Integration",
      riskScore: 85,
      lastActivity: "15 days ago",
      reason: "Low engagement",
    },
    {
      name: "Amit Joshi",
      department: "Protection & Control",
      riskScore: 78,
      lastActivity: "12 days ago",
      reason: "Missed deadlines",
    },
    {
      name: "Kiran Deshmukh",
      department: "Grid Operations",
      riskScore: 72,
      lastActivity: "8 days ago",
      reason: "Skill stagnation",
    },
  ],
});

const COLORS = [
  "#3B82F6",
  "#8B5CF6",
  "#10B981",
  "#F59E0B",
  "#EF4444",
];

export function HRAnalytics({ user }: HRAnalyticsProps) {
  const mockAnalyticsData = getMockAnalyticsData(user);
  const [selectedTimeRange, setSelectedTimeRange] =
    useState("6months");
  const [selectedDepartment, setSelectedDepartment] =
    useState("all");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl mb-2">
            Workforce Analytics Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Comprehensive insights into team development, skill
            gaps, and training ROI
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <Select
            value={selectedTimeRange}
            onValueChange={setSelectedTimeRange}
          >
            <SelectTrigger className="w-[140px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="3months">
                Last 3 Months
              </SelectItem>
              <SelectItem value="6months">
                Last 6 Months
              </SelectItem>
              <SelectItem value="1year">Last Year</SelectItem>
              <SelectItem value="2years">
                Last 2 Years
              </SelectItem>
            </SelectContent>
          </Select>
          <Select
            value={selectedDepartment}
            onValueChange={setSelectedDepartment}
          >
            <SelectTrigger className="w-[140px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">
                All Departments
              </SelectItem>
              <SelectItem value="engineering">
                Engineering
              </SelectItem>
              <SelectItem value="product">Product</SelectItem>
              <SelectItem value="design">Design</SelectItem>
              <SelectItem value="marketing">
                Marketing
              </SelectItem>
              <SelectItem value="sales">Sales</SelectItem>
            </SelectContent>
          </Select>
          <Button
            variant="outline"
            className="flex items-center space-x-2"
          >
            <Download className="w-4 h-4" />
            <span>Export</span>
          </Button>
        </div>
      </div>

      {/* Hero Analytics Image */}
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className="relative h-48 bg-gradient-to-r from-blue-600 to-purple-600">
            <img
              src="https://images.unsplash.com/photo-1748609160056-7b95f30041f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGFuYWx5dGljcyUyMGRhc2hib2FyZCUyMGNoYXJ0c3xlbnwxfHx8fDE3NTg3NzU5NjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Analytics Dashboard"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <BarChart3 className="w-16 h-16 mx-auto mb-4" />
                <h2 className="text-2xl mb-2">
                  Real-Time Workforce Intelligence
                </h2>
                <p className="opacity-90">
                  AI-powered insights driving strategic people
                  decisions
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="skills">
            Skills Analysis
          </TabsTrigger>
          <TabsTrigger value="performance">
            Performance
          </TabsTrigger>
          <TabsTrigger value="roi">Training ROI</TabsTrigger>
          <TabsTrigger value="risks">
            Risk Management
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Skill Distribution */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="w-5 h-5" />
                  <span>Current vs Target Skill Levels</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart
                    data={mockAnalyticsData.skillDistribution}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar
                      dataKey="current"
                      fill="#3B82F6"
                      name="Current Level"
                    />
                    <Bar
                      dataKey="target"
                      fill="#8B5CF6"
                      name="Target Level"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Department Distribution */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <PieChartIcon className="w-5 h-5" />
                  <span>Team Distribution by Department</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={
                        mockAnalyticsData.departmentBreakdown
                      }
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, value }) =>
                        `${name}: ${value}`
                      }
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {mockAnalyticsData.departmentBreakdown.map(
                        (entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ),
                      )}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Skill Progress Trend */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5" />
                <span>Skill Development Trends (6 Months)</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart
                  data={mockAnalyticsData.skillProgressTrend}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="technical"
                    stroke="#3B82F6"
                    name="Technical"
                  />
                  <Line
                    type="monotone"
                    dataKey="leadership"
                    stroke="#8B5CF6"
                    name="Leadership"
                  />
                  <Line
                    type="monotone"
                    dataKey="analytical"
                    stroke="#10B981"
                    name="Analytical"
                  />
                  <Line
                    type="monotone"
                    dataKey="creative"
                    stroke="#F59E0B"
                    name="Creative"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="skills" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>
                  Critical Skill Gaps by Department
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    dept: "Engineering",
                    skill: "Data Analysis",
                    gap: 23,
                    employees: 15,
                  },
                  {
                    dept: "Engineering",
                    skill: "Leadership",
                    gap: 20,
                    employees: 12,
                  },
                  {
                    dept: "Product",
                    skill: "Technical Skills",
                    gap: 18,
                    employees: 8,
                  },
                  {
                    dept: "Marketing",
                    skill: "Analytics",
                    gap: 25,
                    employees: 18,
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 border rounded-lg"
                  >
                    <div>
                      <p className="text-sm">
                        {item.dept} - {item.skill}
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        {item.employees} employees affected
                      </p>
                    </div>
                    <div className="text-right">
                      <Badge
                        variant="destructive"
                        className="text-xs"
                      >
                        -{item.gap}%
                      </Badge>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>
                  Skill Development Recommendations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  {
                    action: "Launch Data Science Bootcamp",
                    impact: "High",
                    timeline: "8 weeks",
                  },
                  {
                    action:
                      "Expand Leadership Mentorship Program",
                    impact: "Medium",
                    timeline: "12 weeks",
                  },
                  {
                    action: "Technical Skills Workshop Series",
                    impact: "High",
                    timeline: "6 weeks",
                  },
                  {
                    action: "Analytics Certification Program",
                    impact: "Medium",
                    timeline: "10 weeks",
                  },
                ].map((rec, index) => (
                  <div
                    key={index}
                    className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm">{rec.action}</h4>
                      <Badge
                        variant={
                          rec.impact === "High"
                            ? "destructive"
                            : "secondary"
                        }
                      >
                        {rec.impact} Impact
                      </Badge>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Timeline: {rec.timeline}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="performance" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Top Performers */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-yellow-600" />
                  <span>Top Performers</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {mockAnalyticsData.topPerformers.map(
                  (performer, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-lg"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white text-sm">
                          {index + 1}
                        </div>
                        <div>
                          <p className="text-sm">
                            {performer.name}
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            {performer.department}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-green-600">
                          +{performer.growthRate}%
                        </p>
                        <p className="text-xs text-gray-500">
                          {performer.completedGoals} goals
                        </p>
                      </div>
                    </div>
                  ),
                )}
              </CardContent>
            </Card>

            {/* Performance Metrics */}
            <Card>
              <CardHeader>
                <CardTitle>
                  Key Performance Indicators
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-center">
                    <div className="text-2xl text-blue-600 mb-1">
                      78%
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      IDP Completion
                    </div>
                  </div>
                  <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg text-center">
                    <div className="text-2xl text-green-600 mb-1">
                      +15%
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Avg. Skill Growth
                    </div>
                  </div>
                  <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg text-center">
                    <div className="text-2xl text-purple-600 mb-1">
                      4.2
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Training Rating
                    </div>
                  </div>
                  <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg text-center">
                    <div className="text-2xl text-orange-600 mb-1">
                      89%
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Employee Satisfaction
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="roi" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <DollarSign className="w-5 h-5" />
                <span>Training ROI Analysis</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={mockAnalyticsData.trainingROI}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip
                    formatter={(value, name) => [
                      name === "roi"
                        ? `${value}%`
                        : `₹${(value / 100000).toFixed(1)} lakhs`,
                      name === "invested"
                        ? "Invested"
                        : name === "returned"
                          ? "Returned"
                          : "ROI",
                    ]}
                  />
                  <Area
                    type="monotone"
                    dataKey="invested"
                    stackId="1"
                    stroke="#EF4444"
                    fill="#EF4444"
                  />
                  <Area
                    type="monotone"
                    dataKey="returned"
                    stackId="2"
                    stroke="#10B981"
                    fill="#10B981"
                  />
                  <Line
                    type="monotone"
                    dataKey="roi"
                    stroke="#3B82F6"
                    strokeWidth={3}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl mb-1 text-green-600">
                  ₹1.36 crore
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Total Value Generated
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl mb-1 text-blue-600">
                  ₹50.2 lakhs
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Training Investment
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl mb-1 text-purple-600">
                  270%
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Average ROI
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="risks" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertTriangle className="w-5 h-5 text-red-600" />
                <span>At-Risk Employees</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {mockAnalyticsData.atRiskEmployees.map(
                (employee, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 border rounded-lg bg-red-50 dark:bg-red-900/20"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                      <div>
                        <p className="text-sm">
                          {employee.name}
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          {employee.department}
                        </p>
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-red-600">
                        Risk Score: {employee.riskScore}%
                      </p>
                      <p className="text-xs text-gray-500">
                        {employee.reason}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500">
                        {employee.lastActivity}
                      </p>
                      <Button size="sm" variant="outline">
                        Intervene
                      </Button>
                    </div>
                  </div>
                ),
              )}
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>
                  Risk Mitigation Strategies
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  {
                    strategy:
                      "Personalized Re-engagement Program",
                    impact: "High",
                  },
                  {
                    strategy: "Skill Development Fast-Track",
                    impact: "Medium",
                  },
                  {
                    strategy: "Manager Check-in Protocol",
                    impact: "High",
                  },
                  {
                    strategy: "Peer Mentorship Assignment",
                    impact: "Medium",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="p-3 border rounded-lg"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm">
                        {item.strategy}
                      </span>
                      <Badge
                        variant={
                          item.impact === "High"
                            ? "destructive"
                            : "secondary"
                        }
                      >
                        {item.impact}
                      </Badge>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Early Warning Indicators</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">
                      Engagement Score Drop
                    </span>
                    <span className="text-sm text-red-600">
                      -15%
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">
                      Training Completion Rate
                    </span>
                    <span className="text-sm text-yellow-600">
                      -8%
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">
                      Goal Achievement Rate
                    </span>
                    <span className="text-sm text-red-600">
                      -22%
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">
                      Peer Interaction
                    </span>
                    <span className="text-sm text-yellow-600">
                      -12%
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}