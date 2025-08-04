import Link from 'next/link'

function ContactCard({ 
  title, 
  description, 
  href, 
  linkText 
}: { 
  title: string
  description: string
  href: string
  linkText: string
}) {
  return (
    <div className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-6 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-neutral-600 dark:text-neutral-400 mb-4">{description}</p>
      <Link 
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className="text-blue-600 dark:text-blue-400 hover:underline"
      >
        {linkText} →
      </Link>
    </div>
  )
}

export default function ContactPage() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Get in Touch
      </h1>
      
      <p className="mb-8 text-neutral-600 dark:text-neutral-400">
        I'm always interested in connecting with fellow developers, potential collaborators, 
        or anyone who wants to discuss technology and ideas. Feel free to reach out through 
        any of the channels below.
      </p>
      
      <div className="grid gap-6 md:grid-cols-2">
        <ContactCard
          title="Email"
          description="The best way to reach me for professional inquiries, collaboration opportunities, or just to say hello.+265 884 59 40 30"
          href="mailto:chigombeya@gmail.com"
          linkText="chigombeya@gmail.com"
        />
        
        <ContactCard
          title="LinkedIn"
          description="Connect with me on LinkedIn for professional networking and to see my career journey."
          href="https://linkedin.com/in/joseph-mbeya-595b08121"
          linkText="linkedin.com/in/joseph-mbeya-595b08121"
        />
        
        <ContactCard
          title="GitHub"
          description="Check out my code, contributions, and open-source projects on GitHub."
          href="https://github.com/josephmbeya"
          linkText="github.com/josephmbeya"
        />
        
        <ContactCard
          title="Whatsapp"
          description="Feel free to reach out via WhatsApp for quick questions or discussions."
          href="https://wa.me/+265884594030"
          linkText="+265 884 59 40 30"
        />
      </div>
      
      <div className="mt-12 p-6 bg-neutral-50 dark:bg-neutral-900 rounded-lg">
        <h2 className="text-lg font-semibold mb-4">Let's Collaborate</h2>
        <p className="text-neutral-600 dark:text-neutral-400 mb-4">
          I'm open to:
        </p>
        <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-400 space-y-2">
          <li>Freelance web development projects</li>
          <li>Open-source contributions</li>
          <li>Technical writing and content creation</li>
          <li>Speaking at events or podcasts</li>
          <li>Mentoring junior developers</li>
          <li>Consulting on web development projects</li>
        </ul>
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-neutral-500 dark:text-neutral-500 text-sm">
          Response time: Usually within 24-48 hours
        </p>
      </div>
    </section>
  )
}
