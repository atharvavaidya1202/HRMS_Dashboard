import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import { User } from '../../App';
import {
  Users,
  TrendingUp,
  DollarSign,
  Target,
  Building2,
  Shield,
  BarChart3,
  AlertTriangle,
  CheckCircle2,
  Activity,
  Settings,
  FileText,
  Crown,
  Zap,
  Globe,
  Database
} from 'lucide-react';

interface AdminOverviewProps {
  user: User;
  onViewChange: (view: 'dashboard' | 'profile' | 'analytics' | 'learning' | 'messages' | 'control') => void;
}

export function AdminOverview({ user, onViewChange }: AdminOverviewProps) {
  const organizationMetrics = {
    totalEmployees: 12847,
    activeIDPs: 11234,
    completionRate: 87.4,
    budgetAllocated: '₹245.8 crores',
    budgetUtilized: 78.5,
    performanceGrowth: 23.4,
    hrManagers: 18,
    departments: 24,
    systemUptime: 99.94,
    dataAccuracy: 98.7
  };

  const executiveMetrics = [
    {
      title: 'Organization-wide Performance',
      value: '+23.4%',
      change: '+5.2% vs last quarter',
      icon: TrendingUp,
      color: 'text-green-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20'
    },
    {
      title: 'Total Workforce Development Budget',
      value: '₹245.8 Cr',
      change: '₹52.3 Cr utilized this quarter',
      icon: DollarSign,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20'
    },
    {
      title: 'Strategic Initiatives Progress',
      value: '89.2%',
      change: '+12.8% ahead of schedule',
      icon: Target,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20'
    },
    {
      title: 'System Infrastructure Health',
      value: '99.94%',
      change: 'Mission-critical uptime maintained',
      icon: Database,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50 dark:bg-emerald-900/20'
    }
  ];

  const departmentOverview = [
    { name: 'Grid Operations', employees: 3247, performance: 92, budget: '₹68.4 Cr', manager: 'Sanjay Kulkarni', status: 'Excellent' },
    { name: 'Transmission Engineering', employees: 2856, performance: 89, budget: '₹54.2 Cr', manager: 'Priya Deshmukh', status: 'Good' },
    { name: 'Renewables Integration', employees: 1923, performance: 94, budget: '₹42.8 Cr', manager: 'Arjun Nair', status: 'Excellent' },
    { name: 'IT & Digital', employees: 1456, performance: 87, budget: '₹38.6 Cr', manager: 'Neha Kedar', status: 'Good' },
    { name: 'Human Resources', employees: 847, performance: 91, budget: '₹22.4 Cr', manager: 'Shashank Ponna', status: 'Good' },
    { name: 'Finance & Audit', employees: 726, performance: 88, budget: '₹19.4 Cr', manager: 'Ravi Kumar', status: 'Good' }
  ];

  const criticalAlerts = [
    { 
      type: 'high', 
      message: 'Grid Operations team exceeded performance targets by 15%', 
      department: 'Grid Operations',
      action: 'Review for bonus allocation',
      icon: CheckCircle2
    },
    { 
      type: 'medium', 
      message: 'Training budget utilization at 95% in Renewables', 
      department: 'Renewables Integration',
      action: 'Consider additional allocation',
      icon: AlertTriangle
    },
    { 
      type: 'info', 
      message: 'New compliance requirements from CERC for Q1 2025', 
      department: 'All Departments',
      action: 'Schedule compliance briefing',
      icon: FileText
    }
  ];

  const hrManagerPerformance = [
    { name: 'Shashank Ponna', department: 'HR Operations', managedEmployees: 124, idpCompletion: 91, performance: 'Excellent', budgetEfficiency: 87 },
    { name: 'Anjali Sharma', department: 'Talent Development', managedEmployees: 89, idpCompletion: 89, performance: 'Good', budgetEfficiency: 82 },
    { name: 'Ravi Patil', department: 'Learning & Development', managedEmployees: 76, idpCompletion: 85, performance: 'Good', budgetEfficiency: 79 }
  ];

  return (
    <div className="space-y-6">
      {/* Executive Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-purple-600 rounded-xl">
            <Crown className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl">Executive Command Center</h1>
            <p className="text-gray-600 dark:text-gray-400">Complete organizational oversight and strategic control</p>
          </div>
        </div>
        <div className="flex space-x-3">
          <Button onClick={() => onViewChange('control')} className="bg-purple-600 hover:bg-purple-700">
            <Settings className="w-4 h-4 mr-2" />
            System Control
          </Button>
          <Button onClick={() => onViewChange('analytics')} variant="outline">
            <BarChart3 className="w-4 h-4 mr-2" />
            Deep Analytics
          </Button>
        </div>
      </div>

      {/* Executive KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {executiveMetrics.map((metric, index) => (
          <Card key={index} className="relative overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{metric.title}</p>
                  <p className="text-2xl mb-1">{metric.value}</p>
                  <p className="text-xs text-gray-500">{metric.change}</p>
                </div>
                <div className={`p-3 rounded-lg ${metric.bgColor}`}>
                  <metric.icon className={`w-6 h-6 ${metric.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Organization Health Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Workforce Overview */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Building2 className="w-5 h-5" />
              <span>Department Performance Matrix</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {departmentOverview.map((dept, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm">{dept.name}</h4>
                      <Badge 
                        variant={dept.status === 'Excellent' ? 'default' : 'secondary'}
                        className={dept.status === 'Excellent' ? 'bg-green-600' : ''}
                      >
                        {dept.status}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-xs text-gray-600 dark:text-gray-400">
                      <div>Manager: {dept.manager}</div>
                      <div>Budget: {dept.budget}</div>
                      <div>Employees: {dept.employees.toLocaleString('en-IN')}</div>
                      <div>Performance: {dept.performance}%</div>
                    </div>
                  </div>
                  <div className="ml-4">
                    <div className="w-16 h-16 relative">
                      <Progress value={dept.performance} className="h-2" />
                      <div className="text-center mt-1 text-xs">{dept.performance}%</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Executive Alerts */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertTriangle className="w-5 h-5" />
              <span>Executive Alerts</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {criticalAlerts.map((alert, index) => (
              <div key={index} className={`p-3 border rounded-lg ${ 
                alert.type === 'high' ? 'border-green-200 bg-green-50 dark:bg-green-900/20' :
                alert.type === 'medium' ? 'border-orange-200 bg-orange-50 dark:bg-orange-900/20' :
                'border-blue-200 bg-blue-50 dark:bg-blue-900/20'
              }`}>
                <div className="flex items-start space-x-3">
                  <alert.icon className={`w-4 h-4 mt-0.5 ${
                    alert.type === 'high' ? 'text-green-600' :
                    alert.type === 'medium' ? 'text-orange-600' :
                    'text-blue-600'
                  }`} />
                  <div className="flex-1">
                    <p className="text-sm mb-1">{alert.message}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{alert.department}</p>
                    <p className="text-xs mt-1 font-medium">{alert.action}</p>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* HR Management Oversight */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Shield className="w-5 h-5" />
            <span>HR Management Team Performance</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {hrManagerPerformance.map((manager, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm">{manager.name}</h4>
                  <Badge variant={manager.performance === 'Excellent' ? 'default' : 'secondary'}>
                    {manager.performance}
                  </Badge>
                </div>
                <div className="space-y-2 text-xs text-gray-600 dark:text-gray-400">
                  <div className="flex justify-between">
                    <span>Department:</span>
                    <span>{manager.department}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Managed Employees:</span>
                    <span>{manager.managedEmployees}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>IDP Completion:</span>
                    <span>{manager.idpCompletion}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Budget Efficiency:</span>
                    <span>{manager.budgetEfficiency}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* System Status Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <Activity className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl text-green-600 mb-1">{organizationMetrics.systemUptime}%</div>
            <div className="text-xs text-gray-500">System Uptime</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 text-center">
            <Database className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl text-blue-600 mb-1">{organizationMetrics.dataAccuracy}%</div>
            <div className="text-xs text-gray-500">Data Accuracy</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 text-center">
            <Users className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <div className="text-2xl text-purple-600 mb-1">{organizationMetrics.hrManagers}</div>
            <div className="text-xs text-gray-500">HR Managers</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 text-center">
            <Globe className="w-8 h-8 text-orange-600 mx-auto mb-2" />
            <div className="text-2xl text-orange-600 mb-1">{organizationMetrics.departments}</div>
            <div className="text-xs text-gray-500">Departments</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}