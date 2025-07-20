import React from 'react';
import { Plus, Upload, Download, Share, FileText, Users } from 'lucide-react';

const QuickActions: React.FC = () => {
  const actions = [
    { name: 'Create Project', icon: Plus, color: 'bg-blue-500' },
    { name: 'Invite User', icon: Users, color: 'bg-green-500' },
    { name: 'Generate Report', icon: FileText, color: 'bg-purple-500' },
    { name: 'Export Data', icon: Download, color: 'bg-orange-500' },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Quick Actions
      </h3>
      <div className="grid grid-cols-2 gap-3">
        {actions.map((action, index) => {
          const Icon = action.icon;
          return (
            <button
              key={index}
              className="flex flex-col items-center justify-center p-4 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-primary-300 dark:hover:border-primary-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group"
            >
              <div className={`p-2 rounded-lg ${action.color} mb-2 group-hover:scale-110 transition-transform`}>
                <Icon className="h-4 w-4 text-white" />
              </div>
              <span className="text-xs font-medium text-gray-700 dark:text-gray-300 text-center">
                {action.name}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuickActions;