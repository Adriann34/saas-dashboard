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
case 'user':
       return User;
     case 'payment':
       return DollarSign;
     case 'report':
       return FileText;
     case 'system':
       return Settings;
     default:
       return User;
   }
 };

 const getStatusIcon = (status: string) => {
   switch (status) {
     case 'success':
       return CheckCircle;
     case 'warning':
       return AlertCircle;
     case 'pending':
       return Clock;
     default:
       return CheckCircle;
   }
 };

 const getStatusColor = (status: string) => {
   switch (status) {
     case 'success':
       return 'text-green-500';
     case 'warning':
       return 'text-yellow-500';
     case 'pending':
       return 'text-blue-500';
     default:
       return 'text-gray-500';
   }
 };

 return (
   <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
     <div className="flex items-center justify-between mb-4">
       <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
         Recent Activity
       </h3>
       <button className="text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300">
         View all
       </button>
     </div>
     
     <div className="space-y-4">
       {activities.map((activity) => {
         const Icon = getIcon(activity.type);
         const StatusIcon = getStatusIcon(activity.status);
         const statusColor = getStatusColor(activity.status);
         
         return (
           <div key={activity.id} className="flex items-start space-x-3 group">
             <div className="flex-shrink-0 p-2 bg-gray-100 dark:bg-gray-700 rounded-lg group-hover:bg-primary-50 dark:group-hover:bg-primary-900/20 transition-colors">
               <Icon className="h-4 w-4 text-gray-600 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400" />
             </div>
             <div className="flex-1 min-w-0">
               <div className="flex items-center justify-between">
                 <p className="text-sm font-medium text-gray-900 dark:text-white">
                   {activity.title}
                 </p>
                 <StatusIcon className={clsx('h-4 w-4', statusColor)} />
               </div>
               <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                 {activity.description}
               </p>
               <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                 {activity.timestamp}
               </p>
             </div>
           </div>
         );
       })}
     </div>
   </div>
 );
};

export default RecentActivity;