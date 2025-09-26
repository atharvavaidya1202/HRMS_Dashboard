import React, { useState } from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Badge } from "./ui/badge";
import { User, UserRole } from "../App";
import { Brain, Shield, Users, Zap } from "lucide-react";

interface LoginPageProps {
  onLogin: (user: User) => void;
}

const mockUsers = {
  employee: {
    id: "1",
    name: "Atharva Vaidya",
    email: "atharva.vaidya@powergrid.in",
    role: "employee" as UserRole,
    department: "Grid Operations",
  },
  hr: {
    id: "2",
    name: "Shashank Ponna",
    email: "shashank.ponna@powergrid.in",
    role: "hr" as UserRole,
    department: "Human Resources",
  },
  admin: {
    id: "3",
    name: "Vivek Dalimbkar",
    email: "vivek.dalimbkar@powergrid.in",
    role: "admin" as UserRole,
    department: "Corporate Administration",
  },
};

export function LoginPage({ onLogin }: LoginPageProps) {
  const [selectedRole, setSelectedRole] =
    useState<UserRole>("employee");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (role: UserRole) => {
    setIsLoading(true);
    // Simulate OAuth flow
    await new Promise((resolve) => setTimeout(resolve, 1500));
    onLogin(mockUsers[role]);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center min-h-screen space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-3">
              <div className="p-3 bg-blue-600 rounded-xl">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl text-gray-900 dark:text-white">
                SmartIDP @ POWERGRID
              </h1>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-md">
              AI-Powered Workforce Development Platform
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full mb-8">
            <div className="flex flex-col items-center text-center p-6 bg-white/50 dark:bg-gray-800/50 rounded-lg backdrop-blur-sm">
              <Zap className="w-12 h-12 text-blue-600 mb-3" />
              <h3 className="text-lg mb-2 text-gray-900 dark:text-white">
                Grid Intelligence
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                AI-driven skill analysis for engineers and
                operators
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-white/50 dark:bg-gray-800/50 rounded-lg backdrop-blur-sm">
              <Users className="w-12 h-12 text-purple-600 mb-3" />
              <h3 className="text-lg mb-2 text-gray-900 dark:text-white">
                Workforce Analytics
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Insights for training, reskilling, and
                succession planning in the power sector
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-white/50 dark:bg-gray-800/50 rounded-lg backdrop-blur-sm">
              <Shield className="w-12 h-12 text-green-600 mb-3" />
              <h3 className="text-lg mb-2 text-gray-900 dark:text-white">
                Secure & Compliant
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                CERC/RPO-compliant data handling with OAuth 2.0
                authentication
              </p>
            </div>
          </div>

          {/* Login Card */}
          <Card className="w-full max-w-md backdrop-blur-sm bg-white/90 dark:bg-gray-800/90">
            <CardHeader className="text-center">
              <CardTitle>Welcome Back</CardTitle>
              <CardDescription>
                Sign in with your POWERGRID account
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@powergrid.in"
                  value={mockUsers[selectedRole].email}
                  readOnly
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="role">Demo Role</Label>
                <Select
                  value={selectedRole}
                  onValueChange={(value: UserRole) =>
                    setSelectedRole(value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="employee">
                      <div className="flex items-center space-x-2">
                        <span>Employee</span>
                        <Badge variant="secondary">
                          Atharva Vaidya
                        </Badge>
                      </div>
                    </SelectItem>
                    <SelectItem value="hr">
                      <div className="flex items-center space-x-2">
                        <span>HR Manager</span>
                        <Badge variant="secondary">
                          Shashank Ponna
                        </Badge>
                      </div>
                    </SelectItem>
                    <SelectItem value="admin">
                      <div className="flex items-center space-x-2">
                        <span>Admin</span>
                        <Badge variant="secondary">
                          Vivek Dalimbkar
                        </Badge>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                className="w-full"
                onClick={() => handleLogin(selectedRole)}
                disabled={isLoading}
              >
                {isLoading
                  ? "Authenticating..."
                  : "Sign In with OAuth 2.0"}
              </Button>

              <div className="text-center">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Secured with TLS 1.3 encryption
                </p>
              </div>
            </CardContent>
          </Card>

          <p className="text-xs text-center text-gray-500 dark:text-gray-400 max-w-md">
            This is a demo environment. In production,
            authentication would be handled through POWERGRID’s
            identity provider.
          </p>
        </div>
      </div>
    </div>
  );
}