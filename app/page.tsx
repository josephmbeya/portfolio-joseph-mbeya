import { BlogPosts } from 'app/components/posts'
import Image from 'next/image'

export default function Page() {
  return (
    <section>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8">
        <div className="flex-shrink-0">
          <Image
            src="/profile.JPG"
            alt="Joseph Mbeya - Full Stack Developer"
            width={120}
            height={120}
            className="rounded-full border-2 border-gray-200 dark:border-gray-700"
            priority
          />
        </div>
        <div>
          <h1 className="text-2xl font-semibold tracking-tighter">
            Joseph Mbeya
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Full Stack Developer
          </p>
        </div>
      </div>
      <p className="mb-4">
        {`Welcome to my portfolio! I'm Joseph Mbeya, a passionate developer who loves
        building innovative solutions with modern web technologies. I specialize in
        full-stack development and enjoy exploring new technologies and sharing
        my learnings through writing.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
