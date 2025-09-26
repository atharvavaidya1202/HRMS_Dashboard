import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { User } from '../../App';
import { 
  BookOpen, 
  Users, 
  Target, 
  Search, 
  Filter, 
  Clock, 
  Star, 
  Play,
  CheckCircle2,
  TrendingUp,
  Brain,
  MessageCircle,
  Calendar,
  Award,
  ArrowRight
} from 'lucide-react';

interface EmployeeLearningProps {
  user: User;
}

const mockLearningData = {
  recommendedItems: [
    {
      id: 1,
      type: 'course',
      title: 'Smart Grid Data Analytics',
      provider: 'NPTEL (IIT Delhi)',
      description: 'Learn how to analyze and visualize power grid data for efficient operations.',
      duration: '10 hours',
      difficulty: 'Intermediate',
      rating: 4.8,
      priority: 'high',
      matchReason: 'Matches your Data Analysis and Energy Management goal',
      estimatedCompletion: '3 weeks'
    },
    {
      id: 2,
      type: 'mentor',
      title: 'Sanjay Kulkarni - Senior Manager, Grid Operations',
      department: 'Operations',
      description: 'Sanjay has 12+ years of experience in transmission and load dispatch operations at POWERGRID.',
      availability: 'Available for 2 hours/week',
      skills: ['Grid Management', 'Load Forecasting', 'Project Management'],
      rating: 4.9,
      priority: 'high',
      matchReason: 'Strong mentor for your Power Systems career goal'
    },
    {
      id: 3,
      type: 'project',
      title: 'Integrate Solar Energy into Regional Grid',
      department: 'Engineering',
      description: 'Lead a cross-functional team to design and implement a framework for integrating 100 MW of solar energy into the regional transmission system.',
      duration: '10 weeks',
      skills: ['Renewable Integration', 'Power Systems', 'Team Leadership'],
      priority: 'medium',
      matchReason: 'Combines your technical skills with leadership in sustainable energy'
    }
  ],
  availableCourses: [
    {
      id: 1,
      title: 'Power System Protection and Switchgear',
      provider: 'NPTEL (IIT Roorkee)',
      duration: '6 hours',
      difficulty: 'Advanced',
      rating: 4.7,
      category: 'Technical',
      enrolled: false
    },
    {
      id: 2,
      title: 'Leadership for Energy Sector',
      provider: 'Power Management Institute (NTPC)',
      duration: '4 hours',
      difficulty: 'Beginner',
      rating: 4.5,
      category: 'Leadership',
      enrolled: true,
      progress: 65
    },
    {
      id: 3,
      title: 'Basics of Renewable Energy Systems',
      provider: 'Skill India / Ministry of Power',
      duration: '12 hours',
      difficulty: 'Intermediate',
      rating: 4.6,
      category: 'Analytical',
      enrolled: false
    }
  ],
  mentors: [
    {
      id: 1,
      name: 'Sanjay Kulkarni',
      position: 'Senior Manager, Grid Operations',
      department: 'Operations',
      skills: ['Grid Management', 'Load Forecasting', 'Data Analysis'],
      rating: 4.9,
      availability: 'Available',
      bio: 'Expert in real-time power grid management and load dispatch with 12+ years at POWERGRID.'
    },
    {
      id: 2,
      name: 'Meera Nair',
      position: 'Deputy General Manager, Transmission Projects',
      department: 'Engineering',
      skills: ['Transmission Planning', 'Project Execution', 'Leadership'],
      rating: 4.8,
      availability: 'Limited',
      bio: 'Led multiple 765kV transmission line projects across India at POWERGRID.'
    },
    {
      id: 3,
      name: 'Ravi Prasad',
      position: 'Chief Engineer, Renewable Integration',
      department: 'Research & Innovation',
      skills: ['Solar-Wind Integration', 'Power Systems Analysis', 'Policy Advisory'],
      rating: 4.7,
      availability: 'Available',
      bio: 'Specialist in renewable integration and hybrid energy projects at POWERGRID.'
    }
  ],
  jobRotations: [
    {
      id: 1,
      title: 'National Load Dispatch Centre Rotation',
      department: 'Operations',
      duration: '3 months',
      description: 'Gain hands-on experience in real-time grid monitoring and balancing at NLDC under POWERGRID.',
      skills: ['Load Dispatch', 'Grid Balancing', 'Decision Making'],
      applicationDeadline: '2025-01-15'
    },
    {
      id: 2,
      title: 'Renewable Integration Engineer',
      department: 'Research & Innovation',
      duration: '6 months',
      description: 'Work on projects to integrate large-scale solar and wind farms into the national grid.',
      skills: ['Renewable Energy', 'Power Electronics', 'System Planning'],
      applicationDeadline: '2025-01-30'
    }
  ]
};

