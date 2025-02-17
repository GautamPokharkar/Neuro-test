export interface User {
  id: string;
  role: 'individual' | 'parent' | 'teacher' | 'caregiver';
  preferences: {
    learningStyle: ('text' | 'audio' | 'visual')[];
    darkMode: boolean;
    fontSize: 'small' | 'medium' | 'large';
  };
  progress: {
    learning: number;
    tasks: number;
    social: number;
  };
}

export interface DailyTask {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  steps: string[];
  dueDate: string;
  priority: 'low' | 'medium' | 'high';
}

export interface Course {
  id: string;
  title: string;
  description: string;
  type: 'text' | 'audio' | 'visual';
  progress: number;
  modules: {
    id: string;
    title: string;
    completed: boolean;
  }[];
}

export interface SocialScenario {
  id: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  completed: boolean;
  category: 'school' | 'work' | 'social' | 'family';
}

export interface ProgressData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
    borderColor: string;
  }[];
}