import { defineCollection , z} from "astro:content";

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    desc: z.string(),
    pubDate: z.string(),
    author: z.string(),
    image: z.string(),
    tags: z.array(z.string()),
    time: z.string(),
  })
})

export const collections = {
  blog: blogCollection,
}