import React from 'react';
import { Button } from './ui/button';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Badge } from './ui/badge';
import { useTheme } from './ThemeProvider';
import { User } from '../App';
import { 
  Brain, 
  Home, 
  User as UserIcon, 
  BarChart3, 
  BookOpen, 
  MessageCircle, 
  Settings,
  LogOut,
  Moon,
  Sun,
  Users,
  Shield,
  Crown
} from 'lucide-react';

interface NavigationProps {
  user: User;
  currentView: string;
  onViewChange: (view: 'dashboard' | 'profile' | 'analytics' | 'learning' | 'messages' | 'control') => void;
  onLogout: () => void;
}

export function Navigation({ user, currentView, onViewChange, onLogout }: NavigationProps) {
  const { theme, toggleTheme } = useTheme();

  const getNavigationItems = () => {
    const baseItems = [
      { id: 'dashboard', label: 'Dashboard', icon: Home },
      { id: 'profile', label: 'Profile', icon: UserIcon },
      { id: 'learning', label: 'Learning', icon: BookOpen },
      { id: 'messages', label: 'Messages', icon: MessageCircle },
    ];

    if (user.role === 'hr' || user.role === 'admin') {
      baseItems.splice(2, 0, { id: 'analytics', label: 'Analytics', icon: BarChart3 });
    }
    
    if (user.role === 'admin') {
      baseItems.splice(3, 0, { id: 'control', label: 'Control', icon: Crown });
    }

    return baseItems;
  };

  const getRoleBadge = () => {
    switch (user.role) {
      case 'employee':
        return <Badge variant="secondary">Employee</Badge>;
      case 'hr':
        return <Badge variant="default" className="bg-blue-600"><Users className="w-3 h-3 mr-1" />HR</Badge>;
      case 'admin':
        return <Badge variant="default" className="bg-purple-600"><Shield className="w-3 h-3 mr-1" />Admin</Badge>;
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-600 rounded-lg">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl text-gray-900 dark:text-white">SmartIDP</span>
          </div>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-1">
            {getNavigationItems().map((item) => {
              const Icon = item.icon;
              const isActive = currentView === item.id;
              
              return (
                <Button
                  key={item.id}
                  variant={isActive ? "default" : "ghost"}
                  size="sm"
                  onClick={() => onViewChange(item.id as any)}
                  className="flex items-center space-x-2"
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden lg:inline">{item.label}</span>
                </Button>
              );
            })}
          </div>

          {/* User Menu */}
          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="p-2"
            >
              {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </Button>

            <div className="flex items-center space-x-3 pl-3 border-l border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-2">
                <Avatar className="w-8 h-8">
                  <AvatarFallback className="bg-blue-600 text-white text-sm">
                    {user.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="hidden md:block">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-900 dark:text-white">{user.name}</span>
                    {getRoleBadge()}
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{user.department}</p>
                </div>
              </div>

              <Button
                variant="ghost"
                size="sm"
                onClick={onLogout}
                className="p-2"
              >
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center justify-center space-x-1 pb-2">
          {getNavigationItems().map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;
            
            return (
              <Button
                key={item.id}
                variant={isActive ? "default" : "ghost"}
                size="sm"
                onClick={() => onViewChange(item.id as any)}
                className="flex flex-col items-center space-y-1 h-auto py-2 px-3"
              >
                <Icon className="w-4 h-4" />
                <span className="text-xs">{item.label}</span>
              </Button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}