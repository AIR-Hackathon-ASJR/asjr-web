import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const post = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './content/posts',
  }),
  schema: z.object({
    title: z.string(),
    posted: z.coerce.date(),
    summary: z.string().optional(),
    image: z.string().optional(),
  }),
});

export const collections = { post };