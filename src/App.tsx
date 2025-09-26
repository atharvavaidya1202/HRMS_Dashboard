import React, { useState, useEffect } from 'react';
import { LoginPage } from './components/LoginPage';
import { EmployeeDashboard } from './components/EmployeeDashboard';
import { HRAdminDashboard } from './components/HRAdminDashboard';
import { AdminDashboard } from './components/AdminDashboard';
import { Navigation } from './components/Navigation';
import { ThemeProvider } from './components/ThemeProvider';

export type UserRole = 'employee' | 'hr' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  department: string;
  avatar?: string;
}

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [currentView, setCurrentView] = useState<'dashboard' | 'profile' | 'analytics' | 'learning' | 'messages' | 'control'>('dashboard');

  useEffect(() => {
    // Check for stored user session
    const storedUser = localStorage.getItem('idp_user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Error parsing stored user:', error);
        localStorage.removeItem('idp_user');
      }
    }
  }, []);

  const handleLogin = (userData: User) => {
    setUser(userData);
    localStorage.setItem('idp_user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('idp_user');
    setCurrentView('dashboard');
  };

  if (!user) {
    return (
      <ThemeProvider>
        <LoginPage onLogin={handleLogin} />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <Navigation 
          user={user} 
          currentView={currentView}
          onViewChange={setCurrentView}
          onLogout={handleLogout}
        />
        
        <div className="pt-16">
          {user.role === 'employee' ? (
            <EmployeeDashboard 
              user={user} 
              currentView={currentView}
              onViewChange={setCurrentView}
            />
          ) : user.role === 'admin' ? (
            <AdminDashboard 
              user={user} 
              currentView={currentView}
              onViewChange={setCurrentView}
            />
          ) : (
            <HRAdminDashboard 
              user={user} 
              currentView={currentView}
              onViewChange={setCurrentView}
            />
          )}
        </div>
      </div>
    </ThemeProvider>
  );
}