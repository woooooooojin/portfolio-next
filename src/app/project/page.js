import { getPosts } from "@/api/notion"

export default function Project({posts}) {
  return (
    <>  
      <div>
        {
          posts.map((post) => (
            <div key={post.id}>
              <h2>{post.title}</h2>
            </div>

          ))
        }
      </div>
    </>
  )
}





// Project.getInitialProps = async ()=>{
//   const posts = await getPosts()
//   return {posts}
// }

