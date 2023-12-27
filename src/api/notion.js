
import axios from 'axios';

export async function getServerSideProps() {
  const notionApiKey = process.env.NOTION_TOKEN;
  const notionDatabaseId =process.env.NOTION_DATABASE; // Notion 데이터베이스 ID

  try {
    const response = await axios.post(
      `https://api.notion.com/v1/databases/${notionDatabaseId}/query`,
      {},
      {
        headers: {
          Authorization: `Bearer ${notionApiKey}`,
          'Notion-Version': '2023-01-01', // 적절한 버전으로 업데이트
        },
      }
    );

    const data = response.data;
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.error('Error fetching data from Notion:', error.message);
    return {
      props: {
        data: null,
      },
    };
  }
}

function HomePage({ data }) {
  // data를 사용하여 페이지에 내용을 표시
  return (
    <div>
      {
        data.map((item)=>(
          <div key={item.id}>
            {item.title}
          </div>
        ))
      }
    </div>
  );
}
export default HomePage;