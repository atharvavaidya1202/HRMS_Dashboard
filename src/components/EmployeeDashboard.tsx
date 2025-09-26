import React from 'react';
import { User } from '../App';
import { EmployeeProfile } from './employee/EmployeeProfile';
import { EmployeeOverview } from './employee/EmployeeOverview';
import { EmployeeLearning } from './employee/EmployeeLearning';
import { EmployeeMessages } from './employee/EmployeeMessages';
import { Footer } from './Footer';

interface EmployeeDashboardProps {
  user: User;
  currentView: string;
  onViewChange: (view: 'dashboard' | 'profile' | 'analytics' | 'learning' | 'messages') => void;
}

export function EmployeeDashboard({ user, currentView, onViewChange }: EmployeeDashboardProps) {
  const renderView = () => {
    switch (currentView) {
      case 'profile':
        return <EmployeeProfile user={user} />;
      case 'learning':
        return <EmployeeLearning user={user} />;
      case 'messages':
        return <EmployeeMessages user={user} />;
      default:
        return <EmployeeOverview user={user} onViewChange={onViewChange} />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-6">
      {renderView()}
      <Footer />
    </div>
  );
}