import { useRouter } from 'next/router'
import posts from '../../posts.json'

const Route = () => {
  const router = useRouter()

  const post = posts[router.query.id]
  if (!post) return <p />

  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </>
  )
}

export default Route
