
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

export type Workshop = {
  slug: string;
  title: string;
  type: 'Free' | 'Paid';
  description: string;
  date: string;
  duration: string;
  image: string;
  instructor: {
    name: string;
    title: string;
    image: string;
  };
  topics: {
    title: string;
    content: string;
  }[];
  takeaways: string[];
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
      { title: 'Introduction to AI', content: 'Explore the history of AI, from early concepts to modern breakthroughs. We will define key terms, discuss the Turing Test, and look at real-world examples of AI that you use every day.' },
      { title: 'Types of AI', content: 'Learn to distinguish between Artificial Narrow Intelligence (ANI), Artificial General Intelligence (AGI), and Artificial Superintelligence (ASI). We will also cover the difference between symbolic AI and machine learning.' },
      { title: 'Foundational Search Algorithms', content: 'Dive into classic AI problem-solving techniques like Breadth-First Search, Depth-First Search, and the A* algorithm. Understand how these are applied in games, logistics, and more.' },
      { title: 'Introduction to Machine Learning', content: 'Get a clear overview of the core concepts of supervised, unsupervised, and reinforcement learning. You will build your first simple linear regression model to predict a value based on data.' },
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
      { title: 'Regression and Classification', content: 'Go beyond the basics to build and evaluate robust linear and logistic regression models. We will cover feature engineering, loss functions, and the mechanics of gradient descent.' },
      { title: 'Decision Trees and Ensemble Methods', content: 'Master powerful techniques like Random Forests and Gradient Boosting Machines (XGBoost, LightGBM). Understand how ensembling multiple models leads to superior performance.' },
      { title: 'Unsupervised Learning in Depth', content: 'Discover hidden patterns in your data. Implement clustering algorithms like K-Means and Hierarchical Clustering, and reduce dimensionality with Principal Component Analysis (PCA).' },
      { title: 'Model Evaluation and Tuning', content: 'Learn professional-grade techniques for ensuring your models are robust and performant. We will cover k-fold cross-validation, and hyperparameter tuning using grid search, random search, and Bayesian optimization.' },
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
      { title: 'Neural Networks and Backpropagation', content: 'Build a solid foundation by understanding the mathematical underpinnings of deep learning. We will cover the architecture of a neuron, various activation functions, and how networks learn via backpropagation and gradient descent.' },
      { title: 'Convolutional Neural Networks (CNNs)', content: 'Become proficient in the go-to architecture for computer vision. You will learn about convolutions, pooling layers, and build powerful CNNs for image classification and object detection from the ground up.' },
      { title: 'Recurrent Neural Networks (RNNs)', content: 'Master the art of processing sequential data. This module covers the challenges of long-term dependencies and how architectures like LSTMs and GRUs solve them for tasks in NLP and time-series analysis.' },
      { title: 'Transformers and Attention', content: 'Dive into the state-of-the-art architecture that powers modern LLMs like GPT. You will deeply understand the self-attention mechanism and build a functional transformer block from scratch.' },
    ],
    objectives: [
      'Design and train neural networks for various tasks.',
      'Build models for image classification and text generation.',
      'Understand the theory behind modern deep learning architectures.',
      'Deploy a deep learning model to a production-like environment.',
    ],
  },
];

export const workshops: Workshop[] = [
  {
    slug: 'intro-to-generative-ai',
    title: 'Introduction to Generative AI',
    type: 'Free',
    description: 'A live, hands-on workshop covering the fundamentals of generative AI, from large language models to image generation.',
    date: 'October 26, 2024',
    duration: '3 Hours',
    image: 'https://placehold.co/600x400',
    instructor: {
      name: 'Dr. Evelyn Reed',
      title: 'Lead AI Scientist',
      image: 'https://placehold.co/100x100',
    },
    topics: [
      { title: 'What is Generative AI?', content: 'A clear, concise overview of what makes generative models different from other types of AI. We will explore key concepts like prompts, tokens, and context windows.' },
      { title: 'How Large Language Models (LLMs) Work', content: 'A simplified explanation of the transformer architecture and the self-attention mechanism that powers models like GPT.' },
      { title: 'Hands-On: Prompt Engineering', content: 'Learn the art and science of writing effective prompts to get the best results from LLMs. You will participate in live exercises to hone your skills.' },
      { title: 'Introduction to AI Image Generation', content: 'Explore how diffusion models create stunning images from text prompts and the creative possibilities they unlock.' },
    ],
    takeaways: [
      'A solid understanding of what Generative AI is and how it works.',
      'Practical skills in prompt engineering for text and image models.',
      'Code and resources to continue your learning journey.',
      'A certificate of completion for attending the live session.',
    ]
  },
  {
    slug: 'advanced-gans',
    title: 'Advanced GANs for Image Synthesis',
    type: 'Paid',
    description: 'A deep-dive workshop for developers on Generative Adversarial Networks (GANs), focusing on cutting-edge architectures for high-fidelity image creation.',
    date: 'November 9, 2024',
    duration: '6 Hours (2 sessions)',
    image: 'https://placehold.co/600x400',
    instructor: {
      name: 'Dr. Anya Sharma',
      title: 'Deep Learning Specialist',
      image: 'https://placehold.co/100x100',
    },
    topics: [
      { title: 'Revisiting the GAN Framework', content: 'A quick refresher on the generator vs. discriminator dynamic, and common challenges like mode collapse and training instability.' },
      { title: 'Architectures for Quality: StyleGAN', content: 'A detailed walkthrough of the StyleGAN architecture, understanding how it achieves high-resolution, photorealistic results through style-based generation.' },
      { title: 'Conditional GANs (cGANs)', content: 'Learn to control the output of your GAN by providing conditional inputs, such as class labels or text descriptions.' },
      { title: 'Practical Implementation with PyTorch', content: 'A hands-on coding session where you will implement and train a custom GAN on a real-world dataset, with expert guidance.' },
    ],
    takeaways: [
      'The ability to implement and train advanced GAN architectures.',
      'An understanding of the latest techniques for stable GAN training.',
      'A portfolio-ready project demonstrating your skills in AI image synthesis.',
      'Access to a repository of code templates and pre-trained models.',
    ]
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
    title: 'BSc CompSci Student',
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
    title: 'AI Product Manager',
    quote: 'The free workshop on Generative AI was the perfect introduction. It was practical, engaging, and gave me the clarity I needed to dive deeper into the field. I immediately signed up for a full course!',
    image: 'https://placehold.co/100x100',
  },
];
