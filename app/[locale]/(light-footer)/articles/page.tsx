import { getStrapiClient } from "@/lib/strapi";
import type { Article } from "@/types/strapi";
import Link from "next/link";

export default async function ArticlesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const client = getStrapiClient();
  const { data } = await client.collection("articles").find({ locale });
  const articles = data as unknown as Article[];

  return (
    <div style={{ marginTop: 200 }}>
      <h1>Articole</h1>
      {articles.map((article) => (
        <div key={article.documentId}>
          <h2>{article.title}</h2>
        </div>
      ))}

      <button>
        <Link href={`/heritage`}>Heritage</Link>
      </button>
    </div>
  );
}
