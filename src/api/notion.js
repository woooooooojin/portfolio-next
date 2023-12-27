import {  NotionAPI } from "notion-client"

const notion = new NotionAPI({ auth: process.env.NOTION_TOKEN })
// notion.auth(process.env.NOTION_TOKEN)

export const getPosts = async ()=>{
    const postDb = await notion.query({
        id : process.env.NOTION_DATABASE
    })
    const {results} = postDb
    return results 
}


export async function getServerSideProps(){
    const posts = await getPosts()
    return{
      props: {
        posts,
      }
    }
  }