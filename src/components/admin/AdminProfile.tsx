import React from 'react';
import { HRProfile } from '../hr-admin/HRProfile';
import { User } from '../../App';

interface AdminProfileProps {
  user: User;
}

export function AdminProfile({ user }: AdminProfileProps) {
  // Admin profile uses the enhanced HR profile with admin-specific data
  return <HRProfile user={user} />;
}