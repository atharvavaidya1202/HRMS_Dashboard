import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Footer } from '../Footer';
import { User } from '../../App';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ScatterChart,
  Scatter
} from 'recharts';
import {
  TrendingUp,
  Users,
  DollarSign,
  Target,
  Building2,
  BarChart3,
  PieChart as PieIcon,
  Activity,
  Crown,
  Globe,
  Zap,
  Filter,
  Download
} from 'lucide-react';

interface AdminAnalyticsProps {
  user: User;
}

export function AdminAnalytics({ user }: AdminAnalyticsProps) {
  const [selectedTimeframe, setSelectedTimeframe] = useState('12months');
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  // Comprehensive organizational performance data
  const performanceTrends = [
    { month: 'Jan 2024', overall: 78, gridOps: 82, transmission: 76, renewables: 80, it: 74, hr: 79, finance: 77 },
    { month: 'Feb 2024', overall: 80, gridOps: 84, transmission: 78, renewables: 82, it: 76, hr: 81, finance: 79 },
    { month: 'Mar 2024', overall: 82, gridOps: 86, transmission: 80, renewables: 84, it: 78, hr: 83, finance: 81 },
    { month: 'Apr 2024', overall: 84, gridOps: 88, transmission: 82, renewables: 86, it: 80, hr: 85, finance: 83 },
    { month: 'May 2024', overall: 86, gridOps: 90, transmission: 84, renewables: 88, it: 82, hr: 87, finance: 85 },
    { month: 'Jun 2024', overall: 87, gridOps: 91, transmission: 85, renewables: 89, it: 83, hr: 88, finance: 86 },
    { month: 'Jul 2024', overall: 89, gridOps: 93, transmission: 87, renewables: 91, it: 85, hr: 90, finance: 88 },
    { month: 'Aug 2024', overall: 90, gridOps: 94, transmission: 88, renewables: 92, it: 86, hr: 91, finance: 89 },
    { month: 'Sep 2024', overall: 91, gridOps: 95, transmission: 89, renewables: 93, it: 87, hr: 92, finance: 90 },
    { month: 'Oct 2024', overall: 92, gridOps: 96, transmission: 90, renewables: 94, it: 88, hr: 93, finance: 91 },
    { month: 'Nov 2024', overall: 93, gridOps: 97, transmission: 91, renewables: 95, it: 89, hr: 94, finance: 92 },
    { month: 'Dec 2024', overall: 94, gridOps: 98, transmission: 92, renewables: 96, it: 90, hr: 95, finance: 93 }
  ];

  const budgetAnalysis = [
    { department: 'Grid Operations', allocated: 68.4, utilized: 53.8, efficiency: 78.7, roi: 142 },
    { department: 'Transmission', allocated: 54.2, utilized: 42.6, efficiency: 78.6, roi: 128 },
    { department: 'Renewables', allocated: 42.8, utilized: 35.9, efficiency: 83.9, roi: 156 },
    { department: 'IT & Digital', allocated: 38.6, utilized: 30.2, efficiency: 78.2, roi: 134 },
    { department: 'Human Resources', allocated: 22.4, utilized: 19.5, efficiency: 87.1, roi: 118 },
    { department: 'Finance & Audit', allocated: 19.4, utilized: 15.8, efficiency: 81.4, roi: 122 }
  ];

  const skillMatrixData = [
    { skill: 'Grid Operations', current: 85, target: 90, gap: -5, employees: 3247 },
    { skill: 'Power Systems', current: 82, target: 88, gap: -6, employees: 2856 },
    { skill: 'Renewable Integration', current: 78, target: 85, gap: -7, employees: 1923 },
    { skill: 'Digital Systems', current: 76, target: 82, gap: -6, employees: 1456 },
    { skill: 'Project Management', current: 74, target: 85, gap: -11, employees: 4523 },
    { skill: 'Leadership', current: 71, target: 80, gap: -9, employees: 2847 },
    { skill: 'Data Analytics', current: 69, target: 78, gap: -9, employees: 1678 },
    { skill: 'Compliance', current: 88, target: 92, gap: -4, employees: 3456 }
  ];

  const departmentComparison = [
    { name: 'Grid Ops', performance: 98, employees: 3247, budget: 68.4, satisfaction: 92 },
    { name: 'Transmission', performance: 92, employees: 2856, budget: 54.2, satisfaction: 89 },
    { name: 'Renewables', performance: 96, employees: 1923, budget: 42.8, satisfaction: 94 },
    { name: 'IT & Digital', performance: 90, employees: 1456, budget: 38.6, satisfaction: 88 },
    { name: 'HR', performance: 95, employees: 847, budget: 22.4, satisfaction: 91 },
    { name: 'Finance', performance: 93, employees: 726, budget: 19.4, satisfaction: 87 }
  ];

  const hrManagersAnalysis = [
    { name: 'Shashank Ponna', department: 'HR Operations', performance: 95, efficiency: 91, teamGrowth: 18, budgetROI: 142, employees: 100 },
    { name: 'Anjali Sharma', department: 'Talent Dev', performance: 89, efficiency: 87, teamGrowth: 15, budgetROI: 128, employees: 95 },
    { name: 'Ravi Patil', department: 'Learning', performance: 92, efficiency: 85, teamGrowth: 16, budgetROI: 135, employees: 88 },
    { name: 'Meera Singh', department: 'Compensation', performance: 88, efficiency: 82, teamGrowth: 12, budgetROI: 118, employees: 76 },
    { name: 'Arjun Kumar', department: 'Recruitment', performance: 91, efficiency: 89, teamGrowth: 19, budgetROI: 145, employees: 92 }
  ];

  const competencyRadarData = [
    { category: 'Technical Skills', powergrid: 89, industry: 82 },
    { category: 'Leadership', powergrid: 85, industry: 78 },
    { category: 'Innovation', powergrid: 82, industry: 75 },
    { category: 'Safety', powergrid: 96, industry: 88 },
    { category: 'Sustainability', powergrid: 88, industry: 79 },
    { category: 'Digital Literacy', powergrid: 79, industry: 83 }
  ];

  const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4'];

  return (
    <div className="space-y-6">
      {/* Analytics Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-purple-600 rounded-xl">
            <BarChart3 className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl">Executive Analytics Command</h1>
            <p className="text-gray-600 dark:text-gray-400">Comprehensive organizational intelligence and insights</p>
          </div>
        </div>
        <div className="flex space-x-3">
          <Select value={selectedTimeframe} onValueChange={setSelectedTimeframe}>
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="3months">Last 3 Months</SelectItem>
              <SelectItem value="6months">Last 6 Months</SelectItem>
              <SelectItem value="12months">Last 12 Months</SelectItem>
              <SelectItem value="24months">Last 24 Months</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      <Tabs defaultValue="performance" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="performance">Performance Trends</TabsTrigger>
          <TabsTrigger value="financial">Financial Analytics</TabsTrigger>
          <TabsTrigger value="workforce">Workforce Intelligence</TabsTrigger>
          <TabsTrigger value="skills">Skills Matrix</TabsTrigger>
          <TabsTrigger value="hr-oversight">HR Management</TabsTrigger>
          <TabsTrigger value="strategic">Strategic View</TabsTrigger>
        </TabsList>

        <TabsContent value="performance" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5" />
                <span>Organization-wide Performance Evolution</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={performanceTrends}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="overall" stroke="#8b5cf6" strokeWidth={3} name="Overall POWERGRID" />
                  <Line type="monotone" dataKey="gridOps" stroke="#3b82f6" strokeWidth={2} name="Grid Operations" />
                  <Line type="monotone" dataKey="transmission" stroke="#10b981" strokeWidth={2} name="Transmission" />
                  <Line type="monotone" dataKey="renewables" stroke="#f59e0b" strokeWidth={2} name="Renewables" />
                  <Line type="monotone" dataKey="it" stroke="#ef4444" strokeWidth={2} name="IT & Digital" />
                  <Line type="monotone" dataKey="hr" stroke="#06b6d4" strokeWidth={2} name="Human Resources" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Department Performance Comparison</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <ScatterChart data={departmentComparison}>
                    <CartesianGrid />
                    <XAxis dataKey="employees" name="Employees" />
                    <YAxis dataKey="performance" name="Performance" />
                    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                    <Scatter name="Departments" dataKey="performance" fill="#8b5cf6" />
                  </ScatterChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Competency Benchmark vs Industry</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <RadarChart data={competencyRadarData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="category" />
                    <PolarRadiusAxis angle={90} domain={[0, 100]} />
                    <Radar name="POWERGRID" dataKey="powergrid" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.3} />
                    <Radar name="Industry Average" dataKey="industry" stroke="#64748b" fill="#64748b" fillOpacity={0.1} />
                    <Legend />
                  </RadarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="financial" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Budget Utilization by Department</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={budgetAnalysis}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="department" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="allocated" fill="#94a3b8" name="Allocated (₹ Cr)" />
                    <Bar dataKey="utilized" fill="#3b82f6" name="Utilized (₹ Cr)" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>ROI Analysis by Department</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={budgetAnalysis}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="department" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="roi" stroke="#10b981" fill="#10b981" fillOpacity={0.3} name="ROI %" />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Financial Efficiency Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {budgetAnalysis.map((dept, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <h4 className="text-sm mb-3">{dept.department}</h4>
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between">
                        <span>Allocated:</span>
                        <span className="font-medium">₹{dept.allocated} Cr</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Utilized:</span>
                        <span className="font-medium">₹{dept.utilized} Cr</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Efficiency:</span>
                        <span className="font-medium">{dept.efficiency}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>ROI:</span>
                        <span className="font-medium text-green-600">{dept.roi}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="workforce" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-4 text-center">
                <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl text-blue-600 mb-1">12,847</div>
                <div className="text-xs text-gray-500">Total Employees</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <Target className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl text-green-600 mb-1">87.4%</div>
                <div className="text-xs text-gray-500">IDP Completion</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <TrendingUp className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <div className="text-2xl text-purple-600 mb-1">+23.4%</div>
                <div className="text-xs text-gray-500">Performance Growth</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <Building2 className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                <div className="text-2xl text-orange-600 mb-1">24</div>
                <div className="text-xs text-gray-500">Departments</div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Workforce Distribution by Department</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={departmentComparison}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({name, value}) => `${name}: ${value}`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="employees"
                  >
                    {departmentComparison.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="skills" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Organizational Skills Gap Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {skillMatrixData.map((skill, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm">{skill.skill}</h4>
                      <Badge variant={skill.gap >= -5 ? "default" : "destructive"}>
                        Gap: {skill.gap}%
                      </Badge>
                    </div>
                    <div className="grid grid-cols-4 gap-4 text-xs text-gray-600 dark:text-gray-400">
                      <div>Current: {skill.current}%</div>
                      <div>Target: {skill.target}%</div>
                      <div>Employees: {skill.employees.toLocaleString('en-IN')}</div>
                      <div>Priority: {skill.gap <= -8 ? 'High' : skill.gap <= -5 ? 'Medium' : 'Low'}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="hr-oversight" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Crown className="w-5 h-5" />
                <span>HR Management Team Performance Analysis</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {hrManagersAnalysis.map((manager, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-sm">{manager.name}</h4>
                      <Badge variant={manager.performance >= 90 ? "default" : "secondary"}>
                        {manager.performance >= 90 ? 'Excellent' : 'Good'}
                      </Badge>
                    </div>
                    <div className="space-y-2 text-xs text-gray-600 dark:text-gray-400">
                      <div className="flex justify-between">
                        <span>Department:</span>
                        <span>{manager.department}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Team Size:</span>
                        <span className="text-blue-600">{manager.employees} employees</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Performance:</span>
                        <span className="text-green-600">{manager.performance}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Efficiency:</span>
                        <span>{manager.efficiency}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Team Growth:</span>
                        <span className="text-blue-600">+{manager.teamGrowth}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Budget ROI:</span>
                        <span className="text-purple-600">{manager.budgetROI}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>HR Managers Comparative Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={hrManagersAnalysis}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="performance" fill="#3b82f6" name="Performance %" />
                  <Bar dataKey="efficiency" fill="#10b981" name="Efficiency %" />
                  <Bar dataKey="budgetROI" fill="#8b5cf6" name="Budget ROI %" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="strategic" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Strategic KPIs Dashboard</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <div className="text-2xl text-green-600 mb-1">94.2%</div>
                    <div className="text-xs text-gray-500">Strategic Goal Achievement</div>
                  </div>
                  <div className="text-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <div className="text-2xl text-blue-600 mb-1">₹245.8 Cr</div>
                    <div className="text-xs text-gray-500">Total Investment</div>
                  </div>
                  <div className="text-center p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                    <div className="text-2xl text-purple-600 mb-1">156%</div>
                    <div className="text-xs text-gray-500">Average ROI</div>
                  </div>
                  <div className="text-center p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                    <div className="text-2xl text-orange-600 mb-1">23.4%</div>
                    <div className="text-xs text-gray-500">YoY Growth</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Executive Risk Assessment</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 border-l-4 border-green-500 bg-green-50 dark:bg-green-900/20">
                  <p className="text-sm text-green-800 dark:text-green-200">Low Risk</p>
                  <p className="text-xs text-green-600 dark:text-green-400">System stability and performance metrics excellent</p>
                </div>
                <div className="p-3 border-l-4 border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20">
                  <p className="text-sm text-yellow-800 dark:text-yellow-200">Medium Risk</p>
                  <p className="text-xs text-yellow-600 dark:text-yellow-400">Skills gap in emerging technologies requires attention</p>
                </div>
                <div className="p-3 border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/20">
                  <p className="text-sm text-blue-800 dark:text-blue-200">Opportunity</p>
                  <p className="text-xs text-blue-600 dark:text-blue-400">High potential for expansion in renewable energy sector</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Executive Summary & Recommendations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="text-sm mb-2 text-green-600">Strengths</h4>
                  <ul className="text-xs space-y-1 text-gray-600 dark:text-gray-400">
                    <li>• Exceptional Grid Operations performance (98%)</li>
                    <li>• Strong ROI across all departments (156% avg)</li>
                    <li>• High employee satisfaction (91% avg)</li>
                    <li>• Robust compliance metrics (96%)</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="text-sm mb-2 text-orange-600">Areas for Improvement</h4>
                  <ul className="text-xs space-y-1 text-gray-600 dark:text-gray-400">
                    <li>• Digital literacy skills gap (-6 to -9%)</li>
                    <li>• Leadership pipeline development</li>
                    <li>• Cross-department collaboration</li>
                    <li>• Innovation culture advancement</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="text-sm mb-2 text-purple-600">Strategic Actions</h4>
                  <ul className="text-xs space-y-1 text-gray-600 dark:text-gray-400">
                    <li>• Accelerate digital transformation program</li>
                    <li>• Expand renewable energy talent pool</li>
                    <li>• Implement advanced leadership development</li>
                    <li>• Enhance innovation incentive programs</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      <Footer />
    </div>
  );
}