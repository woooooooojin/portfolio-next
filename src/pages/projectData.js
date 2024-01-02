

export default function ProjectData({ projects }) {
  return (
    <div>
      <h1>{projects}</h1>
    </div>
  );
}



export async function getStaticProps(){

    const options = {
      method:'GET',
      headers : {
        'Accept': 'application/json',
        'Notion-Version' : '2022-02-22',
        'Content-Type' : 'application/json',
        Authorization : `Bearer ${process.env.NOTION_TOKEN}`
      },
      body : JSON.stringify({page_size : 100})
    }
  
    const res = await fetch(`https://api.notion.com/v1/databases/${process.env.NOTION_DATABASE}/query`)
   
    const projects = await res.json()

    const projectIds = projects.results.map((aProject)=>(
        aProject.id
    ))
    console.log(projectIds)
    
  
    return{
      props : projects,
    }
  }