import React from 'react';
import { Calendar, Clock, CheckCircle, Plus, AlertCircle } from 'lucide-react';
import type { DailyTask } from '../types';

const demoTasks: DailyTask[] = [
  {
    id: '1',
    title: 'Complete Math Homework',
    description: 'Work on algebra problems from chapter 3',
    completed: false,
    steps: [
      'Review lesson notes',
      'Complete problems 1-5',
      'Check answers with calculator',
      'Ask for help if needed',
    ],
    dueDate: '2024-03-20T15:00:00',
    priority: 'high',
  },
  {
    id: '2',
    title: 'Reading Practice',
    description: 'Read chapter 2 of assigned book',
    completed: false,
    steps: [
      'Find a quiet place',
      'Read for 20 minutes',
      'Write down new words',
      'Summarize the chapter',
    ],
    dueDate: '2024-03-20T16:30:00',
    priority: 'medium',
  },
  {
    id: '3',
    title: 'Social Skills Exercise',
    description: 'Practice conversation scenarios',
    completed: true,
    steps: [
      'Review conversation starters',
      'Practice with AI assistant',
      'Record progress',
    ],
    dueDate: '2024-03-20T14:00:00',
    priority: 'low',
  },
];

const priorityColors = {
  high: 'text-red-500 bg-red-50 dark:bg-red-900/20',
  medium: 'text-yellow-500 bg-yellow-50 dark:bg-yellow-900/20',
  low: 'text-green-500 bg-green-50 dark:bg-green-900/20',
};

export function DailyPlannerPage() {
  const [selectedTask, setSelectedTask] = React.useState<DailyTask | null>(null);

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Daily Planner</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center">
          <Plus className="w-5 h-5 mr-2" />
          Add New Task
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Task List */}
        <div className="lg:col-span-2 space-y-4">
          {demoTasks.map((task) => (
            <div
              key={task.id}
              onClick={() => setSelectedTask(task)}
              className={`p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer ${
                selectedTask?.id === task.id
                  ? 'ring-2 ring-blue-500'
                  : ''
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <div
                    className={`p-2 rounded-lg ${
                      priorityColors[task.priority]
                    }`}
                  >
                    <AlertCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {task.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {task.description}
                    </p>
                    <div className="flex items-center space-x-4 mt-2">
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Clock className="w-4 h-4 mr-1" />
                        {new Date(task.dueDate).toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </div>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(task.dueDate).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className={`p-2 rounded-full ${
                    task.completed
                      ? 'bg-green-50 dark:bg-green-900/20'
                      : 'bg-gray-50 dark:bg-gray-700'
                  }`}
                >
                  <CheckCircle
                    className={`w-5 h-5 ${
                      task.completed
                        ? 'text-green-500'
                        : 'text-gray-400 dark:text-gray-500'
                    }`}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Task Details */}
        <div className="lg:col-span-1">
          {selectedTask ? (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sticky top-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Task Details
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                    Steps to Complete
                  </h3>
                  <div className="space-y-3">
                    {selectedTask.steps.map((step, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                      >
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 flex items-center justify-center text-sm font-medium">
                          {index + 1}
                        </div>
                        <p className="text-gray-700 dark:text-gray-300">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                    Timer
                  </h3>
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      25:00
                    </div>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      Start Focus Timer
                    </button>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <button className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                    Mark Complete
                  </button>
                  <button className="flex-1 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                    Edit Task
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
              <Calendar className="w-12 h-12 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
              <p className="text-gray-500 dark:text-gray-400">
                Select a task to view details
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}