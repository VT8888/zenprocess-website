import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    author: z.string().default('Vinh Truong'),
    authorTitle: z.string().default('Co-Founder & AI Architect'),
    pillar: z.enum(['data_problem', 'operational_intelligence', 'industry_insights', 'proof_and_results']),
    seoKeywords: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
