import { useFetch } from "./hooks/useFetch.ts";
import type { Post } from "./interfaces.ts";

export const Posts = () => {
  const {data,isLoading,error} = useFetch<Post[]>("https://jsonplaceholder.typicode.com/posts")

  return <div>
    {isLoading && <div>Loading...</div>}
    {error && <div style={{color:'red'}}>{error}</div>}
    {data?.map((post) => (
      <div key={post.id}>
        <div className='font-bold text-fuchsia-500'> {post.title}</div>
        <p>{post.body}</p>
      </div>))}
  </div>
}