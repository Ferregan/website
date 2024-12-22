import { defineCollection, z } from 'astro:content';

const portfolio = defineCollection({
    type: "content",
    schema: () => z.object({
        title: z.string(),
        order: z.number(),
    }),
});

const about = defineCollection({
    type: "content"
});

const contact = defineCollection({
    type: "data",
    schema: z.object({
        instagram: z.string(),
        facebook: z.string(),
        linkedin: z.string(),
        email: z.string(),
        telephone: z.string(),
    })
});

export const collections = {
    portfolio,
    about,
    contact,
};

