import React from 'react';
import { User } from '../App';
import { AdminOverview } from './admin/AdminOverview';
import { AdminAnalytics } from './admin/AdminAnalytics';
import { AdminProfile } from './admin/AdminProfile';
import { AdminLearning } from './admin/AdminLearning';
import { AdminMessages } from './admin/AdminMessages';
import { AdminControl } from './admin/AdminControl';

interface AdminDashboardProps {
  user: User;
  currentView: string;
  onViewChange: (view: 'dashboard' | 'profile' | 'analytics' | 'learning' | 'messages' | 'control') => void;
}

export function AdminDashboard({ user, currentView, onViewChange }: AdminDashboardProps) {
  const renderView = () => {
    switch (currentView) {
      case 'profile':
        return <AdminProfile user={user} />;
      case 'analytics':
        return <AdminAnalytics user={user} />;
      case 'learning':
        return <AdminLearning user={user} />;
      case 'messages':
        return <AdminMessages user={user} />;
      case 'control':
        return <AdminControl user={user} />;
      default:
        return <AdminOverview user={user} onViewChange={onViewChange} />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-6">
      {renderView()}
      <Footer />
    </div>
  );
}
