export interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
}

export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  status: 'active' | 'completed';
  cover: string;
  category: string;
}

export const newsData: NewsItem[] = [
  {
    id: 1,
    title: 'Профсоюзный бал 2025: незабываемый вечер',
    excerpt: 'Более 500 студентов приняли участие в традиционном профсоюзном бале.',
    date: '2025-03-15',
    category: 'Мероприятия',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop'
  },
  {
    id: 2,
    title: 'Новые возможности для студентов: программа лояльности',
    excerpt: 'ППОС ОмГТУ запускает программу скидок и бонусов для членов профсоюза.',
    date: '2025-03-10',
    category: 'Объявления',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop'
  },
  {
    id: 3,
    title: 'Спортивный фестиваль «Весна-2025»',
    excerpt: 'Приглашаем всех студентов принять участие в ежегодном спортивном фестивале.',
    date: '2025-03-05',
    category: 'Спорт',
    image: 'https://images.unsplash.com/photo-1461896836934-bd45ba688509?w=600&h=400&fit=crop'
  },
];

export const projectsData: ProjectItem[] = [
  {
    id: 1,
    title: 'Студенческая весна 2025',
    description: 'Ежегодный региональный фестиваль творчества студентов.',
    status: 'active',
    cover: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop',
    category: 'Культура'
  },
  {
    id: 2,
    title: 'Здоровый студент',
    description: 'Программа популяризации здорового образа жизни.',
    status: 'active',
    cover: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop',
    category: 'Спорт'
  },
  {
    id: 3,
    title: 'Профориентационный проект «Вектор»',
    description: 'Помощь студентам в выборе карьерного пути.',
    status: 'completed',
    cover: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop',
    category: 'Карьера'
  },
];