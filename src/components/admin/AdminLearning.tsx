import React from 'react';
import { HRLearning } from '../hr-admin/HRLearning';
import { User } from '../../App';

interface AdminLearningProps {
  user: User;
}

export function AdminLearning({ user }: AdminLearningProps) {
  // Admin learning uses the HR learning component with full access
  return <HRLearning user={user} />;
}