export function EmployeeLearning({ user }: EmployeeLearningProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredCourses = mockLearningData.availableCourses.filter(course => 
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === 'all' || course.category.toLowerCase() === selectedCategory)
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl mb-2">Learning & Development</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Personalized learning paths powered by AI to help you reach your goals
          </p>
        </div>
        <Badge variant="secondary" className="flex items-center space-x-1">
          <Brain className="w-4 h-4" />
          <span>AI-Powered</span>
        </Badge>
      </div>

      <Tabs defaultValue="recommendations" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="recommendations">AI Recommendations</TabsTrigger>
          <TabsTrigger value="courses">Course Library</TabsTrigger>
          <TabsTrigger value="mentorship">Mentorship</TabsTrigger>
          <TabsTrigger value="opportunities">Opportunities</TabsTrigger>
        </TabsList>

        <TabsContent value="recommendations" className="space-y-6">
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-blue-200 dark:border-blue-800">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Brain className="w-6 h-6 text-blue-600" />
                <h3 className="text-lg">Personalized for You</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Based on your skill gaps, career goals, and learning preferences, here are your top recommendations:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Target className="w-4 h-4 text-green-600" />
                  <span>Goal-Aligned Content</span>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4 text-blue-600" />
                  <span>Skill Gap Analysis</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-purple-600" />
                  <span>Time-Optimized</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            {mockLearningData.recommendedItems.map((rec) => (
              <Card key={rec.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-lg ${
                        rec.type === 'course' ? 'bg-blue-100 dark:bg-blue-900' :
                        rec.type === 'mentor' ? 'bg-green-100 dark:bg-green-900' :
                        'bg-purple-100 dark:bg-purple-900'
                      }`}>
                        {rec.type === 'course' && <BookOpen className="w-6 h-6 text-blue-600" />}
                        {rec.type === 'mentor' && <Users className="w-6 h-6 text-green-600" />}
                        {rec.type === 'project' && <Target className="w-6 h-6 text-purple-600" />}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="text-lg">{rec.title}</h4>
                          <Badge 
                            variant={rec.priority === 'high' ? 'destructive' : 'secondary'}
                            className="text-xs"
                          >
                            {rec.priority} priority
                          </Badge>
                        </div>
                        {rec.type === 'course' && (
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{rec.provider}</p>
                        )}
                        {rec.type === 'mentor' && (
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{rec.department}</p>
                        )}
                        <p className="text-sm mb-3">{rec.description}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                          {rec.type === 'course' && (
                            <>
                              <span>⏱ {rec.duration}</span>
                              <span>📊 {rec.difficulty}</span>
                              <span>⭐ {rec.rating}</span>
                            </>
                          )}
                          {rec.type === 'mentor' && (
                            <>
                              <span>⏱ {rec.availability}</span>
                              <span>⭐ {rec.rating}</span>
                            </>
                          )}
                          {rec.type === 'project' && (
                            <>
                              <span>⏱ {rec.duration}</span>
                            </>
                          )}
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <Brain className="w-4 h-4 text-blue-600" />
                          <span className="text-blue-600">{rec.matchReason}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      {rec.type === 'course' && `Est. completion: ${rec.estimatedCompletion}`}
                      {rec.type === 'mentor' && 'Available for mentoring'}
                      {rec.type === 'project' && 'Leadership opportunity'}
                    </div>
                    <Button>
                      {rec.type === 'course' && 'Enroll Now'}
                      {rec.type === 'mentor' && 'Request Mentorship'}
                      {rec.type === 'project' && 'Apply'}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="courses" className="space-y-4">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex-1">
              <Input
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
            <select 
              className="px-3 py-2 border rounded-md bg-background"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="all">All Categories</option>
              <option value="technical">Technical</option>
              <option value="leadership">Leadership</option>
              <option value="analytical">Analytical</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCourses.map((course) => (
              <Card key={course.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant="outline" className="text-xs">
                      {course.category}
                    </Badge>
                    <div className="flex items-center space-x-1 text-sm">
                      <Star className="w-4 h-4 text-yellow-600 fill-current" />
                      <span>{course.rating}</span>
                    </div>
                  </div>
                  
                  <h4 className="mb-2">{course.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{course.provider}</p>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <span>⏱ {course.duration}</span>
                    <span>📊 {course.difficulty}</span>
                  </div>

                  {course.enrolled ? (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Progress</span>
                        <span>{course.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                      <Button size="sm" className="w-full">
                        <Play className="w-4 h-4 mr-2" />
                        Continue
                      </Button>
                    </div>
                  ) : (
                    <Button size="sm" variant="outline" className="w-full">
                      Enroll
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="mentorship" className="space-y-4">
          <Card className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3 mb-2">
                <Users className="w-5 h-5 text-green-600" />
                <h3>Mentorship Program</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Connect with experienced professionals who can guide your career development and skill growth.
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mockLearningData.mentors.map((mentor) => (
              <Card key={mentor.id}>
                <CardContent className="p-4">
                  <div className="flex items-start space-x-4 mb-4">
                    <Avatar className="w-12 h-12">
                      <AvatarFallback className="bg-green-600 text-white">
                        {mentor.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h4 className="">{mentor.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{mentor.position}</p>
                      <p className="text-sm text-gray-500">{mentor.department}</p>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-600 fill-current" />
                      <span className="text-sm">{mentor.rating}</span>
                    </div>
                  </div>

                  <p className="text-sm mb-3">{mentor.bio}</p>

                  <div className="mb-4">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Expertise:</p>
                    <div className="flex flex-wrap gap-1">
                      {mentor.skills.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <Badge 
                      variant={mentor.availability === 'Available' ? 'default' : 'secondary'}
                      className={mentor.availability === 'Available' ? 'bg-green-600' : ''}
                    >
                      {mentor.availability}
                    </Badge>
                    <Button size="sm" disabled={mentor.availability !== 'Available'}>
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Request Mentorship
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="opportunities" className="space-y-4">
          <Card className="bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3 mb-2">
                <Target className="w-5 h-5 text-purple-600" />
                <h3>Growth Opportunities</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Explore job rotations, stretch assignments, and special projects to develop new skills.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-4">
            {mockLearningData.jobRotations.map((opportunity) => (
              <Card key={opportunity.id}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-lg mb-2">{opportunity.title}</h4>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                        <span>{opportunity.department}</span>
                        <span>•</span>
                        <span>{opportunity.duration}</span>
                      </div>
                      <p className="text-sm mb-4">{opportunity.description}</p>
                      
                      <div className="mb-4">
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Skills you'll develop:</p>
                        <div className="flex flex-wrap gap-1">
                          {opportunity.skills.map((skill, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>Apply by {opportunity.applicationDeadline}</span>
                    </div>
                    <Button>
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}