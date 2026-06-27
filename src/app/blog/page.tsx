import Link from "next/link";

interface BlogResponse {
  title: string;
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
    throw new Error("Failed to fetch data.");
  }

  return res.json();
}

export default async function Blog() {
  const [post1, post2] = await Promise.all([
    getBlogPost("daxhomv7u"),
    getBlogPost("5-1tseera")
  ]);

  return (
    <main className="main-content">
      <h1>ブログ</h1>
      <p>
        自身の経験を元に書いたブログをここにまとめています。データはmicroCMSから引っ張ってきています。定期的に更新していく予定ですので、ぜひチェックしてください。
      </p>

      <table style={{ width: "100%", maxWidth: "800px" }}>
        <thead>
          <tr>
            <th style={{ textAlign: "left" }}>
              <p style={{ margin: 0 }}>タイトル</p>
            </th>
            <th style={{ width: "150px", textAlign: "left" }}>
              <p style={{ margin: 0 }}>執筆日</p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <h3 style={{ margin: 0, textAlign: "left", fontSize: "1.1rem" }}>
                <Link href="/blog/daxhomv7u" style={{ color: "#0066cc", textDecoration: "underline" }}>
                  {post1.title}
                </Link>
              </h3>
            </td>
            <td>
              <p style={{ margin: 0 }}>2026/2/28</p>
            </td>
          </tr>
          <tr>
            <td>
              <h3 style={{ margin: 0, textAlign: "left", fontSize: "1.1rem" }}>
                <Link href="/blog/5-1tseera" style={{ color: "#0066cc", textDecoration: "underline" }}>
                  {post2.title}
                </Link>
              </h3>
            </td>
            <td>
              <p style={{ margin: 0 }}>2026/4/26</p>
            </td>
          </tr>
        </tbody>
      </table>
      <Link href="/" className="return-home-btn">
        ホームに戻る
      </Link>
    </main>
  );
}