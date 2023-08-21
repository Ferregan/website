import { defineCollection, z } from 'astro:content';

const portfolioCollection = defineCollection({
    type: "content",
    schema: ({ image }) => z.object({
        title: z.string(),
        order: z.number(),
        date: z.string(),
        services: z.array(z.string()),
        banner: image(),
    }),
});

export const collections = {
    'portfolio': portfolioCollection,
};

