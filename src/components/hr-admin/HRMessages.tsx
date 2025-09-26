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
import { Textarea } from "../ui/textarea";
import { Avatar, AvatarFallback } from "../ui/avatar";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../ui/tabs";
import { User } from "../../App";
import {
  MessageCircle,
  Send,
  Bell,
  Users,
  Megaphone,
  Pin,
  Edit,
  Trash2,
  Plus,
  Search,
  Filter,
  CheckCircle2,
  Clock,
  AlertTriangle,
  Calendar,
  UserCheck,
  MessageSquare,
} from "lucide-react";

interface HRMessagesProps {
  user: User;
}

const getMockHRMessagesData = (user: User) => ({
  conversations: [
    {
      id: 1,
      type: "direct",
      participant: {
        name: "Soham Patil",
        role: "Senior Electrical Engineer",
        department: "Engineering",
        avatar: "SP",
      },
      lastMessage: {
        content:
          "Thank you for approving my Grid Management certification! When can I start?",
        timestamp: "2024-12-24 15:20",
        unread: true,
        sender: "Soham Patil",
      },
      unreadCount: 2,
      priority: "medium",
    },
    {
      id: 2,
      type: "direct",
      participant: {
        name: "Aditya Pharande",
        role: "Operations Manager",
        department: "Operations",
        avatar: "AP",
      },
      lastMessage: {
        content:
          "Can we discuss the Q1 training budget allocation for my team?",
        timestamp: "2024-12-24 11:30",
        unread: true,
        sender: "Aditya Pharande",
      },
      unreadCount: 1,
      priority: "high",
    },
    {
      id: 3,
      type: "escalation",
      participant: {
        name: "System Alert",
        role: "Automated",
        department: "System",
        avatar: "SA",
      },
      lastMessage: {
        content:
          "Employee Neha Kedar has missed 3 consecutive IDP milestones",
        timestamp: "2024-12-24 09:00",
        unread: true,
        sender: "System",
      },
      unreadCount: 1,
      priority: "high",
    },
  ],
  teamCommunications: [
    {
      id: 1,
      title: "Q1 2025 Learning Budget Allocation",
      department: "Engineering",
      manager: "Aditya Pharande",
      status: "pending_response",
      lastUpdate: "2024-12-23 14:00",
      priority: "high",
      summary:
        "Requesting ₹3.5L additional budget for grid certification programs",
    },
    {
      id: 2,
      title: "Team Skill Gap Analysis Results",
      department: "Operations",
      manager: "Neha Kedar",
      status: "completed",
      lastUpdate: "2024-12-22 16:30",
      priority: "medium",
      summary:
        "Analysis complete, recommendations submitted for operational efficiency",
    },
    {
      id: 3,
      title: "Mentorship Program Feedback",
      department: "Planning",
      manager: "Soham Patil",
      status: "in_progress",
      lastUpdate: "2024-12-21 10:15",
      priority: "low",
      summary:
        "Collecting feedback from mentor-mentee pairs on renewable integration",
    },
  ],
  announcements: [
    {
      id: 1,
      title: "New AI-Powered IDP Features Launch",
      content:
        "Enhanced AI recommendations now available for personalized learning paths in PowerGrid. Employees can identify skill gaps more accurately and receive targeted development suggestions.",
      author: user.name,
      department: "all",
      priority: "high",
      scheduledDate: "2025-01-02 09:00",
      status: "scheduled",
      targetAudience: "All Employees",
      engagementStats: { views: 0, clicks: 0, responses: 0 },
    },
    {
      id: 2,
      title: "Q1 Learning Budget Available",
      content:
        "The Q1 2025 learning and development budget is now open for training requests. Submit proposals by January 15th for priority approval.",
      author: user.name,
      department: "all",
      priority: "medium",
      scheduledDate: "2024-12-23 12:00",
      status: "published",
      targetAudience: "All Employees",
      engagementStats: {
        views: 156,
        clicks: 89,
        responses: 23,
      },
    },
  ],
  systemNotifications: [
    {
      id: 1,
      type: "skill_gap",
      title: "Critical Skill Gap Detected",
      message:
        "Grid Management skills showing 23% gap across Engineering team (15 employees affected)",
      department: "Engineering",
      severity: "high",
      timestamp: "2024-12-24 08:30",
      actionRequired: true,
      read: false,
    },
    {
      id: 2,
      type: "budget_alert",
      title: "Budget Threshold Exceeded",
      message:
        "Engineering L&D budget has reached 85% utilization",
      department: "Engineering",
      severity: "medium",
      timestamp: "2024-12-23 16:45",
      actionRequired: true,
      read: false,
    },
    {
      id: 3,
      type: "completion",
      title: "Training Milestone Achieved",
      message:
        "25 employees completed their Q4 development goals",
      department: "all",
      severity: "low",
      timestamp: "2024-12-23 14:20",
      actionRequired: false,
      read: true,
    },
  ],
  escalations: [
    {
      id: 1,
      employee: "Neha Kedar",
      department: "Planning",
      issue: "Missed consecutive IDP milestones",
      severity: "high",
      daysOverdue: 15,
      manager: "Soham Patil",
      lastContact: "2024-12-10",
      recommendedAction: "Manager intervention required",
    },
    {
      id: 2,
      employee: "Soham Patil",
      department: "Engineering",
      issue: "Low engagement in assigned training",
      severity: "medium",
      daysOverdue: 8,
      manager: "Aditya Pharande",
      lastContact: "2024-12-16",
      recommendedAction: "Schedule mentorship session",
    },
  ],
});

export function HRMessages({ user }: HRMessagesProps) {
  const mockHRMessagesData = getMockHRMessagesData(user);
  const [activeTab, setActiveTab] = useState<
    | "messages"
    | "teams"
    | "announcements"
    | "notifications"
    | "escalations"
  >("messages");
  const [selectedConversation, setSelectedConversation] =
    useState<number | null>(1);
  const [newMessage, setNewMessage] = useState("");
  const [newAnnouncement, setNewAnnouncement] = useState({
    title: "",
    content: "",
    department: "all",
    priority: "medium",
  });
  const [searchTerm, setSearchTerm] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setNewMessage("");
    }
  };

  const handleCreateAnnouncement = () => {
    // In a real app, this would create the announcement
    setNewAnnouncement({
      title: "",
      content: "",
      department: "all",
      priority: "medium",
    });
  };

  const selectedConversationData =
    mockHRMessagesData.conversations.find(
      (c) => c.id === selectedConversation,
    );
  const unreadMessages =
    mockHRMessagesData.conversations.reduce(
      (sum, conv) => sum + conv.unreadCount,
      0,
    );
  const unreadNotifications =
    mockHRMessagesData.systemNotifications.filter(
      (n) => !n.read,
    ).length;
  const highPriorityEscalations =
    mockHRMessagesData.escalations.filter(
      (e) => e.severity === "high",
    ).length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl mb-2">Communications Hub</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage team communications, announcements, and
            escalations
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge
            variant="secondary"
            className="flex items-center space-x-1"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{unreadMessages} unread</span>
          </Badge>
          <Badge
            variant="secondary"
            className="flex items-center space-x-1"
          >
            <Bell className="w-4 h-4" />
            <span>{unreadNotifications} alerts</span>
          </Badge>
          {highPriorityEscalations > 0 && (
            <Badge
              variant="destructive"
              className="flex items-center space-x-1"
            >
              <AlertTriangle className="w-4 h-4" />
              <span>{highPriorityEscalations} urgent</span>
            </Badge>
          )}
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-1 bg-gray-100 dark:bg-gray-800 p-1 rounded-lg w-fit">
        {[
          {
            id: "messages",
            label: "Direct Messages",
            icon: MessageCircle,
            count: unreadMessages,
          },
          {
            id: "teams",
            label: "Team Comms",
            icon: Users,
            count: 0,
          },
          {
            id: "announcements",
            label: "Announcements",
            icon: Megaphone,
            count: 0,
          },
          {
            id: "notifications",
            label: "System Alerts",
            icon: Bell,
            count: unreadNotifications,
          },
          {
            id: "escalations",
            label: "Escalations",
            icon: AlertTriangle,
            count: highPriorityEscalations,
          },
        ].map((tab) => {
          const Icon = tab.icon;
          return (
            <Button
              key={tab.id}
              variant={
                activeTab === tab.id ? "default" : "ghost"
              }
              size="sm"
              onClick={() => setActiveTab(tab.id as any)}
              className="flex items-center space-x-2"
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
              {tab.count > 0 && (
                <Badge
                  variant="destructive"
                  className="text-xs px-1 py-0 h-5 min-w-[20px]"
                >
                  {tab.count}
                </Badge>
              )}
            </Button>
          );
        })}
      </div>

      {/* Messages Tab */}
      {activeTab === "messages" && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
          {/* Conversation List */}
          <Card className="lg:col-span-1">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">
                Employee Messages
              </CardTitle>
              <Input
                placeholder="Search conversations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-1">
                {mockHRMessagesData.conversations.map(
                  (conversation) => (
                    <div
                      key={conversation.id}
                      className={`p-4 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer border-l-2 ${
                        selectedConversation === conversation.id
                          ? "bg-blue-50 dark:bg-blue-900/20 border-l-blue-600"
                          : conversation.priority === "high"
                            ? "border-l-red-600"
                            : "border-l-transparent"
                      }`}
                      onClick={() =>
                        setSelectedConversation(conversation.id)
                      }
                    >
                      <div className="flex items-start space-x-3">
                        <Avatar className="w-10 h-10 flex-shrink-0">
                          <AvatarFallback
                            className={`text-white text-sm ${
                              conversation.type === "escalation"
                                ? "bg-red-600"
                                : conversation.priority ===
                                    "high"
                                  ? "bg-orange-600"
                                  : "bg-blue-600"
                            }`}
                          >
                            {conversation.participant.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <p className="text-sm text-gray-900 dark:text-white truncate">
                              {conversation.participant.name}
                            </p>
                            {conversation.unreadCount > 0 && (
                              <Badge
                                variant="destructive"
                                className="text-xs px-1 py-0 h-5 min-w-[20px]"
                              >
                                {conversation.unreadCount}
                              </Badge>
                            )}
                          </div>
                          <p className="text-xs text-gray-500 mb-1">
                            {conversation.participant.role} •{" "}
                            {
                              conversation.participant
                                .department
                            }
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 truncate">
                            {conversation.lastMessage.content}
                          </p>
                          <div className="flex items-center justify-between mt-1">
                            <p className="text-xs text-gray-400">
                              {
                                conversation.lastMessage
                                  .timestamp
                              }
                            </p>
                            {conversation.priority ===
                              "high" && (
                              <Badge
                                variant="destructive"
                                className="text-xs"
                              >
                                High
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ),
                )}
              </div>
            </CardContent>
          </Card>

          {/* Chat Window */}
          <Card className="lg:col-span-2">
            {selectedConversationData ? (
              <>
                <CardHeader className="pb-3 border-b">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Avatar className="w-10 h-10">
                        <AvatarFallback
                          className={`text-white ${
                            selectedConversationData.type ===
                            "escalation"
                              ? "bg-red-600"
                              : selectedConversationData.priority ===
                                  "high"
                                ? "bg-orange-600"
                                : "bg-blue-600"
                          }`}
                        >
                          {
                            selectedConversationData.participant
                              .avatar
                          }
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="text-lg">
                          {
                            selectedConversationData.participant
                              .name
                          }
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {
                            selectedConversationData.participant
                              .role
                          }{" "}
                          •{" "}
                          {
                            selectedConversationData.participant
                              .department
                          }
                        </p>
                      </div>
                    </div>
                    {selectedConversationData.type ===
                      "escalation" && (
                      <Badge variant="destructive">
                        Escalation
                      </Badge>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="flex-1 p-4">
                  <div className="space-y-4 mb-4 h-96 overflow-y-auto">
                    {/* Sample messages based on conversation type */}
                    {selectedConversationData.id === 1 && (
                      <>
                        <div className="flex justify-end space-x-3">
                          <div className="flex-1 flex justify-end">
                            <div className="bg-blue-600 text-white rounded-lg p-3 max-w-md">
                              <p className="text-sm">
                                Your AWS certification request
                                has been approved! You can start
                                immediately.
                              </p>
                            </div>
                          </div>
                          <Avatar className="w-8 h-8">
                            <AvatarFallback className="bg-blue-600 text-white text-sm">
                              {user.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                        </div>
                        <div className="flex space-x-3">
                          <Avatar className="w-8 h-8">
                            <AvatarFallback className="bg-blue-600 text-white text-sm">
                              SJ
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 max-w-md">
                              <p className="text-sm">
                                Thank you for approving my AWS
                                certification request! When can
                                I start?
                              </p>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">
                              2024-12-24 15:20
                            </p>
                          </div>
                        </div>
                      </>
                    )}
                  </div>

                  <div className="flex space-x-2 border-t pt-4">
                    <Textarea
                      placeholder="Type your response..."
                      value={newMessage}
                      onChange={(e) =>
                        setNewMessage(e.target.value)
                      }
                      className="flex-1 min-h-[80px] resize-none"
                    />
                    <Button
                      onClick={handleSendMessage}
                      disabled={!newMessage.trim()}
                      className="px-3"
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </>
            ) : (
              <CardContent className="flex items-center justify-center h-full">
                <div className="text-center text-gray-500">
                  <MessageCircle className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>
                    Select a conversation to start messaging
                  </p>
                </div>
              </CardContent>
            )}
          </Card>
        </div>
      )}

      {/* Team Communications Tab */}
      {activeTab === "teams" && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="w-5 h-5" />
              <span>Team Communications</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {mockHRMessagesData.teamCommunications.map(
              (comm) => (
                <div
                  key={comm.id}
                  className="p-4 border rounded-lg"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="mb-1">{comm.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        {comm.summary}
                      </p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>{comm.department}</span>
                        <span>•</span>
                        <span>Manager: {comm.manager}</span>
                        <span>•</span>
                        <span>{comm.lastUpdate}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge
                        variant={
                          comm.priority === "high"
                            ? "destructive"
                            : comm.priority === "medium"
                              ? "secondary"
                              : "outline"
                        }
                        className="text-xs"
                      >
                        {comm.priority}
                      </Badge>
                      <Badge
                        variant={
                          comm.status === "completed"
                            ? "default"
                            : comm.status === "pending_response"
                              ? "destructive"
                              : "secondary"
                        }
                        className={
                          comm.status === "completed"
                            ? "bg-green-600"
                            : ""
                        }
                      >
                        {comm.status.replace("_", " ")}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button size="sm" variant="outline">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Respond
                    </Button>
                  </div>
                </div>
              ),
            )}
          </CardContent>
        </Card>
      )}

      {/* Announcements Tab */}
      {activeTab === "announcements" && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center space-x-2">
                  <Megaphone className="w-5 h-5" />
                  <span>Create New Announcement</span>
                </CardTitle>
                <Button onClick={handleCreateAnnouncement}>
                  <Plus className="w-4 h-4 mr-2" />
                  Publish
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                placeholder="Announcement title..."
                value={newAnnouncement.title}
                onChange={(e) =>
                  setNewAnnouncement({
                    ...newAnnouncement,
                    title: e.target.value,
                  })
                }
              />
              <Textarea
                placeholder="Announcement content..."
                value={newAnnouncement.content}
                onChange={(e) =>
                  setNewAnnouncement({
                    ...newAnnouncement,
                    content: e.target.value,
                  })
                }
                className="min-h-[100px]"
              />
              <div className="flex space-x-4">
                <select
                  className="px-3 py-2 border rounded-md bg-background"
                  value={newAnnouncement.department}
                  onChange={(e) =>
                    setNewAnnouncement({
                      ...newAnnouncement,
                      department: e.target.value,
                    })
                  }
                >
                  <option value="all">All Departments</option>
                  <option value="engineering">
                    Engineering
                  </option>
                  <option value="product">Product</option>
                  <option value="design">Design</option>
                  <option value="marketing">Marketing</option>
                </select>
                <select
                  className="px-3 py-2 border rounded-md bg-background"
                  value={newAnnouncement.priority}
                  onChange={(e) =>
                    setNewAnnouncement({
                      ...newAnnouncement,
                      priority: e.target.value,
                    })
                  }
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">
                    Medium Priority
                  </option>
                  <option value="high">High Priority</option>
                </select>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Announcements</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {mockHRMessagesData.announcements.map(
                (announcement) => (
                  <div
                    key={announcement.id}
                    className="p-4 border rounded-lg"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="text-lg">
                            {announcement.title}
                          </h4>
                          <Badge
                            variant={
                              announcement.status ===
                              "published"
                                ? "default"
                                : "secondary"
                            }
                            className={
                              announcement.status ===
                              "published"
                                ? "bg-green-600"
                                : ""
                            }
                          >
                            {announcement.status}
                          </Badge>
                        </div>
                        <p className="text-sm mb-3 leading-relaxed">
                          {announcement.content}
                        </p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>By {announcement.author}</span>
                          <span>•</span>
                          <span>
                            {announcement.targetAudience}
                          </span>
                          <span>•</span>
                          <span>
                            {announcement.scheduledDate}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge
                          variant={
                            announcement.priority === "high"
                              ? "destructive"
                              : announcement.priority ===
                                  "medium"
                                ? "secondary"
                                : "outline"
                          }
                          className="text-xs"
                        >
                          {announcement.priority}
                        </Badge>
                        <Button size="sm" variant="outline">
                          <Edit className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>

                    {announcement.status === "published" && (
                      <div className="grid grid-cols-3 gap-4 pt-3 border-t text-center">
                        <div>
                          <div className="text-lg text-blue-600">
                            {announcement.engagementStats.views}
                          </div>
                          <div className="text-xs text-gray-500">
                            Views
                          </div>
                        </div>
                        <div>
                          <div className="text-lg text-green-600">
                            {
                              announcement.engagementStats
                                .clicks
                            }
                          </div>
                          <div className="text-xs text-gray-500">
                            Clicks
                          </div>
                        </div>
                        <div>
                          <div className="text-lg text-purple-600">
                            {
                              announcement.engagementStats
                                .responses
                            }
                          </div>
                          <div className="text-xs text-gray-500">
                            Responses
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ),
              )}
            </CardContent>
          </Card>
        </div>
      )}

      {/* System Notifications Tab */}
      {activeTab === "notifications" && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Bell className="w-5 h-5" />
              <span>System Notifications</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {mockHRMessagesData.systemNotifications.map(
              (notification) => (
                <div
                  key={notification.id}
                  className={`p-4 rounded-lg border ${
                    !notification.read
                      ? "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800"
                      : "bg-gray-50 dark:bg-gray-800/50"
                  } ${notification.severity === "high" ? "border-l-4 border-l-red-600" : ""}`}
                >
                  <div className="flex items-start space-x-3">
                    <div
                      className={`p-2 rounded-lg ${
                        notification.type === "skill_gap"
                          ? "bg-red-100 dark:bg-red-900"
                          : notification.type === "budget_alert"
                            ? "bg-yellow-100 dark:bg-yellow-900"
                            : "bg-green-100 dark:bg-green-900"
                      }`}
                    >
                      {notification.type === "skill_gap" && (
                        <AlertTriangle className="w-5 h-5 text-red-600" />
                      )}
                      {notification.type === "budget_alert" && (
                        <DollarSign className="w-5 h-5 text-yellow-600" />
                      )}
                      {notification.type === "completion" && (
                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-sm">
                          {notification.title}
                        </h4>
                        <div className="flex items-center space-x-2">
                          <Badge
                            variant={
                              notification.severity === "high"
                                ? "destructive"
                                : notification.severity ===
                                    "medium"
                                  ? "secondary"
                                  : "outline"
                            }
                            className="text-xs"
                          >
                            {notification.severity}
                          </Badge>
                          {!notification.read && (
                            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          )}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        {notification.message}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">
                          {notification.timestamp}
                        </span>
                        {notification.actionRequired && (
                          <Button size="sm" variant="outline">
                            Take Action
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ),
            )}
          </CardContent>
        </Card>
      )}

      {/* Escalations Tab */}
      {activeTab === "escalations" && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertTriangle className="w-5 h-5 text-red-600" />
              <span>Employee Escalations</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {mockHRMessagesData.escalations.map(
              (escalation) => (
                <div
                  key={escalation.id}
                  className="p-4 border rounded-lg bg-red-50 dark:bg-red-900/20"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <Avatar className="w-10 h-10">
                        <AvatarFallback className="bg-red-600 text-white">
                          {escalation.employee
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="mb-1">
                          {escalation.employee}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {escalation.department}
                        </p>
                      </div>
                    </div>
                    <Badge
                      variant={
                        escalation.severity === "high"
                          ? "destructive"
                          : "secondary"
                      }
                      className="text-xs"
                    >
                      {escalation.severity} severity
                    </Badge>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm mb-2">
                      <strong>Issue:</strong> {escalation.issue}
                    </p>
                    <p className="text-sm mb-2">
                      <strong>Manager:</strong>{" "}
                      {escalation.manager}
                    </p>
                    <p className="text-sm mb-2">
                      <strong>Days Overdue:</strong>{" "}
                      {escalation.daysOverdue}
                    </p>
                    <p className="text-sm mb-2">
                      <strong>Last Contact:</strong>{" "}
                      {escalation.lastContact}
                    </p>
                    <p className="text-sm">
                      <strong>Recommended Action:</strong>{" "}
                      {escalation.recommendedAction}
                    </p>
                  </div>

                  <div className="flex items-center justify-end space-x-2">
                    <Button size="sm" variant="outline">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Contact Manager
                    </Button>
                    <Button size="sm" variant="outline">
                      <UserCheck className="w-4 h-4 mr-2" />
                      Schedule 1:1
                    </Button>
                    <Button size="sm">Resolve</Button>
                  </div>
                </div>
              ),
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}