import React from 'react';
import { BookOpen, Play, CheckCircle, Clock } from 'lucide-react';
import type { Course } from '../types';

const demoLessons: Course[] = [
  {
    id: '1',
    title: 'Introduction to Mathematics',
    description: 'Learn basic mathematical concepts through interactive lessons.',
    type: 'visual',
    progress: 75,
    modules: [
      { id: 'm1', title: 'Numbers and Counting', completed: true },
      { id: 'm2', title: 'Basic Addition', completed: true },
      { id: 'm3', title: 'Basic Subtraction', completed: false },
    ],
  },
  {
    id: '2',
    title: 'Reading Comprehension',
    description: 'Improve your reading and understanding skills.',
    type: 'audio',
    progress: 40,
    modules: [
      { id: 'm1', title: 'Letter Recognition', completed: true },
      { id: 'm2', title: 'Word Formation', completed: false },
      { id: 'm3', title: 'Simple Sentences', completed: false },
    ],
  },
  {
    id: '3',
    title: 'Social Skills Basics',
    description: 'Learn fundamental social interaction skills.',
    type: 'text',
    progress: 20,
    modules: [
      { id: 'm1', title: 'Greetings', completed: true },
      { id: 'm2', title: 'Conversations', completed: false },
      { id: 'm3', title: 'Body Language', completed: false },
    ],
  },
];

export function LearningHubPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Learning Hub</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Browse All Courses
        </button>
      </div>

      {/* Current Lesson */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
          Continue Learning
        </h2>
        <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
          <div className="w-full md:w-2/3">
            <div className="aspect-video bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
              <Play className="w-16 h-16 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
          <div className="w-full md:w-1/3 space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Introduction to Mathematics
            </h3>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-500">15 minutes left</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }} />
            </div>
            <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Resume Lesson
            </button>
          </div>
        </div>
      </div>

      {/* Course List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {demoLessons.map((lesson) => (
          <div
            key={lesson.id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {lesson.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {lesson.description}
                  </p>
                </div>
                <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="mt-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500 dark:text-gray-400">Progress</span>
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                    {lesson.progress}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${lesson.progress}%` }}
                  />
                </div>
              </div>
              <div className="mt-4 space-y-2">
                {lesson.modules.map((module) => (
                  <div
                    key={module.id}
                    className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300"
                  >
                    <CheckCircle
                      className={`w-4 h-4 ${
                        module.completed
                          ? 'text-green-500'
                          : 'text-gray-400 dark:text-gray-600'
                      }`}
                    />
                    <span>{module.title}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700">
              <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Continue Learning
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}