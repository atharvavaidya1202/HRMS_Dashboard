import React from 'react';
import { User } from '../App';
import { HROverview } from './hr-admin/HROverview';
import { HRAnalytics } from './hr-admin/HRAnalytics';
import { HRProfile } from './hr-admin/HRProfile';
import { HRLearning } from './hr-admin/HRLearning';
import { HRMessages } from './hr-admin/HRMessages';

interface HRAdminDashboardProps {
  user: User;
  currentView: string;
  onViewChange: (view: 'dashboard' | 'profile' | 'analytics' | 'learning' | 'messages') => void;
}

export function HRAdminDashboard({ user, currentView, onViewChange }: HRAdminDashboardProps) {
  const renderView = () => {
    switch (currentView) {
      case 'profile':
        return <HRProfile user={user} />;
      case 'analytics':
        return <HRAnalytics user={user} />;
      case 'learning':
        return <HRLearning user={user} />;
      case 'messages':
        return <HRMessages user={user} />;
      default:
        return <HROverview user={user} onViewChange={onViewChange} />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-6">
      {renderView()}
    </div>
  );
}