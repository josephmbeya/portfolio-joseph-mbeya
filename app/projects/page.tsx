import Link from 'next/link'

interface Project {
  title: string
  description: string
  tech: string[]
  github?: string
  demo?: string
  status: 'completed' | 'in-progress' | 'planned'
}

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with Next.js and Tailwind CSS. Features a blog, dark mode, and optimized performance.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "MDX"],
    github: "https://github.com/josephmbeya/portfolio",
    demo: "https://josephmbeya.github.io",
    status: "completed"
  },
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with user authentication, payment processing, and admin dashboard.",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    github: "https://ecommerce-app-rho-azure.vercel.app/",
    status: "in-progress"
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team collaboration features.",
    tech: ["Next.js", "Socket.io", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/josephmbeya/taskmanager",
    demo: "https://tasks.josephmbeya.dev",
    status: "completed"
  },
  {
    title: "Weather Dashboard",
    description: "A responsive weather application with location-based forecasts and interactive charts.",
    tech: ["React", "Chart.js", "OpenWeather API", "CSS Modules"],
    github: "https://github.com/josephmbeya/weather-app",
    demo: "https://weather.josephmbeya.dev",
    status: "completed"
  },
  {
    title: "AI Content Generator",
    description: "An AI-powered content generation tool using modern language models for various content types.",
    tech: ["Next.js", "OpenAI API", "TypeScript", "Prisma"],
    status: "planned"
  }
]

function ProjectCard({ project }: { project: Project }) {
  const statusColors = {
    completed: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    "in-progress": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
    planned: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
  }

  return (
    <div className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-6 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <span className={`px-2 py-1 text-xs rounded-full ${statusColors[project.status]}`}>
          {project.status.replace('-', ' ')}
        </span>
      </div>
      
      <p className="text-neutral-600 dark:text-neutral-400 mb-4">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech) => (
          <span 
            key={tech}
            className="px-2 py-1 text-xs bg-neutral-100 dark:bg-neutral-800 rounded"
          >
            {tech}
          </span>
        ))}
      </div>
      
      <div className="flex gap-4">
        {project.github && (
          <Link 
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
          >
            GitHub →
          </Link>
        )}
        {project.demo && (
          <Link 
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
          >
            Live Demo →
          </Link>
        )}
      </div>
    </div>
  )
}

export default function ProjectsPage() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Projects
      </h1>
      
      <p className="mb-8 text-neutral-600 dark:text-neutral-400">
        Here are some of the projects I've been working on. Each project represents 
        a learning journey and showcases different aspects of modern web development.
      </p>
      
      <div className="grid gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
      
      <div className="mt-12 p-6 bg-neutral-50 dark:bg-neutral-900 rounded-lg">
        <h2 className="text-lg font-semibold mb-2">Want to Collaborate?</h2>
        <p className="text-neutral-600 dark:text-neutral-400 mb-4">
          I'm always interested in working on exciting projects and learning new technologies. 
          If you have an idea or want to collaborate, feel free to reach out!
        </p>
        <Link 
          href="/contact"
          className="inline-block px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  )
}
