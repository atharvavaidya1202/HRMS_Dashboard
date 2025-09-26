import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Switch } from '../ui/switch';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Alert, AlertDescription } from '../ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { User } from '../../App';
import {
  Settings,
  Shield,
  Users,
  Database,
  Bell,
  Lock,
  Activity,
  FileText,
  Crown,
  AlertTriangle,
  CheckCircle2,
  Zap,
  Globe,
  Server,
  UserCheck,
  Ban,
  RefreshCw,
  Download,
  Upload,
  Eye,
  EyeOff,
  Building2,
  BarChart3
} from 'lucide-react';

interface AdminControlProps {
  user: User;
}

export function AdminControl({ user }: AdminControlProps) {
  const [systemMaintenance, setSystemMaintenance] = useState(false);
  const [backupInProgress, setBackupInProgress] = useState(false);
  const [selectedManager, setSelectedManager] = useState<string>('');

  const systemControls = [
    {
      title: 'System Maintenance Mode',
      description: 'Enable maintenance mode to perform system updates',
      enabled: systemMaintenance,
      critical: true,
      onChange: setSystemMaintenance
    },
    {
      title: 'Auto Data Backup',
      description: 'Automated daily backup of all organizational data',
      enabled: true,
      critical: false,
      onChange: () => {}
    },
    {
      title: 'Real-time Analytics',
      description: 'Live performance monitoring and reporting',
      enabled: true,
      critical: false,
      onChange: () => {}
    },
    {
      title: 'Advanced Security Protocols',
      description: 'Enhanced security measures for sensitive data',
      enabled: true,
      critical: true,
      onChange: () => {}
    }
  ];

  const hrManagersControl = [
    {
      name: 'Shashank Ponna',
      department: 'HR Operations',
      status: 'Active',
      permissions: 'Full Access',
      lastLogin: '2025-01-02 09:30',
      managedEmployees: 124,
      performance: 95
    },
    {
      name: 'Anjali Sharma',
      department: 'Talent Development',
      status: 'Active',
      permissions: 'Department Access',
      lastLogin: '2025-01-02 08:45',
      managedEmployees: 89,
      performance: 89
    },
    {
      name: 'Ravi Patil',
      department: 'Learning & Development', 
      status: 'Active',
      permissions: 'Department Access',
      lastLogin: '2025-01-01 17:20',
      managedEmployees: 76,
      performance: 92
    },
    {
      name: 'Meera Singh',
      department: 'Compensation & Benefits',
      status: 'Leave',
      permissions: 'Limited Access',
      lastLogin: '2024-12-30 16:15',
      managedEmployees: 45,
      performance: 88
    }
  ];

  const auditLogs = [
    {
      timestamp: '2025-01-02 10:30:15',
      user: 'Vivek Dalimbkar',
      action: 'Modified system-wide IDP approval workflow',
      severity: 'High',
      category: 'System Configuration'
    },
    {
      timestamp: '2025-01-02 09:45:22',
      user: 'Shashank Ponna',
      action: 'Bulk approved 15 IDP requests for Grid Operations',
      severity: 'Medium',
      category: 'IDP Management'
    },
    {
      timestamp: '2025-01-02 08:20:33',
      user: 'System',
      action: 'Automated backup completed successfully',
      severity: 'Low',
      category: 'System Maintenance'
    },
    {
      timestamp: '2025-01-01 16:45:18',
      user: 'Vivek Dalimbkar',
      action: 'Updated organization-wide training budget allocation',
      severity: 'High',
      category: 'Budget Management'
    },
    {
      timestamp: '2025-01-01 14:30:45',
      user: 'Anjali Sharma',
      action: 'Created new competency framework for Renewables dept',
      severity: 'Medium',
      category: 'Competency Management'
    }
  ];

  const departmentControls = [
    { name: 'Grid Operations', employees: 3247, budget: '₹68.4 Cr', status: 'Active', manager: 'Sanjay Kulkarni' },
    { name: 'Transmission Engineering', employees: 2856, budget: '₹54.2 Cr', status: 'Active', manager: 'Priya Deshmukh' },
    { name: 'Renewables Integration', employees: 1923, budget: '₹42.8 Cr', status: 'Active', manager: 'Arjun Nair' },
    { name: 'IT & Digital', employees: 1456, budget: '₹38.6 Cr', status: 'Active', manager: 'Neha Kedar' },
    { name: 'Human Resources', employees: 847, budget: '₹22.4 Cr', status: 'Active', manager: 'Shashank Ponna' }
  ];

  const handleBackup = () => {
    setBackupInProgress(true);
    setTimeout(() => {
      setBackupInProgress(false);
    }, 3000);
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'High': return 'text-red-600 bg-red-50 dark:bg-red-900/20';
      case 'Medium': return 'text-orange-600 bg-orange-50 dark:bg-orange-900/20';
      case 'Low': return 'text-green-600 bg-green-50 dark:bg-green-900/20';
      default: return 'text-gray-600 bg-gray-50 dark:bg-gray-900/20';
    }
  };

  return (
    <div className="space-y-6">
      {/* Control Center Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-red-600 rounded-xl">
            <Crown className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl">System Control Center</h1>
            <p className="text-gray-600 dark:text-gray-400">Executive control panel for organization-wide management</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            <Activity className="w-3 h-3 mr-1" />
            System Online
          </Badge>
          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
            <Shield className="w-3 h-3 mr-1" />
            Security Active
          </Badge>
        </div>
      </div>

      <Tabs defaultValue="system" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="system">System Control</TabsTrigger>
          <TabsTrigger value="hr-management">HR Management</TabsTrigger>
          <TabsTrigger value="departments">Department Control</TabsTrigger>
          <TabsTrigger value="audit">Audit & Logs</TabsTrigger>
          <TabsTrigger value="emergency">Emergency Actions</TabsTrigger>
        </TabsList>

        <TabsContent value="system" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Settings className="w-5 h-5" />
                  <span>System Controls</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {systemControls.map((control, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <h4 className="text-sm mb-1">{control.title}</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400">{control.description}</p>
                      {control.critical && (
                        <Badge variant="destructive" className="mt-1 text-xs">Critical</Badge>
                      )}
                    </div>
                    <Switch
                      checked={control.enabled}
                      onCheckedChange={control.onChange}
                      disabled={control.title === 'Auto Data Backup'}
                    />
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Database className="w-5 h-5" />
                  <span>Data Management</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <Database className="w-6 h-6 text-green-600 mx-auto mb-1" />
                    <div className="text-sm text-green-600 mb-1">98.7%</div>
                    <div className="text-xs text-gray-500">Data Integrity</div>
                  </div>
                  <div className="text-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <Server className="w-6 h-6 text-blue-600 mx-auto mb-1" />
                    <div className="text-sm text-blue-600 mb-1">99.94%</div>
                    <div className="text-xs text-gray-500">System Uptime</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Button 
                    onClick={handleBackup}
                    disabled={backupInProgress}
                    className="w-full"
                    variant="outline"
                  >
                    {backupInProgress ? (
                      <>
                        <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                        Backup in Progress...
                      </>
                    ) : (
                      <>
                        <Download className="w-4 h-4 mr-2" />
                        Force Manual Backup
                      </>
                    )}
                  </Button>
                  
                  <Button variant="outline" className="w-full">
                    <Upload className="w-4 h-4 mr-2" />
                    Import Organization Data
                  </Button>
                  
                  <Button variant="outline" className="w-full">
                    <FileText className="w-4 h-4 mr-2" />
                    Generate System Report
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {systemMaintenance && (
            <Alert className="border-orange-200 bg-orange-50 dark:bg-orange-900/20">
              <AlertTriangle className="h-4 w-4 text-orange-600" />
              <AlertDescription className="text-orange-800 dark:text-orange-200">
                System maintenance mode is enabled. All user operations are restricted except for administrators.
              </AlertDescription>
            </Alert>
          )}
        </TabsContent>

        <TabsContent value="hr-management" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <UserCheck className="w-5 h-5" />
                <span>HR Manager Oversight & Control</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {hrManagersControl.map((manager, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h4 className="text-sm">{manager.name}</h4>
                        <Badge variant={manager.status === 'Active' ? 'default' : 'secondary'}>
                          {manager.status}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Performance: {manager.performance}%
                        </Badge>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs text-gray-600 dark:text-gray-400">
                        <div>Dept: {manager.department}</div>
                        <div>Employees: {manager.managedEmployees}</div>
                        <div>Permissions: {manager.permissions}</div>
                        <div>Last Login: {manager.lastLogin}</div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        <Eye className="w-3 h-3 mr-1" />
                        Monitor
                      </Button>
                      <Button size="sm" variant="outline">
                        <Settings className="w-3 h-3 mr-1" />
                        Control
                      </Button>
                      {manager.status === 'Active' && (
                        <Button size="sm" variant="destructive">
                          <Ban className="w-3 h-3 mr-1" />
                          Suspend
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>HR Manager Permissions Control</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="manager-select">Select HR Manager</Label>
                  <select 
                    id="manager-select"
                    className="w-full p-2 border rounded-lg bg-background"
                    value={selectedManager}
                    onChange={(e) => setSelectedManager(e.target.value)}
                  >
                    <option value="">Choose HR Manager...</option>
                    {hrManagersControl.map((manager, index) => (
                      <option key={index} value={manager.name}>{manager.name}</option>
                    ))}
                  </select>
                </div>
                
                {selectedManager && (
                  <div className="space-y-3 p-3 border rounded-lg">
                    <h4 className="text-sm">Permission Controls for {selectedManager}</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs">IDP Approval Rights</span>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs">Budget Management</span>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs">Analytics Access</span>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs">System Administration</span>
                        <Switch />
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Organizational Announcements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="announcement">Executive Message</Label>
                  <Textarea 
                    id="announcement"
                    placeholder="Send organization-wide announcement..."
                    className="h-24"
                  />
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" className="flex-1">
                    <Bell className="w-3 h-3 mr-1" />
                    Send to All
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    <Users className="w-3 h-3 mr-1" />
                    HR Only
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="departments" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Building2 className="w-5 h-5" />
                <span>Department Administration</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {departmentControls.map((dept, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h4 className="text-sm">{dept.name}</h4>
                        <Badge variant="default" className="bg-green-600">
                          {dept.status}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-xs text-gray-600 dark:text-gray-400">
                        <div>Manager: {dept.manager}</div>
                        <div>Employees: {dept.employees.toLocaleString('en-IN')}</div>
                        <div>Budget: {dept.budget}</div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        <BarChart3 className="w-3 h-3 mr-1" />
                        Analytics
                      </Button>
                      <Button size="sm" variant="outline">
                        <Settings className="w-3 h-3 mr-1" />
                        Configure
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="audit" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="w-5 h-5" />
                <span>System Audit Trail</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {auditLogs.map((log, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 border rounded-lg">
                    <div className={`px-2 py-1 rounded text-xs ${getSeverityColor(log.severity)}`}>
                      {log.severity}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm">{log.action}</span>
                        <span className="text-xs text-gray-500">{log.timestamp}</span>
                      </div>
                      <div className="flex items-center space-x-4 text-xs text-gray-600 dark:text-gray-400">
                        <span>User: {log.user}</span>
                        <span>Category: {log.category}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="emergency" className="space-y-6">
          <Alert className="border-red-200 bg-red-50 dark:bg-red-900/20">
            <AlertTriangle className="h-4 w-4 text-red-600" />
            <AlertDescription className="text-red-800 dark:text-red-200">
              Emergency controls should only be used in critical situations. All actions are logged and audited.
            </AlertDescription>
          </Alert>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-red-600">System Emergency Controls</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="destructive" className="w-full" size="lg">
                  <Lock className="w-4 h-4 mr-2" />
                  Lockdown All Systems
                </Button>
                <Button variant="destructive" className="w-full" size="lg">
                  <Ban className="w-4 h-4 mr-2" />
                  Suspend All HR Operations
                </Button>
                <Button variant="destructive" className="w-full" size="lg">
                  <AlertTriangle className="w-4 h-4 mr-2" />
                  Activate Emergency Protocol
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-orange-600">Recovery Operations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full" size="lg">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  System Recovery Mode
                </Button>
                <Button variant="outline" className="w-full" size="lg">
                  <Database className="w-4 h-4 mr-2" />
                  Restore from Backup
                </Button>
                <Button variant="outline" className="w-full" size="lg">
                  <CheckCircle2 className="w-4 h-4 mr-2" />
                  Resume Normal Operations
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}