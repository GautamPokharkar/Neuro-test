import React from 'react';
import { Users, MessageSquare, Play, Award, ArrowRight } from 'lucide-react';
import type { SocialScenario } from '../types';

const demoScenarios: SocialScenario[] = [
  {
    id: '1',
    title: 'Making New Friends',
    description: 'Practice introducing yourself and starting conversations',
    difficulty: 'beginner',
    completed: false,
    category: 'social',
  },
  {
    id: '2',
    title: 'Classroom Participation',
    description: 'Learn how to engage in class discussions effectively',
    difficulty: 'intermediate',
    completed: false,
    category: 'school',
  },
  {
    id: '3',
    title: 'Family Gatherings',
    description: 'Navigate social interactions at family events',
    difficulty: 'beginner',
    completed: true,
    category: 'family',
  },
  {
    id: '4',
    title: 'Job Interview Practice',
    description: 'Prepare for job interviews with confidence',
    difficulty: 'advanced',
    completed: false,
    category: 'work',
  },
];

const difficultyColors = {
  beginner: 'text-green-500 bg-green-50 dark:bg-green-900/20',
  intermediate: 'text-yellow-500 bg-yellow-50 dark:bg-yellow-900/20',
  advanced: 'text-red-500 bg-red-50 dark:bg-red-900/20',
};

export function SocialSkillsPage() {
  const [selectedCategory, setSelectedCategory] = React.useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Scenarios', icon: Users },
    { id: 'social', label: 'Social', icon: MessageSquare },
    { id: 'school', label: 'School', icon: Award },
    { id: 'work', label: 'Work', icon: Play },
  ];

  const filteredScenarios = selectedCategory === 'all'
    ? demoScenarios
    : demoScenarios.filter((scenario) => scenario.category === selectedCategory);

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Social Skills Assistant
        </h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Start Practice Session
        </button>
      </div>

      {/* Category Filter */}
      <div className="flex space-x-4 overflow-x-auto pb-2">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-lg flex items-center space-x-2 whitespace-nowrap ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{category.label}</span>
            </button>
          );
        })}
      </div>

      {/* AI Practice Partner */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
            <MessageSquare className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              AI Practice Partner
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Practice conversations with our AI assistant
            </p>
          </div>
        </div>
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
          <div className="space-y-4 mb-4">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                <MessageSquare className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg p-3">
                <p className="text-gray-700 dark:text-gray-300">
                  Hi! I'm your AI practice partner. What would you like to practice today?
                </p>
              </div>
            </div>
          </div>
          <div className="flex space-x-3">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Send
            </button>
          </div>
        </div>
      </div>

      {/* Scenario List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredScenarios.map((scenario) => (
          <div
            key={scenario.id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {scenario.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {scenario.description}
                  </p>
                </div>
                <div
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    difficultyColors[scenario.difficulty]
                  }`}
                >
                  {scenario.difficulty}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Award
                    className={`w-5 h-5 ${
                      scenario.completed
                        ? 'text-green-500'
                        : 'text-gray-400 dark:text-gray-500'
                    }`}
                  />
                  <span
                    className={`text-sm ${
                      scenario.completed
                        ? 'text-green-500'
                        : 'text-gray-500 dark:text-gray-400'
                    }`}
                  >
                    {scenario.completed ? 'Completed' : 'Not started'}
                  </span>
                </div>
                <button className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
                  <span>Start Practice</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}