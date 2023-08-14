import { defineCollection, z } from 'astro:content';

const portfolioCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        order: z.number(),
    }),
});

export const collections = {
    'portfolio': portfolioCollection,
};

