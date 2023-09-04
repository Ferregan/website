import { defineCollection, z } from 'astro:content';

const portfolio = defineCollection({
    type: "content",
    schema: ({ image }) => z.object({
        title: z.string(),
        client: z.string(),
        order: z.number(),
        date: z.string(),
        services: z.array(z.string()),
        banner: image(),
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

