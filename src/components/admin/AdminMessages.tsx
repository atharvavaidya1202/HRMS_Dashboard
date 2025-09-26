import React from 'react';
import { HRMessages } from '../hr-admin/HRMessages';
import { Footer } from '../Footer';
import { User } from '../../App';

interface AdminMessagesProps {
  user: User;
}

export function AdminMessages({ user }: AdminMessagesProps) {
  // Admin messages uses the HR messages component with full access
  return (
    <div>
      <HRMessages user={user} />
      <Footer />
    </div>
  );
}