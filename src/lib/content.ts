
export type Course = {
  slug: string;
  title: string;
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  image: string;
  instructor: {
    name: string;
    title: string;
    image: string;
  };
  modules: {
    title: string;
    content: string;
  }[];
  objectives: string[];
};

export type FAQ = {
  question: string;
  answer: string;
};

export type GalleryItem = {
  id: number;
  title: string;
  description: string;
  image: string;
  hint: string;
};

export type Testimonial = {
  name: string;
  title: string;
  quote: string;
  image: string;
};

export const courses: Course[] = [
  {
    slug: 'ai-fundamentals',
    title: 'AI Fundamentals',
    description: 'A comprehensive introduction to the world of Artificial Intelligence. Perfect for beginners with no prior experience.',
    level: 'Beginner',
    duration: '4 Weeks',
    image: 'https://placehold.co/600x400',
    instructor: {
      name: 'Dr. Evelyn Reed',
      title: 'Lead AI Scientist',
      image: 'https://placehold.co/100x100',
    },
    modules: [
      { title: 'Introduction to AI', content: 'History, definitions, and key concepts.' },
      { title: 'Types of AI', content: 'Narrow, General, and Super AI.' },
      { title: 'Search Algorithms', content: 'Exploring foundational search techniques.' },
      { title: 'Introduction to Machine Learning', content: 'Supervised vs. Unsupervised learning.' },
    ],
    objectives: [
      'Understand the core concepts and history of AI.',
      'Differentiate between various types of AI systems.',
      'Grasp the fundamentals of machine learning.',
      'Build a simple AI model using a popular framework.',
    ],
  },
  {
    slug: 'machine-learning-mastery',
    title: 'Machine Learning Mastery',
    description: 'Dive deep into machine learning algorithms, models, and practical applications. Requires basic programming knowledge.',
    level: 'Intermediate',
    duration: '8 Weeks',
    image: 'https://placehold.co/600x400',
    instructor: {
      name: 'Prof. Kenji Tanaka',
      title: 'ML Research Fellow',
      image: 'https://placehold.co/100x100',
    },
    modules: [
      { title: 'Regression and Classification', content: 'Linear models, logistic regression, and more.' },
      { title: 'Decision Trees and Ensemble Methods', content: 'Random Forests and Gradient Boosting.' },
      { title: 'Unsupervised Learning', content: 'Clustering with K-Means, PCA.' },
      { title: 'Model Evaluation and Tuning', content: 'Cross-validation and hyperparameter optimization.' },
    ],
    objectives: [
      'Implement various ML models from scratch.',
      'Understand the trade-offs between different algorithms.',
      'Evaluate and optimize machine learning models.',
      'Complete a real-world machine learning project.',
    ],
  },
  {
    slug: 'deep-learning-foundations',
    title: 'Deep Learning Foundations',
    description: 'Explore the architecture of neural networks and build powerful deep learning models for complex tasks.',
    level: 'Advanced',
    duration: '12 Weeks',
    image: 'https://placehold.co/600x400',
    instructor: {
      name: 'Dr. Anya Sharma',
      title: 'Deep Learning Specialist',
      image: 'https://placehold.co/100x100',
    },
    modules: [
      { title: 'Neural Networks and Backpropagation', content: 'The building blocks of deep learning.' },
      { title: 'Convolutional Neural Networks (CNNs)', content: 'For image recognition and computer vision.' },
      { title: 'Recurrent Neural Networks (RNNs)', content: 'For sequence data like text and time series.' },
      { title: 'Transformers and Attention', content: 'The state-of-the-art in NLP.' },
    ],
    objectives: [
      'Design and train neural networks for various tasks.',
      'Build models for image classification and text generation.',
      'Understand the theory behind modern deep learning architectures.',
      'Deploy a deep learning model to a production-like environment.',
    ],
  },
  {
    slug: 'data-science-for-business',
    title: 'Data Science for Business',
    description: 'Learn how to leverage data science techniques to drive business value, from data collection to strategic insights.',
    level: 'Intermediate',
    duration: '6 Weeks',
    image: 'https://placehold.co/600x400',
    instructor: {
      name: 'Mark Chen',
      title: 'Principal Data Strategist',
      image: 'https://placehold.co/100x100',
    },
    modules: [
      { title: 'The Data Science Lifecycle', content: 'From business understanding to deployment.' },
      { title: 'Data Wrangling and EDA', content: 'Cleaning data and exploratory data analysis.' },
      { title: 'Business Intelligence and Visualization', content: 'Creating impactful dashboards.' },
      { title: 'Predictive Modeling for Business', content: 'Forecasting, churn prediction, etc.' },
    ],
    objectives: [
      'Frame business problems as data science tasks.',
      'Perform data analysis and create meaningful visualizations.',
      'Build predictive models to solve business challenges.',
      'Communicate data-driven insights effectively to stakeholders.',
    ],
  },
];

