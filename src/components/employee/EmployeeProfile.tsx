import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { User } from '../../App';
import { 
  User as UserIcon, 
  FileText, 
  Award, 
  Upload, 
  Edit, 
  Save, 
  X,
  Star,
  TrendingUp,
  Target,
  Calendar,
  ExternalLink
} from 'lucide-react';

interface EmployeeProfileProps {
  user: User;
}

const getMockProfileData = (user: User) => ({
  personalInfo: {
    fullName: user.name,
    employeeId: 'PGCIL-2024-001',
    email: user.email,
    department: user.department,
    position: 'Deputy General Manager (Grid Operations)',
    manager: 'Sanjay Kulkarni',
    startDate: '2019-07-10',
    location: 'Gurgaon, Haryana'
  },
  skills: [
    { name: 'Grid Operations', current: 85, target: 90, category: 'Technical' },
    { name: 'Power System Protection', current: 80, target: 88, category: 'Technical' },
    { name: 'Project Management', current: 70, target: 85, category: 'Leadership' },
    { name: 'Data Analytics for Power Systems', current: 60, target: 80, category: 'Analytical' },
    { name: 'Team Leadership', current: 50, target: 75, category: 'Leadership' },
    { name: 'Renewable Energy Integration', current: 65, target: 85, category: 'Technical' }
  ],
  certifications: [
    { name: 'Certified Power System Operator', issuer: 'POSOCO / NLDC', date: '2024-09-15', verified: true },
    { name: 'Smart Grid Specialist Certification', issuer: 'NPTI (National Power Training Institute)', date: '2024-06-20', verified: true },
    { name: 'Project Management Professional', issuer: 'PMI India', date: '2023-12-10', verified: false },
    { name: 'Renewable Energy Management Certification', issuer: 'Skill India / Ministry of Power', date: '2023-08-05', verified: true }
  ],
  trainingHistory: [
    { course: 'Advanced Power System Protection', provider: 'NPTEL (IIT Roorkee)', completed: '2024-12-15', score: 93 },
    { course: 'Leadership in Energy Sector', provider: 'Power Management Institute (NTPC)', completed: '2024-11-30', score: 87 },
    { course: 'Smart Grid Data Analytics', provider: 'NPTEL (IIT Delhi)', completed: '2024-10-22', score: 91 },
    { course: 'Agile Project Execution for Engineers', provider: 'IIM Bangalore (Online)', completed: '2024-09-18', score: 84 }
  ],
  feedback: [
    { 
      from: 'Sanjay Kulkarni (Manager)', 
      date: '2024-12-01', 
      type: 'Performance Review',
      summary: 'Strong technical expertise in grid management and renewable integration. Needs to focus more on strategic planning.',
      rating: 4.5
    },
    { 
      from: 'Ananya Iyer (Peer)', 
      date: '2024-11-15', 
      type: '360 Feedback',
      summary: 'Excellent collaborator during transmission projects. Shares knowledge generously with colleagues.',
      rating: 4.7
    },
    { 
      from: 'Meera Nair (Team Member)', 
      date: '2024-11-10', 
      type: 'Upward Feedback',
      summary: 'Provides clear guidance in substation projects and encourages team participation.',
      rating: 4.6
    }
  ]
});


export function EmployeeProfile({ user }: EmployeeProfileProps) {
  const mockProfileData = getMockProfileData(user);
  const [isEditing, setIsEditing] = useState(false);
  const [editedInfo, setEditedInfo] = useState(mockProfileData.personalInfo);

  const handleSaveProfile = () => {
    // In a real app, this would sync with backend
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setEditedInfo(mockProfileData.personalInfo);
    setIsEditing(false);
  };

  const getSkillsByCategory = (category: string) => {
    return mockProfileData.skills.filter(skill => skill.category === category);
  };

  const categories = ['Technical', 'Leadership', 'Analytical', 'Creative'];

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center space-x-4">
              <Avatar className="w-20 h-20">
                <AvatarFallback className="bg-blue-600 text-white text-xl">
                  {user.name.split(' ').map(n => n[0]).join('')}
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
              </div>
            </div>
            <div className="flex space-x-2">
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-500">Email:</span>
                <span className="ml-2">{editedInfo.email}</span>
              </div>
              <div>
                <span className="text-gray-500">Manager:</span>
                <span className="ml-2">{editedInfo.manager}</span>
              </div>
              <div>
                <span className="text-gray-500">Location:</span>
                <span className="ml-2">{editedInfo.location}</span>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <Tabs defaultValue="skills" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="skills">Skills & Development</TabsTrigger>
          <TabsTrigger value="certifications">Certifications</TabsTrigger>
          <TabsTrigger value="training">Training History</TabsTrigger>
          <TabsTrigger value="feedback">Feedback</TabsTrigger>
        </TabsList>

        <TabsContent value="skills" className="space-y-6">
          {categories.map(category => {
            const categorySkills = getSkillsByCategory(category);
            if (categorySkills.length === 0) return null;

            return (
              <Card key={category}>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Target className="w-5 h-5" />
                    <span>{category} Skills</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {categorySkills.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span>{skill.name}</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {skill.current}% / {skill.target}%
                        </span>
                      </div>
                      <div className="space-y-1">
                        <Progress value={skill.current} className="h-2" />
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>Current Level</span>
                          <span>Target: {skill.target}%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </TabsContent>

        <TabsContent value="certifications" className="space-y-4">
          <div className="flex justify-between items-center">
            <h3>Professional Certifications</h3>
            <Button size="sm">
              <Upload className="w-4 h-4 mr-2" />
              Upload Certificate
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mockProfileData.certifications.map((cert, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="mb-1">{cert.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{cert.issuer}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      {cert.verified ? (
                        <Badge variant="default" className="bg-green-600">Verified</Badge>
                      ) : (
                        <Badge variant="secondary">Pending</Badge>
                      )}
                      <ExternalLink className="w-4 h-4 text-gray-400" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Issued: {cert.date}</span>
                    <Award className="w-4 h-4 text-yellow-600" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="training" className="space-y-4">
          <h3>Training & Course History</h3>
          
          <div className="space-y-3">
            {mockProfileData.trainingHistory.map((training, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h4 className="">{training.course}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{training.provider}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>Completed: {training.completed}</span>
                        <span>•</span>
                        <span>Score: {training.score}%</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="text-right">
                        <div className="text-lg text-green-600">{training.score}%</div>
                        <div className="text-xs text-gray-500">Score</div>
                      </div>
                      <Award className="w-5 h-5 text-yellow-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="feedback" className="space-y-4">
          <h3>Performance Feedback & Reviews</h3>
          
          <div className="space-y-4">
            {mockProfileData.feedback.map((feedback, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="">{feedback.from}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{feedback.type} • {feedback.date}</p>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-600 fill-current" />
                      <span className="text-sm">{feedback.rating}</span>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed">{feedback.summary}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}