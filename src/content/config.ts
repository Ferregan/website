import { defineCollection, z } from 'astro:content';

const portfolioCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        order: z.number(),
        date: z.string(),
        services: z.array(z.string()),
    }),
});

export const collections = {
    'portfolio': portfolioCollection,
};

