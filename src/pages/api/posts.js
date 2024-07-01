import { getCollection } from "astro:content";

export async function get({ request }) {
  const url = new URL(request.url);
  const page = parseInt(url.searchParams.get("page") || "1");
  const pageSize = 5; // Adjust this as needed

  const allPosts = await getCollection("blog");
  const paginatedPosts = allPosts.slice((page - 1) * pageSize, page * pageSize);

  return new Response(JSON.stringify(paginatedPosts), {
    headers: { "Content-Type": "application/json" },
  });
}
