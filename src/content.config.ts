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

const page = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './content/pages',
  }),
  schema: z.object({
    language: z.enum(['en', 'es']),
    page: z.string(),

    // Shared / Home
    heroTitle: z.string().optional(),
    heroSubtitle: z.string().optional(),
    heroCta: z.string().optional(),

    whoWeAreTag: z.string().optional(),
    whoWeAreHeading: z.string().optional(),
    whoWeAreDescription1: z.string().optional(),
    whoWeAreDescription2: z.string().optional(),
    whoWeAreCta: z.string().optional(),
    whoWeAreImageAlt1: z.string().optional(),
    whoWeAreImageAlt2: z.string().optional(),

    educationTitle: z.string().optional(),
    educationDescription: z.string().optional(),

    communicationTitle: z.string().optional(),
    communicationDescription: z.string().optional(),

    advocacyTitle: z.string().optional(),
    advocacyDescription: z.string().optional(),

    collaborationTitle: z.string().optional(),
    collaborationDescription: z.string().optional(),

    oversightTitle: z.string().optional(),
    oversightDescription: z.string().optional(),

    programsTag: z.string().optional(),
    programsHeading: z.string().optional(),

    cafaTitle: z.string().optional(),
    cafaDescription: z.string().optional(),

    publicDefenderTitle: z.string().optional(),
    publicDefenderDescription: z.string().optional(),

    policeOversightTitle: z.string().optional(),
    policeOversightDescription: z.string().optional(),

    earlyCaseReviewTitle: z.string().optional(),
    earlyCaseReviewDescription: z.string().optional(),

    communityPowerTitle: z.string().optional(),
    communityPowerDescription: z.string().optional(),

    rightsEducationTitle: z.string().optional(),
    rightsEducationDescription: z.string().optional(),
    rightsEducationImageAlt: z.string().optional(),

    newsHeading: z.string().optional(),
    newsDescription1: z.string().optional(),
    newsDescription2: z.string().optional(),
    newsCta: z.string().optional(),
    newsImageAlt: z.string().optional(),

    // About
    heroImageLarge: z.string().optional(),
    heroImageSmall: z.string().optional(),

    storyHeading: z.string().optional(),
    storyDescription: z.string().optional(),

    visionHeading: z.string().optional(),
    visionDescription: z.string().optional(),

    missionHeading: z.string().optional(),
    missionDescription: z.string().optional(),

    goalsHeading: z.string().optional(),
    goalsDescription: z.string().optional(),

    accountabilityTitle: z.string().optional(),
    accountabilityDescription: z.string().optional(),

    // Our Work
    pageTitle: z.string().optional(),
    title: z.string().optional(),
    description: z.string().optional(),

    counselTitle: z.string().optional(),
    counselDescription: z.string().optional(),
    counselImageAlt: z.string().optional(),

    officeTitle: z.string().optional(),
    officeDescription: z.string().optional(),
    officeImageAlt: z.string().optional(),

    dismissalTitle: z.string().optional(),
    dismissalDescription: z.string().optional(),
    dismissalImageAlt: z.string().optional(),

    communityTitle: z.string().optional(),
    communityDescription: z.string().optional(),
    communityImageAlt: z.string().optional(),

    publicDefendersTitle: z.string().optional(),
    publicDefendersDescription: z.string().optional(),
    publicDefendersImageAlt: z.string().optional(),
  }),
});

export const collections = {
  post,
  page,
};