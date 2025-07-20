import React from 'react';
import { 
  User, 
  DollarSign, 
  FileText, 
  Settings,
  CheckCircle,
  AlertCircle,
  Clock
} from 'lucide-react';
import clsx from 'clsx';

interface ActivityItem {
  id: string;
  type: 'user' | 'payment' | 'report' | 'system';
  title: string;
  description: string;
  timestamp: string;
  status: 'success' | 'warning' | 'pending';
}

const RecentActivity: React.FC = () => {
  const activities: ActivityItem[] = [
    {
      id: '1',
      type: 'user',
      title: 'New user registered',
      description: 'Sarah Johnson joined your workspace',
      timestamp: '2 minutes ago',
      status: 'success',
    },
    {
      id: '2',
      type: 'payment',
      title: 'Payment received',
      description: '$1,299 from Acme Corp',
      timestamp: '1 hour ago',
      status: 'success',
    },
    {
      id: '3',
      type: 'report',
      title: 'Monthly report generated',
      description: 'Q1 analytics report is ready',
      timestamp: '3 hours ago',
      status: 'success',
    },
    {
      id: '4',
      type: 'system',
      title: 'System maintenance',
      description: 'Scheduled maintenance in 2 hours',
      timestamp: '5 hours ago',
      status: 'warning',
    },
    {
      id: '5',
      type: 'user',
      title: 'User invitation sent',
      description: 'Invitation sent to john@example.com',
      timestamp: '1 day ago',
      status: 'pending',
    },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case