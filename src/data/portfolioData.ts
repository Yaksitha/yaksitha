export interface SkillItem {
  name: string;
  level: 'Beginner' | 'Learning' | 'Familiar';
  iconName: string;
  notes?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  pythonSnippet: string;
  interactiveType: 'voter' | 'atm' | 'grade';
}

export interface JourneyStage {
  stage: string;
  title: string;
  description: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: 'Yaksitha Parimi',
    headline: "Hi, I'm Yaksitha Parimi",
    subheading: 'B.Tech Student | Aspiring AI Engineer | Python & Web Development Enthusiast',
    badge: 'Open to Learning & Opportunities',
    academicStatus: 'B.Tech — 1st Semester',
    email: 'parimiramadevi46950@gmail.com',
    heroIntro:
      'I’m a first-semester B.Tech student exploring Python, web development, and Generative AI. I enjoy building practical projects, participating in hackathons and ideathons, and continuously learning how technology can solve real-world problems.',
    socials: {
      linkedin: 'https://www.linkedin.com/in/parimi-yaksitha-335b06431',
      github: 'https://github.com/Yaksitha/Python.main',
    },
  },

  about: {
    heading: 'About Me',
    paragraphs: [
      'I’m currently pursuing my B.Tech and am in my first semester, building my foundation in programming, web development, and artificial intelligence. My current focus is learning Python, exploring Generative AI, and understanding how modern web technologies can be used to build useful applications.',
      'I enjoy participating in hackathons and ideathons because they give me opportunities to turn ideas into practical solutions, collaborate with others, and learn through experimentation.',
    ],
    highlights: [
      {
        number: '01',
        title: 'Learn',
        description: 'Continuously building fundamentals in programming and AI.',
      },
      {
        number: '02',
        title: 'Build',
        description: 'Creating small practical projects to strengthen problem-solving skills.',
      },
      {
        number: '03',
        title: 'Explore',
        description: 'Experimenting with Generative AI, web technologies, hackathons, and ideathons.',
      },
    ],
  },

  skillCategories: [
    {
      title: 'Programming',
      description: 'Foundational languages for problem solving and algorithmic logic.',
      skills: [
        { name: 'Python', level: 'Learning', iconName: 'FileCode2', notes: 'Core syntax, loops, functions, logic' },
      ],
    },
    {
      title: 'Web Development',
      description: 'Building structured, accessible, and responsive user interfaces.',
      skills: [
        { name: 'HTML', level: 'Beginner', iconName: 'Code', notes: 'Semantic markup & layout structure' },
        { name: 'CSS', level: 'Beginner', iconName: 'Palette', notes: 'Styling, flexbox & responsiveness' },
        { name: 'JavaScript', level: 'Beginner', iconName: 'Terminal', notes: 'Basic interactivity & DOM manipulation' },
        { name: 'Basic Web Development', level: 'Familiar', iconName: 'Layout', notes: 'Modern page architecture' },
      ],
    },
    {
      title: 'AI & Emerging Technologies',
      description: 'Early exploration into intelligent systems and foundational models.',
      skills: [
        { name: 'Generative AI', level: 'Beginner', iconName: 'Sparkles', notes: 'Understanding GenAI foundations' },
        { name: 'Artificial Intelligence', level: 'Beginner', iconName: 'Brain', notes: 'Foundational concepts & use cases' },
        { name: 'Prompt Engineering', level: 'Beginner', iconName: 'MessageSquareCode', notes: 'Context structuring & testing' },
      ],
    },
    {
      title: 'Tools & Platforms',
      description: 'Everyday developer environment and source control tooling.',
      skills: [
        { name: 'GitHub', level: 'Familiar', iconName: 'Github', notes: 'Repository management & hosting' },
        { name: 'Git', level: 'Beginner', iconName: 'GitBranch', notes: 'Version control basics & commits' },
        { name: 'VS Code', level: 'Familiar', iconName: 'Laptop', notes: 'Primary coding environment' },
      ],
    },
  ] as SkillCategory[],

  projects: [
    {
      id: 'voter-eligibility',
      title: 'Voter Eligibility Calculator',
      category: 'Python | Beginner Project',
      description:
        'A Python-based application that determines whether a person meets the required voting age based on their input.',
      technologies: ['Python', 'Conditional Logic', 'User Input'],
      githubUrl: 'https://github.com/Yaksitha/Python.main',
      interactiveType: 'voter',
      pythonSnippet: `# Voter Eligibility Calculator
def check_voting_eligibility(age):
    VOTING_AGE = 18
    if age < 0:
        return "Invalid age entered."
    elif age >= VOTING_AGE:
        return f"Eligible to vote! You are {age} years old."
    else:
        years_left = VOTING_AGE - age
        return f"Not eligible. You need {years_left} more year(s) to vote."

# Example user interaction
user_age = int(input("Enter your age: "))
result = check_voting_eligibility(user_age)
print(result)`,
    },
    {
      id: 'atm-management',
      title: 'ATM Management System',
      category: 'Python | Management System',
      description:
        'A beginner-friendly Python project that simulates basic ATM operations and helps demonstrate programming fundamentals, conditional logic, functions, and user interaction.',
      technologies: ['Python', 'Functions', 'Conditional Logic', 'User Input'],
      githubUrl: 'https://github.com/Yaksitha/Python.main',
      interactiveType: 'atm',
      pythonSnippet: `# ATM Management System
class SimpleATM:
    def __init__(self, initial_balance=5000):
        self.balance = initial_balance

    def check_balance(self):
        return f"Current Balance: ₹{self.balance:,.2f}"

    def deposit(self, amount):
        if amount > 0:
            self.balance += amount
            return f"Successfully deposited ₹{amount:,.2f}. New Balance: ₹{self.balance:,.2f}"
        return "Invalid deposit amount."

    def withdraw(self, amount):
        if amount <= 0:
            return "Invalid withdrawal amount."
        if amount > self.balance:
            return "Insufficient funds for this transaction."
        self.balance -= amount
        return f"Withdrew ₹{amount:,.2f}. Remaining Balance: ₹{self.balance:,.2f}"`,
    },
    {
      id: 'student-grade',
      title: 'Student Grade Calculator',
      category: 'Python | Academic Utility',
      description:
        'A Python application that calculates student grades based on marks entered by the user and demonstrates basic programming logic and data handling.',
      technologies: ['Python', 'Conditional Statements', 'Calculations', 'User Input'],
      githubUrl: 'https://github.com/Yaksitha/Python.main',
      interactiveType: 'grade',
      pythonSnippet: `# Student Grade Calculator
def calculate_grade(marks):
    if marks < 0 or marks > 100:
        return {"grade": "N/A", "status": "Invalid marks entered (must be 0-100)"}
    elif marks >= 90:
        return {"grade": "A+", "status": "Outstanding Performance"}
    elif marks >= 80:
        return {"grade": "A", "status": "Excellent"}
    elif marks >= 70:
        return {"grade": "B", "status": "Good"}
    elif marks >= 60:
        return {"grade": "C", "status": "Satisfactory"}
    elif marks >= 50:
        return {"grade": "D", "status": "Pass"}
    else:
        return {"grade": "F", "status": "Needs Improvement"}`,
    },
  ] as ProjectItem[],

  hackathons: {
    heading: 'Hackathons & Ideathons',
    statement:
      'I actively participate in hackathons and ideathons to explore real-world problems, develop creative solutions, collaborate with others, and gain practical experience beyond the classroom.',
    cards: [
      {
        title: 'Hackathons',
        description:
          'Exploring problem-solving, rapid prototyping, teamwork, and technology through hackathon experiences.',
        focus: 'Hands-on Prototyping & Collaboration',
      },
      {
        title: 'Ideathons',
        description:
          'Developing and presenting ideas focused on identifying problems and thinking about technology-driven solutions.',
        focus: 'Problem Discovery & Solution Design',
      },
    ],
    // Clean placeholders where user can easily add actual events without fabricating achievements
    eventPlaceholders: [
      {
        title: 'Active Hackathon Participation',
        description: 'Engaging in college and student hackathons to collaborate in teams, refine logic, and build practical prototypes.',
        tag: 'Student Participation',
      },
      {
        title: 'Problem Ideation & Pitching',
        description: 'Participating in campus ideathon sessions focused on real-world community challenges and tech-driven ideas.',
        tag: 'Ideathon Track',
      },
    ],
  },

  learningJourney: [
    {
      stage: 'Stage 01',
      title: 'B.Tech — Semester 1',
      description: 'Building strong fundamentals in programming and computer science.',
    },
    {
      stage: 'Stage 02',
      title: 'Python',
      description: 'Learning programming fundamentals and developing beginner projects.',
    },
    {
      stage: 'Stage 03',
      title: 'Web Development',
      description: 'Exploring HTML, CSS, JavaScript, and the fundamentals of creating websites.',
    },
    {
      stage: 'Stage 04',
      title: 'Generative AI',
      description: 'Beginning to explore AI concepts, GenAI tools, prompt engineering, and AI-powered applications.',
    },
    {
      stage: 'Stage 05',
      title: 'Hackathons & Ideathons',
      description: 'Applying what I learn to practical problems and collaborative challenges.',
    },
  ] as JourneyStage[],

  education: {
    degree: 'B.Tech',
    degreeFull: 'Bachelor of Technology',
    currentStage: 'Currently in 1st Semester',
    description:
      'Currently building foundational knowledge in programming, technology, problem solving, and emerging areas of artificial intelligence.',
    // Placeholders clearly maintained for user customization without making up false institutions
    institutionPlaceholder: '[University / College Institution]',
    fieldOfStudy: 'Computer Science & Technology Track',
    academicPeriod: '2026 – Present (1st Semester)',
  },

  contact: {
    heading: "Let's Connect",
    intro:
      'Interested in connecting, collaborating, discussing ideas, or sharing learning opportunities? Feel free to reach out.',
    linkedin: 'https://www.linkedin.com/in/parimi-yaksitha-335b06431',
    github: 'https://github.com/Yaksitha/Python.main',
  },

  footer: {
    name: 'Yaksitha Parimi',
    role: 'Aspiring AI Engineer | B.Tech Student',
    copyright: '© 2026 Yaksitha Parimi. Built with curiosity and a passion for learning.',
  },
};
