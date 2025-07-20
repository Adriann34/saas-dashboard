import React from 'react';
import {
  LayoutDashboard,
  BarChart3,
  Users,
  Settings,
  CreditCard,
  FileText,
  Bell,
  HelpCircle,
  ChevronLeft,
  Zap
} from 'lucide-react';
import clsx from 'clsx';

interface SidebarProps {
  collapsed: boolean;
  onToggle: (collapsed: boolean) => void;
}

const navigation = [
  { name: 'Dashboard', icon: LayoutDashboard, href: '#', current: true },
  { name: 'Analytics', icon: BarChart3, href: '#' },
  { name: 'Customers', icon: Users, href: '#' },
  { name: 'Billing', icon: CreditCard, href: '#' },
  { name: 'Reports', icon: FileText, href: '#' },
  { name: 'Notifications', icon: Bell, href: '#' },
];

const Sidebar: React.FC<SidebarProps> = ({ collapsed, onToggle }) => {
  return (
    <div className={clsx(
      'bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-all duration-300 ease-in-out',
      collapsed ? 'w-16' : 'w-64'
    )}>
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200 dark:border-gray-700">
          <div className={clsx('flex items-center', collapsed && 'justify-center')}>
            <div className="flex-shrink-0">
              <Zap className="h-8 w-8 text-primary-600" />
            </div>
            {!collapsed && (
              <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">
                SaaSify
              </span>
            )}
          </div>
          <button
            onClick={() => onToggle(!collapsed)}
            className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <ChevronLeft className={clsx(
              'h-5 w-5 text-gray-500 transition-transform',
              collapsed && 'rotate-180'
            )} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-2 py-4 space-y-1">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <a                    {/* ✅ ADDED <a TAG HERE */}
                key={item.name}
                href={item.href}
                className={clsx(
                  'group flex items-center px-2 py-2 text-sm font-medium rounded-lg transition-colors',
                  item.current
                    ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'
                )}
              >
                <Icon className="flex-shrink-0 h-5 w-5" />
                {!collapsed && (
                  <span className="ml-3">{item.name}</span>
                )}
              </a>
            );
          })}
        </nav>

        {/* Help Section */}
        <div className="border-t border-gray-200 dark:border-gray-700 p-2">
          <a                      {/* ✅ ADDED <a TAG HERE */}
            href="#"
            className="group flex items-center px-2 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <HelpCircle className="flex-shrink-0 h-5 w-5" />
            {!collapsed && (
              <span className="ml-3">Help & Support</span>
            )}
          </a>
          <a                      {/* ✅ ADDED <a TAG HERE */}
            href="#"
            className="group flex items-center px-2 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <Settings className="flex-shrink-0 h-5 w-5" />
            {!collapsed && (
              <span className="ml-3">Settings</span>
            )}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;