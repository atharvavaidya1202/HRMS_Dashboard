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
import { User } from "../../App";
import { Footer } from "../Footer";
import {
  MessageCircle,
  Send,
  Search,
  Bell,
  Star,
  Clock,
  CheckCircle2,
  AlertCircle,
  Users,
  BookOpen,
  Calendar,
  Pin,
  Archive,
} from "lucide-react";

interface EmployeeMessagesProps {
  user: User;
}

const mockMessagesData = {
  conversations: [
    {
      id: 1,
      type: "direct",
      participant: {
        name: "Shashank Ponna",
        role: "Deputy General Manager - Grid Operations",
        avatar: "SP",
      },
      lastMessage: {
        content:
          "Good job on the load forecasting analysis! Let’s review your Q1 development goals next week.",
        timestamp: "2024-12-24 14:30",
        unread: true,
        sender: "Shashank Ponna",
      },
      unreadCount: 1,
    },
    {
      id: 2,
      type: "direct",
      participant: {
        name: "Neha Kedar",
        role: "Senior Manager - Transmission Projects",
        avatar: "NK",
      },
      lastMessage: {
        content:
          "I’d be happy to mentor you on project execution and planning. When would be a good time to connect?",
        timestamp: "2024-12-24 10:15",
        unread: true,
        sender: "Neha Kedar",
      },
      unreadCount: 2,
    },
    {
      id: 3,
      type: "group",
      participant: {
        name: "POWERGRID Engineering Team",
        role: "Team Channel",
        avatar: "PE",
      },
      lastMessage: {
        content:
          "Reminder: The substation automation review meeting is scheduled tomorrow at 2 PM.",
        timestamp: "2024-12-23 16:45",
        unread: false,
        sender: "Soham Patil",
      },
      unreadCount: 0,
    },
  ],
  notifications: [
    {
      id: 1,
      type: "deadline",
      title: "IDP Review Due Soon",
      message:
        "Your Individual Development Plan review for POWERGRID training is due in 3 days.",
      timestamp: "2024-12-24 09:00",
      priority: "high",
      read: false,
    },
    {
      id: 2,
      type: "course",
      title: "New Course Recommendation",
      message:
        'Based on your role, we recommend the course "Power System Protection and Switchgear".',
      timestamp: "2024-12-23 15:30",
      priority: "medium",
      read: false,
    },
    {
      id: 3,
      type: "achievement",
      title: "Congratulations!",
      message:
        'You’ve successfully completed the "Smart Grid Data Analytics" certification. Great work!',
      timestamp: "2024-12-23 11:20",
      priority: "low",
      read: true,
    },
    {
      id: 4,
      type: "mentorship",
      title: "Mentorship Request Approved",
      message:
        "Neha Kedar has approved your mentorship request. Check your messages for next steps.",
      timestamp: "2024-12-22 14:15",
      priority: "medium",
      read: true,
    },
  ],
  announcements: [
    {
      id: 1,
      title: "Q1 2025 Training Budget Available",
      content:
        "The Q1 learning and development budget for POWERGRID employees is now available. Submit your training/course requests by January 15th.",
      author: "HR Team - POWERGRID",
      timestamp: "2024-12-23 12:00",
      priority: "high",
      pinned: true,
    },
    {
      id: 2,
      title: "New AI-Powered IDP Features",
      content:
        "We’ve launched enhanced AI recommendations for power sector skill-building. Explore the new features in your employee dashboard.",
      author: "Digital Transformation Team",
      timestamp: "2024-12-22 09:30",
      priority: "medium",
      pinned: false,
    },
    {
      id: 3,
      title: "Upcoming Leadership Workshop",
      content:
        "Join us for a hands-on leadership workshop on January 20th at the Power Management Institute, Gurgaon. Registration is now open.",
      author: "L&D Team - POWERGRID",
      timestamp: "2024-12-21 16:00",
      priority: "low",
      pinned: false,
    },
  ],
};

