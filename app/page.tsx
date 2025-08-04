import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Joseph Mbeya
      </h1>
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
