import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { User } from '../../App';
import { 
  User as UserIcon, 
  Settings, 
  Shield, 
  Users, 
  Edit, 
  Save, 
  X,
  CheckCircle2,
  Clock,
  AlertTriangle,
  Award,
  Activity,
  DollarSign,
  BarChart3
} from 'lucide-react';

interface HRProfileProps {
  user: User;
}

const getMockHRProfileData = (user: User) => ({
  personalInfo: {
    fullName: user.role === 'admin' ? 'Vivek Dalimbkar' : 'Shashank Ponna',
    employeeId: user.role === 'admin' ? 'PG-EMP-2025-001' : 'PG-EMP-2025-002',
    email: user.role === 'admin' ? 'vivek.dalimbkar@powergrid.in' : 'shashank.ponna@powergrid.in',
    department: user.role === 'admin' ? 'Corporate Administration' : 'Human Resources',
    position: user.role === 'admin' ? 'Chief People Officer' : 'HR Manager',
    startDate: user.role === 'admin' ? '2018-03-12' : '2020-07-01',
    location: 'New Delhi, India',
    directReports: user.role === 'admin' ? 18 : 8,
    managedEmployees: user.role === 'admin' ? 247 : 124
  },
  permissions: [
    { module: 'Employee Data Access', level: 'Full', enabled: true },
    { module: 'IDP Approval', level: 'All Departments', enabled: true },
    { module: 'Budget Management', level: user.role === 'admin' ? 'Full' : 'Department', enabled: true },
    { module: 'Analytics Dashboard', level: 'Advanced', enabled: true },
    { module: 'System Administration', level: user.role === 'admin' ? 'Full' : 'Limited', enabled: user.role === 'admin' },
    { module: 'API Access', level: user.role === 'admin' ? 'Full' : 'Read-Only', enabled: true }
  ],
  recentActions: [
    {
      action: 'Approved IDP for Soham Patil',
      timestamp: '2025-01-02 10:30',
      type: 'approval',
      impact: 'Individual'
    },
    {
      action: 'Updated PowerGrid team skill development budget',
      timestamp: '2025-01-01 16:45',
      type: 'budget',
      impact: 'Department'
    },
    {
      action: 'Generated Q4 PowerGrid analytics report',
      timestamp: '2024-12-28 12:15',
      type: 'report',
      impact: 'Organization'
    },
    {
      action: 'Configured new mentorship matching algorithm for Grid Ops',
      timestamp: '2024-12-27 09:30',
      type: 'system',
      impact: 'Organization'
    }
  ],
  managedTeams: [
    {
      department: 'Engineering',
      manager: 'Soham Patil',
      employees: 89,
      idpCompletion: 85,
      avgSkillGrowth: 18,
      budgetUtilization: 72
    },
    {
      department: 'Operations',
      manager: 'Aditya Pharande',
      employees: 34,
      idpCompletion: 91,
      avgSkillGrowth: 22,
      budgetUtilization: 68
    },
    {
      department: 'Renewables',
      manager: 'Neha Kedar',
      employees: 28,
      idpCompletion: 79,
      avgSkillGrowth: 16,
      budgetUtilization: 84
    }
  ],
  systemHealth: {
    uptime: 99.9,
    activeUsers: 198,
    dataSync: 'Healthy',
    lastBackup: '2025-01-02 06:00',
    integrationStatus: [
      { system: 'HRMS Integration', status: 'Connected', lastSync: '2025-01-02 09:00' },
      { system: 'LMS Integration', status: 'Connected', lastSync: '2025-01-02 08:45' },
      { system: 'Performance System', status: 'Connected', lastSync: '2025-01-02 09:15' },
      { system: 'Authentication (OAuth)', status: 'Healthy', lastSync: 'Real-time' }
    ]
  }
});


