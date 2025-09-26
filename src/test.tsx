import React from 'react';
import { User } from './App';
import { HROverview } from './components/hr-admin/HROverview';
import { HRAnalytics } from './components/hr-admin/HRAnalytics';
import { HRLearning } from './components/hr-admin/HRLearning';

const testUser: User = {
  id: '1',
  name: 'Test User',
  email: 'test@powergrid.in',
  role: 'admin',
  department: 'Test'
};

function Test() {
  try {
    return (
      <div>
        <HROverview user={testUser} onViewChange={() => {}} />
        <HRAnalytics user={testUser} />
        <HRLearning user={testUser} />
      </div>
    );
  } catch (error) {
    return <div>Error: {String(error)}</div>;
  }
}

export default Test;