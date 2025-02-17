import React from 'react';
import { BookOpen, Calendar, Users, TrendingUp, AlertCircle, Award } from 'lucide-react';

const progressStats = [
  {
    title: 'Learning Progress',
    value: '75%',
    change: '+5%',
    trend: 'up',
    icon: BookOpen,
    color: 'blue',
  },
  {
    title: 'Task Completion',
    value: '80%',
    change: '+10%',
    trend: 'up',
    icon: Calendar,
    color: 'green',
  },
  {
    title: 'Social Skills',
    value: '60%',
    change: '+8%',
    trend: 'up',
    icon: Users,
    color: 'purple',
  },
];

const recentActivities = [
  {
    title: 'Completed Math Module',
    type: 'learning',
    time: '2 hours ago',
    icon: BookOpen,
  },
  {
    title: 'Finished Daily Tasks',
    type: 'task',
    time: '4 hours ago',
    icon: Calendar,
  },
  {
    title: 'Social Practice Session',
    type: 'social',
    time: 'Yesterday',
    icon: Users,
  },
];

const upcomingTasks = [
  {
    title: 'Math Homework',
    dueDate: '2024-03-20',
    priority: 'high',
  },
  {
    title: 'Reading Practice',
    dueDate: '2024-03-21',
    priority: 'medium',
  },
  {
    title: 'Social Skills Exercise',
    dueDate: '2024-03-22',
    priority: 'low',
  },
];

export function ParentDashboardPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Parent Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Monitor and support your child's progress
          </p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Generate Report
        </button>
      </div>

      {/* Progress Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {progressStats.map((stat) => (
          <div key={stat.title} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-full bg-${stat.color}-100 dark:bg-${stat.color}-900/20`}>
                <stat.icon className={`w-6 h-6 text-${stat.color}-600 dark:text-${stat.color}-400`} />
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4 text-green-500" />
                <span className="text-sm text-green-500">{stat.change}</span>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{stat.value}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{stat.title}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activities */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Recent Activities
          </h2>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.title} className="flex items-center space-x-4 p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors">
                <div className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
                  <activity.icon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </div>
                <div className="flex-1">
                  <p className="text-gray-900 dark:text-white font-medium">{activity.title}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Tasks */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Upcoming Tasks
          </h2>
          <div className="space-y-4">
            {upcomingTasks.map((task) => (
              <div key={task.title} className="flex items-center justify-between p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
                    <AlertCircle className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  </div>
                  <div>
                    <p className="text-gray-900 dark:text-white font-medium">{task.title}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Due: {new Date(task.dueDate).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <button className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/40 transition-colors">
                  Review
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Achievement Badges */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Recent Achievements
        </h2>
        <div className="flex space-x-4 overflow-x-auto pb-2">
          {[1, 2, 3, 4].map((badge) => (
            <div key={badge} className="flex-shrink-0 w-24 text-center">
              <div className="w-16 h-16 mx-auto bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mb-2">
                <Award className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">Achievement {badge}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
