import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Calendar, Users, ArrowRight, Play } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Personalized Learning',
    description: 'AI-powered learning paths tailored to your unique needs and preferences.',
  },
  {
    icon: Calendar,
    title: 'Daily Planner',
    description: 'Smart scheduling and task management to help you stay organized and focused.',
  },
  {
    icon: Users,
    title: 'Social Skills Assistant',
    description: 'Practice social interactions and build confidence with our AI-powered guide.',
  },
];

const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Student',
    content: 'NeuroPal has transformed my learning experience. The personalized approach helps me stay focused and achieve my goals.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150',
  },
  {
    name: 'David P.',
    role: 'Parent',
    content: "As a parent, I've seen remarkable progress in my child's development since using this platform.",
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150',
  },
];

export function LandingPage() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="text-center py-20 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Empowering Neurodiverse Minds to
          <span className="text-blue-600 dark:text-blue-400"> Thrive</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Your personalized companion for learning, organization, and social development
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/onboarding"
            className="inline-flex items-center px-6 py-3 text-lg font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Get Started <ArrowRight className="ml-2" size={20} />
          </Link>
          <button
            className="inline-flex items-center px-6 py-3 text-lg font-medium rounded-lg text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            Watch Demo <Play className="ml-2" size={20} />
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Features Designed for You
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <feature.icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Success Stories
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}