export function HRProfile({ user }: HRProfileProps) {
  const mockHRProfileData = getMockHRProfileData(user);
  const [isEditing, setIsEditing] = useState(false);
  const [editedInfo, setEditedInfo] = useState(mockHRProfileData.personalInfo);

  const handleSaveProfile = () => {
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setEditedInfo(mockHRProfileData.personalInfo);
    setIsEditing(false);
  };

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center space-x-4">
              <Avatar className="w-20 h-20">
                <AvatarFallback className={`text-white text-xl ${
                  user.role === 'admin' ? 'bg-purple-600' : 'bg-blue-600'
                }`}>
                  {editedInfo.fullName.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-2xl mb-1">{editedInfo.fullName}</h1>
                <p className="text-gray-600 dark:text-gray-400 mb-2">{editedInfo.position}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span>ID: {editedInfo.employeeId}</span>
                  <span>•</span>
                  <span>{editedInfo.department}</span>
                  <span>•</span>
                  <span>Since {editedInfo.startDate}</span>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-500 mt-2">
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{editedInfo.managedEmployees} managed employees</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center space-x-1">
                    <UserIcon className="w-4 h-4" />
                    <span>{editedInfo.directReports} direct reports</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant={user.role === 'admin' ? 'default' : 'secondary'} className={
                user.role === 'admin' ? 'bg-purple-600' : 'bg-blue-600'
              }>
                <Shield className="w-3 h-3 mr-1" />
                {user.role === 'admin' ? 'Administrator' : 'HR Manager'}
              </Badge>
              {isEditing ? (
                <>
                  <Button size="sm" onClick={handleSaveProfile}>
                    <Save className="w-4 h-4 mr-2" />
                    Save
                  </Button>
                  <Button size="sm" variant="outline" onClick={handleCancelEdit}>
                    <X className="w-4 h-4 mr-2" />
                    Cancel
                  </Button>
                </>
              ) : (
                <Button size="sm" variant="outline" onClick={() => setIsEditing(true)}>
                  <Edit className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
              )}
            </div>
          </div>

          {isEditing ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  value={editedInfo.email}
                  onChange={(e) => setEditedInfo({...editedInfo, email: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  value={editedInfo.location}
                  onChange={(e) => setEditedInfo({...editedInfo, location: e.target.value})}
                />
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <span className="text-gray-500">Email:</span>
                <span className="ml-2">{editedInfo.email}</span>
              </div>
              <div>
                <span className="text-gray-500">Department:</span>
                <span className="ml-2">{editedInfo.department}</span>
              </div>
              <div>
                <span className="text-gray-500">Location:</span>
                <span className="ml-2">{editedInfo.location}</span>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <Tabs defaultValue="permissions" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="permissions">Permissions</TabsTrigger>
          <TabsTrigger value="activity">Recent Activity</TabsTrigger>
          <TabsTrigger value="teams">Managed Teams</TabsTrigger>
          {user.role === 'admin' && <TabsTrigger value="system">System Health</TabsTrigger>}
          {user.role !== 'admin' && <TabsTrigger value="reports">Reports</TabsTrigger>}
        </TabsList>

        <TabsContent value="permissions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="w-5 h-5" />
                <span>Access Permissions & Role Management</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {mockHRProfileData.permissions.map((permission, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <h4 className="text-sm mb-1">{permission.module}</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Access Level: {permission.level}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge 
                      variant={permission.enabled ? 'default' : 'secondary'}
                      className={permission.enabled ? 'bg-green-600' : ''}
                    >
                      {permission.enabled ? 'Enabled' : 'Disabled'}
                    </Badge>
                    <Button size="sm" variant="outline">
                      {permission.enabled ? 'Revoke' : 'Grant'}
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="activity" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Activity className="w-5 h-5" />
                <span>Recent Administrative Actions</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {mockHRProfileData.recentActions.map((action, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 border rounded-lg">
                  <div className={`p-1.5 rounded-full ${
                    action.type === 'approval' ? 'bg-green-100 dark:bg-green-900' :
                    action.type === 'budget' ? 'bg-blue-100 dark:bg-blue-900' :
                    action.type === 'report' ? 'bg-purple-100 dark:bg-purple-900' :
                    'bg-orange-100 dark:bg-orange-900'
                  }`}>
                    {action.type === 'approval' && <CheckCircle2 className="w-4 h-4 text-green-600" />}
                    {action.type === 'budget' && <DollarSign className="w-4 h-4 text-blue-600" />}
                    {action.type === 'report' && <BarChart3 className="w-4 h-4 text-purple-600" />}
                    {action.type === 'system' && <Settings className="w-4 h-4 text-orange-600" />}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm mb-1">{action.action}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">{action.timestamp}</span>
                      <Badge variant="outline" className="text-xs">
                        {action.impact}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="teams" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>Team Performance Overview</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {mockHRProfileData.managedTeams.map((team, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="text-lg">{team.department}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Manager: {team.manager}</p>
                    </div>
                    <Badge variant="secondary">{team.employees} employees</Badge>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl text-green-600 mb-1">{team.idpCompletion}%</div>
                      <div className="text-xs text-gray-500">IDP Completion</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl text-blue-600 mb-1">+{team.avgSkillGrowth}%</div>
                      <div className="text-xs text-gray-500">Skill Growth</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl text-purple-600 mb-1">{team.budgetUtilization}%</div>
                      <div className="text-xs text-gray-500">Budget Used</div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {user.role === 'admin' && (
          <TabsContent value="system" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Settings className="w-5 h-5" />
                    <span>System Status</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <div className="text-2xl text-green-600 mb-1">{mockHRProfileData.systemHealth.uptime}%</div>
                      <div className="text-xs text-gray-500">System Uptime</div>
                    </div>
                    <div className="text-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <div className="text-2xl text-blue-600 mb-1">{mockHRProfileData.systemHealth.activeUsers}</div>
                      <div className="text-xs text-gray-500">Active Users</div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Data Sync Status:</span>
                      <Badge variant="default" className="bg-green-600">
                        {mockHRProfileData.systemHealth.dataSync}
                      </Badge>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Last Backup:</span>
                      <span className="text-gray-600 dark:text-gray-400">
                        {mockHRProfileData.systemHealth.lastBackup}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Integration Status</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {mockHRProfileData.systemHealth.integrationStatus.map((integration, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="text-sm mb-1">{integration.system}</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          Last sync: {integration.lastSync}
                        </p>
                      </div>
                      <Badge 
                        variant={integration.status === 'Connected' || integration.status === 'Healthy' ? 'default' : 'secondary'}
                        className={integration.status === 'Connected' || integration.status === 'Healthy' ? 'bg-green-600' : ''}
                      >
                        {integration.status}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        )}

        {user.role !== 'admin' && (
          <TabsContent value="reports" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Generated Reports</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { name: 'Q4 2024 Team Development Report', date: '2024-12-23', type: 'Quarterly' },
                  { name: 'Skills Gap Analysis - Engineering', date: '2024-12-20', type: 'Department' },
                  { name: 'Training ROI Summary', date: '2024-12-18', type: 'Financial' },
                  { name: 'Employee Engagement Metrics', date: '2024-12-15', type: 'HR Analytics' }
                ].map((report, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="text-sm mb-1">{report.name}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Generated: {report.date}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className="text-xs">{report.type}</Badge>
                      <Button size="sm" variant="outline">Download</Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        )}
      </Tabs>
    </div>
  );
}