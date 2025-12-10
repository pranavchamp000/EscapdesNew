export interface ChefInstructor {
  id: number;
  name: string;
  title: string;
  specialty: string;
  description: string;
  image: string;
}

export interface FAQ {
  question: string;
  answer: string;
  category: '8-week' | 'weekend' | 'general';
}