export function EmployeeMessages({
  user,
}: EmployeeMessagesProps) {
  const [activeTab, setActiveTab] = useState<
    "messages" | "notifications" | "announcements"
  >("messages");
  const [selectedConversation, setSelectedConversation] =
    useState<number | null>(1);
  const [newMessage, setNewMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const selectedConversationData =
    mockMessagesData.conversations.find(
      (c) => c.id === selectedConversation,
    );

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // In a real app, this would send the message
      setNewMessage("");
    }
  };

  const unreadNotifications =
    mockMessagesData.notifications.filter((n) => !n.read);
  const totalUnreadMessages =
    mockMessagesData.conversations.reduce(
      (sum, conv) => sum + conv.unreadCount,
      0,
    );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl mb-2">
            Messages & Communication
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Stay connected with your team, mentors, and HR
            representatives
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge
            variant="secondary"
            className="flex items-center space-x-1"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{totalUnreadMessages} unread</span>
          </Badge>
          <Badge
            variant="secondary"
            className="flex items-center space-x-1"
          >
            <Bell className="w-4 h-4" />
            <span>
              {unreadNotifications.length} notifications
            </span>
          </Badge>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-1 bg-gray-100 dark:bg-gray-800 p-1 rounded-lg w-fit">
        <Button
          variant={
            activeTab === "messages" ? "default" : "ghost"
          }
          size="sm"
          onClick={() => setActiveTab("messages")}
          className="flex items-center space-x-2"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Messages</span>
          {totalUnreadMessages > 0 && (
            <Badge
              variant="destructive"
              className="text-xs px-1 py-0 h-5 min-w-[20px]"
            >
              {totalUnreadMessages}
            </Badge>
          )}
        </Button>
        <Button
          variant={
            activeTab === "notifications" ? "default" : "ghost"
          }
          size="sm"
          onClick={() => setActiveTab("notifications")}
          className="flex items-center space-x-2"
        >
          <Bell className="w-4 h-4" />
          <span>Notifications</span>
          {unreadNotifications.length > 0 && (
            <Badge
              variant="destructive"
              className="text-xs px-1 py-0 h-5 min-w-[20px]"
            >
              {unreadNotifications.length}
            </Badge>
          )}
        </Button>
        <Button
          variant={
            activeTab === "announcements" ? "default" : "ghost"
          }
          size="sm"
          onClick={() => setActiveTab("announcements")}
          className="flex items-center space-x-2"
        >
          <Bell className="w-4 h-4" />
          <span>Announcements</span>
        </Button>
      </div>

      {/* Messages Tab */}
      {activeTab === "messages" && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
          {/* Conversation List */}
          <Card className="lg:col-span-1">
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-2">
                <CardTitle className="text-lg">
                  Conversations
                </CardTitle>
              </div>
              <Input
                placeholder="Search conversations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-1">
                {mockMessagesData.conversations.map(
                  (conversation) => (
                    <div
                      key={conversation.id}
                      className={`p-4 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer border-l-2 ${
                        selectedConversation === conversation.id
                          ? "bg-blue-50 dark:bg-blue-900/20 border-l-blue-600"
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
                              conversation.type === "group"
                                ? "bg-purple-600"
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
                            {conversation.participant.role}
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 truncate">
                            {conversation.lastMessage.content}
                          </p>
                          <p className="text-xs text-gray-400 mt-1">
                            {conversation.lastMessage.timestamp}
                          </p>
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
                  <div className="flex items-center space-x-3">
                    <Avatar className="w-10 h-10">
                      <AvatarFallback
                        className={`text-white ${
                          selectedConversationData.type ===
                          "group"
                            ? "bg-purple-600"
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
                        }
                      </p>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="flex-1 p-4">
                  <div className="space-y-4 mb-4 h-96 overflow-y-auto">
                    {/* Sample messages - in a real app, these would come from the backend */}
                    {selectedConversationData.id === 1 && (
                      <>
                        <div className="flex space-x-3">
                          <Avatar className="w-8 h-8">
                            <AvatarFallback className="bg-blue-600 text-white text-sm">
                              DK
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 max-w-md">
                              <p className="text-sm">
                                Hi Sarah! I reviewed your Q4
                                goals and I'm impressed with
                                your progress on the React
                                project.
                              </p>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">
                              2024-12-24 14:25
                            </p>
                          </div>
                        </div>
                        <div className="flex space-x-3">
                          <Avatar className="w-8 h-8">
                            <AvatarFallback className="bg-blue-600 text-white text-sm">
                              DK
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 max-w-md">
                              <p className="text-sm">
                                Great work on the React project!
                                Let's discuss your Q1
                                development goals next week.
                              </p>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">
                              2024-12-24 14:30
                            </p>
                          </div>
                        </div>
                      </>
                    )}

                    {selectedConversationData.id === 2 && (
                      <>
                        <div className="flex justify-end space-x-3">
                          <div className="flex-1 flex justify-end">
                            <div className="bg-blue-600 text-white rounded-lg p-3 max-w-md">
                              <p className="text-sm">
                                Hi Jennifer! I saw your
                                mentorship offering in the
                                system. Would you be available
                                to help me with project
                                management skills?
                              </p>
                            </div>
                          </div>
                          <Avatar className="w-8 h-8">
                            <AvatarFallback className="bg-blue-600 text-white text-sm">
                              SJ
                            </AvatarFallback>
                          </Avatar>
                        </div>
                        <div className="flex space-x-3">
                          <Avatar className="w-8 h-8">
                            <AvatarFallback className="bg-blue-600 text-white text-sm">
                              JW
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 max-w-md">
                              <p className="text-sm">
                                I'd be happy to mentor you on
                                project management skills. When
                                would be a good time to connect?
                              </p>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">
                              2024-12-24 10:15
                            </p>
                          </div>
                        </div>
                      </>
                    )}
                  </div>

                  <div className="flex space-x-2 border-t pt-4">
                    <Textarea
                      placeholder="Type your message..."
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

      {/* Notifications Tab */}
      {activeTab === "notifications" && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Bell className="w-5 h-5" />
              <span>Notifications</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {mockMessagesData.notifications.map(
              (notification) => (
                <div
                  key={notification.id}
                  className={`p-4 rounded-lg border ${
                    !notification.read
                      ? "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800"
                      : "bg-gray-50 dark:bg-gray-800/50"
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <div
                      className={`p-2 rounded-lg ${
                        notification.type === "deadline"
                          ? "bg-red-100 dark:bg-red-900"
                          : notification.type === "course"
                            ? "bg-blue-100 dark:bg-blue-900"
                            : notification.type ===
                                "achievement"
                              ? "bg-green-100 dark:bg-green-900"
                              : "bg-purple-100 dark:bg-purple-900"
                      }`}
                    >
                      {notification.type === "deadline" && (
                        <AlertCircle className="w-5 h-5 text-red-600" />
                      )}
                      {notification.type === "course" && (
                        <BookOpen className="w-5 h-5 text-blue-600" />
                      )}
                      {notification.type === "achievement" && (
                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                      )}
                      {notification.type === "mentorship" && (
                        <Users className="w-5 h-5 text-purple-600" />
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
                              notification.priority === "high"
                                ? "destructive"
                                : notification.priority ===
                                    "medium"
                                  ? "secondary"
                                  : "outline"
                            }
                            className="text-xs"
                          >
                            {notification.priority}
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
                        {!notification.read && (
                          <Button size="sm" variant="outline">
                            Mark as Read
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

      {/* Announcements Tab */}
      {activeTab === "announcements" && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Bell className="w-5 h-5" />
              <span>Company Announcements</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {mockMessagesData.announcements.map(
              (announcement) => (
                <div
                  key={announcement.id}
                  className={`p-4 rounded-lg border ${
                    announcement.pinned
                      ? "bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800"
                      : "bg-gray-50 dark:bg-gray-800/50"
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      {announcement.pinned && (
                        <Pin className="w-4 h-4 text-yellow-600" />
                      )}
                      <h4 className="text-lg">
                        {announcement.title}
                      </h4>
                    </div>
                    <Badge
                      variant={
                        announcement.priority === "high"
                          ? "destructive"
                          : announcement.priority === "medium"
                            ? "secondary"
                            : "outline"
                      }
                      className="text-xs"
                    >
                      {announcement.priority}
                    </Badge>
                  </div>
                  <p className="text-sm mb-3 leading-relaxed">
                    {announcement.content}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>By {announcement.author}</span>
                    <span>{announcement.timestamp}</span>
                  </div>
                </div>
              ),
            )}
          </CardContent>
        </Card>
      )}
      <Footer />
    </div>
  );
}