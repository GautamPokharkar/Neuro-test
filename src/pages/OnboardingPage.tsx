import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User, BookOpen, Users, Heart, Volume2, Image, FileText, Sun, Moon } from 'lucide-react';

const roles = [
  { id: 'individual', label: 'Neurodiverse Individual', icon: User },
  { id: 'parent', label: 'Parent', icon: Heart },
  { id: 'teacher', label: 'Teacher', icon: BookOpen },
  { id: 'caregiver', label: 'Caregiver', icon: Users },
];

const learningStyles = [
  { id: 'text', label: 'Text', icon: FileText },
  { id: 'audio', label: 'Audio', icon: Volume2 },
  { id: 'visual', label: 'Visual', icon: Image },
];

export function OnboardingPage() {
  const navigate = useNavigate();
  const [step, setStep] = React.useState(1);
  const [selectedRole, setSelectedRole] = React.useState('');
  const [selectedStyles, setSelectedStyles] = React.useState<string[]>([]);
  const [preferences, setPreferences] = React.useState({
    darkMode: false,
    fontSize: 'medium',
  });

  const handleStyleToggle = (styleId: string) => {
    setSelectedStyles((prev) =>
      prev.includes(styleId)
        ? prev.filter((id) => id !== styleId)
        : [...prev, styleId]
    );
  };

  const handleSubmit = () => {
    // Here you would typically save the user preferences
    navigate('/dashboard');
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-8">
          {[1, 2, 3].map((number) => (
            <div
              key={number}
              className={`w-1/3 h-2 rounded-full ${
                number <= step ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'
              }`}
            />
          ))}
        </div>
        <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">
          {step === 1
            ? "Welcome! Let's personalize your experience"
            : step === 2
            ? 'How do you prefer to learn?'
            : 'Customize your interface'}
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          {step === 1
            ? 'Select your role to help us tailor the experience for you'
            : step === 2
            ? 'Choose one or more learning styles that work best for you'
            : 'Set up your interface preferences for the best experience'}
        </p>
      </div>

      {step === 1 && (
        <div className="grid grid-cols-2 gap-4">
          {roles.map((role) => {
            const Icon = role.icon;
            return (
              <button
                key={role.id}
                onClick={() => setSelectedRole(role.id)}
                className={`p-6 rounded-lg border-2 text-left transition-all ${
                  selectedRole === role.id
                    ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20'
                    : 'border-gray-200 dark:border-gray-700 hover:border-blue-400'
                }`}
              >
                <Icon className="w-8 h-8 mb-2 text-blue-600 dark:text-blue-400" />
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {role.label}
                </h3>
              </button>
            );
          })}
        </div>
      )}

      {step === 2 && (
        <div className="grid grid-cols-3 gap-4">
          {learningStyles.map((style) => {
            const Icon = style.icon;
            return (
              <button
                key={style.id}
                onClick={() => handleStyleToggle(style.id)}
                className={`p-6 rounded-lg border-2 text-center transition-all ${
                  selectedStyles.includes(style.id)
                    ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20'
                    : 'border-gray-200 dark:border-gray-700 hover:border-blue-400'
                }`}
              >
                <Icon className="w-8 h-8 mb-2 mx-auto text-blue-600 dark:text-blue-400" />
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {style.label}
                </h3>
              </button>
            );
          })}
        </div>
      )}

      {step === 3 && (
        <div className="space-y-6">
          <div className="flex items-center justify-between p-4 rounded-lg border-2 border-gray-200 dark:border-gray-700">
            <div className="flex items-center">
              {preferences.darkMode ? (
                <Moon className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
              ) : (
                <Sun className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
              )}
              <span className="text-gray-900 dark:text-white">Dark Mode</span>
            </div>
            <button
              onClick={() =>
                setPreferences((prev) => ({ ...prev, darkMode: !prev.darkMode }))
              }
              className={`w-12 h-6 rounded-full transition-colors ${
                preferences.darkMode
                  ? 'bg-blue-600'
                  : 'bg-gray-200 dark:bg-gray-700'
              }`}
            >
              <div
                className={`w-4 h-4 rounded-full bg-white transition-transform ${
                  preferences.darkMode ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          <div className="p-4 rounded-lg border-2 border-gray-200 dark:border-gray-700">
            <label className="block text-gray-900 dark:text-white mb-2">
              Font Size
            </label>
            <div className="flex gap-4">
              {['small', 'medium', 'large'].map((size) => (
                <button
                  key={size}
                  onClick={() =>
                    setPreferences((prev) => ({ ...prev, fontSize: size }))
                  }
                  className={`px-4 py-2 rounded-lg ${
                    preferences.fontSize === size
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white'
                  }`}
                >
                  {size.charAt(0).toUpperCase() + size.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="mt-8 flex justify-between">
        {step > 1 && (
          <button
            onClick={() => setStep((prev) => prev - 1)}
            className="px-6 py-2 rounded-lg text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            Back
          </button>
        )}
        <button
          onClick={() => {
            if (step < 3) {
              setStep((prev) => prev + 1);
            } else {
              handleSubmit();
            }
          }}
          className="ml-auto px-6 py-2 rounded-lg text-white bg-blue-600 hover:bg-blue-700"
          disabled={
            (step === 1 && !selectedRole) ||
            (step === 2 && selectedStyles.length === 0)
          }
        >
          {step === 3 ? 'Complete Setup' : 'Continue'}
        </button>
      </div>
    </div>
  );
}