import React from 'react';
import { LayoutDashboard, BarChart3, Users, Settings, CreditCard, FileText, Bell, HelpCircle, ChevronLeft, Zap } from 'lucide-react';
import clsx from 'clsx';

interface SidebarProps {
  collapsed: boolean;
  onToggle: (collapsed: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed, onToggle }) => {
  // Navigation items array
  const menuItems = [
    { title: 'Dashboard', IconComponent: LayoutDashboard, url: '#', isActive: true },
    { title: 'Analytics', IconComponent: BarChart3, url: '#', isActive: false },
    { title: 'Customers', IconComponent: Users, url: '#', isActive: false },
    { title: 'Billing', IconComponent: CreditCard, url: '#', isActive: false },
    { title: 'Reports', IconComponent: FileText, url: '#', isActive: false },
    { title: 'Notifications', IconComponent: Bell, url: '#', isActive: false },
  ];

  // Render navigation item
  const renderNavItem = (item: typeof menuItems[0]) => {
    const { title, IconComponent, url, isActive } = item;
    
    const linkClasses = clsx(
      'group flex items-center px-2 py-2 text-sm font-medium rounded-lg transition-colors',
      isActive 
        ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300'
        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'
    );

    return (
      <a href={url} className={linkClasses} key={title}>
        <IconComponent className="flex-shrink-0 h-5 w-5" />
        {!collapsed && <span className="ml-3">{title}</span>}
      </a>
    );
  };

  // Render help link
  const renderHelpLink = (icon: React.ElementType, text: string) => (
    <a 
      href="#" 
      className="group flex items-center px-2 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white transition-colors"
    >
      {React.createElement(icon, { className: "flex-shrink-0 h-5 w-5" })}
      {!collapsed && <span className="ml-3">{text}</span>}
    </a>
  );

  const sidebarWidth = collapsed ? 'w-16' : 'w-64';
  const sidebarClasses = clsx(
    'bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-all duration-300 ease-in-out',
    sidebarWidth
  );

  return (
    <div className={sidebarClasses}>
      <div className="flex flex-col h-full">
        
        {/* Header Section */}
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
            <ChevronLeft 
              className={clsx(
                'h-5 w-5 text-gray-500 transition-transform',
                collapsed && 'rotate-180'
              )} 
            />
          </button>
        </div>

        {/* Main Navigation */}
        <nav className="flex-1 px-2 py-4 space-y-1">
          {menuItems.map(renderNavItem)}
        </nav>

        {/* Footer Section */}
        <div className="border-t border-gray-200 dark:border-gray-700 p-2">
          {renderHelpLink(HelpCircle, 'Help & Support')}
          {renderHelpLink(Settings, 'Settings')}
        </div>
        
      </div>
    </div>
  );
};

export default Sidebar;