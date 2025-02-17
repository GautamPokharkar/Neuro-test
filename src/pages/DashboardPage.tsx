import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Calendar, Users, ArrowRight, Brain, Target, Clock, Star } from 'lucide-react';

const progressStats = [
  { title: 'Learning Progress', value: '75%', icon: BookOpen, color: 'bg-blue-500' },
  { title: 'Tasks Completed', value: '12/15', icon: Calendar, color: 'bg-green-500' },
  { title: 'Social Skills', value: '60%', icon: Users, color: 'bg-purple-500' },
];

const quickActions = [
  { title: 'Start Learning', path: '/learning', icon: Brain },
  { title: 'View Tasks', path: '/planner', icon: Calendar },
  { title: 'Practice Social Skills', path: '/social', icon: Users },
];

const recentActivities = [
  { title: 'Completed Math Module', time: '2 hours ago', icon: Star },
  { title: 'Daily Task: Reading Practice', time: '4 hours ago', icon: Clock },
  { title: 'Social Scenario Practice', time: 'Yesterday', icon: Users },
];

export function DashboardPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            New Task
          </button>
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            Start Lesson
          </button>
        </div>
      </div>

      {/* Progress Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {progressStats.map((stat) => (
          <div
            key={stat.title}
            className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{stat.title}</p>
                <p className="text-2xl font-bold mt-1 text-gray-900 dark:text-white">
                  {stat.value}
                </p>
              </div>
              <div className={`p-3 rounded-full ${stat.color}`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {quickActions.map((action) => (
          <Link
            key={action.title}
            to={action.path}
            className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow group"
          >
            <div className="flex items-center space-x-4">
              <action.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {action.title}
                </h3>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
            </div>
          </Link>
        ))}
      </div>

      {/* Recent Activities */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
          Recent Activities
        </h2>
        <div className="space-y-4">
          {recentActivities.map((activity) => (
            <div
              key={activity.title}
              className="flex items-center space-x-4 p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-full">
                <activity.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="flex-1">
                <p className="text-gray-900 dark:text-white font-medium">
                  {activity.title}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {activity.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}