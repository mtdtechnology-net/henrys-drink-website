import { getStrapiClient } from "@/lib/strapi";
import type { Article } from "@/types/strapi";

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
    <div>
      <h1>Articole</h1>
      {articles.map((article) => (
        <div key={article.documentId}>
          <h2>{article.title}</h2>
        </div>
      ))}
    </div>
  );
}
