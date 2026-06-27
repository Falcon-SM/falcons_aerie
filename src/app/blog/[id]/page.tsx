import Link from "next/link";
import PrismInitializer from "./prism";

interface BlogResponse {
  title: string;
  content: string;
}

const microCMS_API = process.env.microCMS_API;

async function getBlogPost(id: string): Promise<BlogResponse> {
  
  const res = await fetch(`https://uu1rg4yeag.microcms.io/api/v1/blog/${id}`, {
    headers: {
      "X-MICROCMS-API-KEY": microCMS_API ?? "",
    },
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to attach data.");
  }

  return res.json();
}

export default async function BlogPostPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const data = await getBlogPost(id);

  return (
    <main>
      <h1>{data.title}</h1>
      <hr />
      <div 
        dangerouslySetInnerHTML={{ __html: data.content }} 
      />
      
      <PrismInitializer />
      <Link href="/blog" className='return-home-btn'>
        ブログに戻る
      </Link>
    </main>
  );
}