export const faqs: FAQ[] = [
  {
    question: 'Who are these courses for?',
    answer: 'Our courses are designed for a wide range of individuals, from absolute beginners in tech to experienced programmers looking to specialize in AI. Each course has a clearly stated level (Beginner, Intermediate, Advanced) to help you choose.',
  },
  {
    question: 'What are the prerequisites?',
    answer: 'Our "AI Fundamentals" course has no prerequisites. For intermediate and advanced courses, a basic understanding of Python programming is recommended. Specific requirements are listed on each course page.',
  },
  {
    question: 'Do I get a certificate upon completion?',
    answer: 'Yes, upon successful completion of any course, you will receive a verifiable certificate from Scalezix.Academy to showcase your new skills on your resume and professional networks.',
  },
  {
    question: 'How are the courses delivered?',
    answer: 'The courses are delivered through a mix of high-quality video lectures, interactive coding notebooks, practical projects, and live Q&A sessions with instructors.',
  },
  {
    question: 'What kind of support can I expect?',
    answer: 'You will have access to our student community forum, regular office hours with teaching assistants, and direct feedback on your projects from our expert instructors.',
  },
  {
    question: 'Can I get a refund if I\'m not satisfied?',
    answer: 'We offer a 14-day money-back guarantee. If you are not satisfied with the course for any reason within the first 14 days, you can request a full refund.',
  },
];

export const galleryItems: GalleryItem[] = [
  { id: 1, title: 'Sentiment Analysis Bot', description: 'A project that analyzes customer reviews in real-time.', image: 'https://placehold.co/600x400', hint: 'abstract data' },
  { id: 2, title: 'Image Recognition App', description: 'Identifies objects in uploaded images with high accuracy.', image: 'https://placehold.co/600x400', hint: 'technology circuit' },
  { id: 3, title: 'Stock Price Predictor', description: 'Uses historical data to forecast market trends.', image: 'https://placehold.co/600x400', hint: 'finance chart' },
  { id: 4, title: 'Medical Diagnosis Assistant', description: 'A deep learning model that helps identify diseases from scans.', image: 'https://placehold.co/600x400', hint: 'medical technology' },
  { id: 5, title: 'Creative Writing AI', description: 'Generates creative text formats, from poems to scripts.', image: 'https://placehold.co/600x400', hint: 'ai writing' },
  { id: 6, title: 'Smart Home Automation', description: 'An AI to optimize energy consumption in a household.', image: 'https://placehold.co/600x400', hint: 'smart home' },
];

export const testimonials: Testimonial[] = [
  {
    name: 'Alex Johnson',
    title: 'Software Engineer at TechCorp',
    quote: 'The Machine Learning Mastery course was a game-changer for my career. The projects were challenging and highly relevant to what employers are looking for. I landed my dream job shortly after graduating.',
    image: 'https://placehold.co/100x100',
  },
  {
    name: 'Priya Patel',
    title: 'Data Analyst at Finance Inc.',
    quote: 'As someone from a non-CS background, I found the AI Fundamentals course incredibly accessible and well-structured. It gave me the confidence to start applying AI concepts in my work.',
    image: 'https://placehold.co/100x100',
  },
  {
    name: 'Carlos Rodriguez',
    title: 'Freelance AI Developer',
    quote: 'The depth of the Deep Learning course is unmatched. The instructors are true experts who can break down highly complex topics into understandable chunks. Highly recommended for anyone serious about AI.',
    image: 'https://placehold.co/100x100',
  },
  {
    name: 'Samantha Lee',
    title: 'Product Manager',
    quote: 'The Data Science for Business course helped me bridge the gap between technical teams and business strategy. I can now communicate much more effectively with our data scientists.',
    image: 'https://placehold.co/100x100',
  },
];
