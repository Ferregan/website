import { defineCollection, z } from 'astro:content';

const portfolio = defineCollection({
    type: "content",
    schema: z.object({
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
        email: z.string(),
        social: z.string(),
        telephone: z.string(),
    })
});

const landingPage = defineCollection({
    type: "data",
    schema: ({ image }) => z.object({
        interval: z.number(),
        images: z.array(image()),
    }),
});

export const collections = {
    portfolio,
    about,
    contact,
    landingPage,
};

