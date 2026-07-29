import { defineConfig } from "tinacms";

// Must match `base` in astro.config.mjs
const basePath = "";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  ui: {
    previewUrl: () => ({
      url:
        process.env.TINA_PUBLIC_SITE_URL ||
        `http://localhost:4321${basePath}/`,
    }),
  },

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
    basePath: basePath,
  },
  // Uncomment to allow cross-origin requests from non-localhost origins
  // during local development (e.g. GitHub Codespaces, Gitpod, Docker).
  // Use 'private' to allow all private-network IPs (WSL2, Docker, etc.)
  // server: {
  //   allowedOrigins: ['https://your-codespace.github.dev'],
  // },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/r/content-modelling-collections/
  schema: {
    collections: [
//Home
{
  name: "homePage",
  label: "Home",
  path: "content/pages/en",
  format: "md",
  match: {
    include: "home",
  },
  ui: {
    allowedActions: {
      create: false,
      delete: false,
      createNestedFolder: false,
    },
  },
  fields: [
    {
      type: "string",
      name: "language",
      label: "Language",
    },
    {
      type: "string",
      name: "page",
      label: "Page",
    },

    // Hero
    {
      type: "string",
      name: "heroTitle",
      label: "Hero Title",
      isTitle: true,
      required: true,
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "heroSubtitle",
      label: "Hero Subtitle",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "heroCta",
      label: "Hero CTA",
    },

    // Who We Are
    {
      type: "string",
      name: "whoWeAreTag",
      label: "Who We Are Tag",
    },
    {
      type: "string",
      name: "whoWeAreHeading",
      label: "Who We Are Heading",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "whoWeAreDescription1",
      label: "Who We Are Description 1",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "whoWeAreDescription2",
      label: "Who We Are Description 2",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "whoWeAreCta",
      label: "Who We Are CTA",
    },
    {
      type: "string",
      name: "whoWeAreImageAlt1",
      label: "Who We Are Image Alt 1",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "whoWeAreImageAlt2",
      label: "Who We Are Image Alt 2",
      ui: {
        component: "textarea",
      },
    },

    // Values
    {
      type: "string",
      name: "educationTitle",
      label: "Education Title",
    },
    {
      type: "string",
      name: "educationDescription",
      label: "Education Description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "communicationTitle",
      label: "Communication Title",
    },
    {
      type: "string",
      name: "communicationDescription",
      label: "Communication Description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "advocacyTitle",
      label: "Advocacy Title",
    },
    {
      type: "string",
      name: "advocacyDescription",
      label: "Advocacy Description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "collaborationTitle",
      label: "Collaboration Title",
    },
    {
      type: "string",
      name: "collaborationDescription",
      label: "Collaboration Description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "oversightTitle",
      label: "Oversight & Evaluate Title",
    },
    {
      type: "string",
      name: "oversightDescription",
      label: "Oversight & Evaluate Description",
      ui: {
        component: "textarea",
      },
    },

    // Programs
    {
      type: "string",
      name: "programsTag",
      label: "Programs Tag",
    },
    {
      type: "string",
      name: "programsHeading",
      label: "Programs Heading",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "cafaTitle",
      label: "CAFA Title",
    },
    {
      type: "string",
      name: "cafaDescription",
      label: "CAFA Description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "publicDefenderTitle",
      label: "Public Defender Title",
    },
    {
      type: "string",
      name: "publicDefenderDescription",
      label: "Public Defender Description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "policeOversightTitle",
      label: "Police Oversight Title",
    },
    {
      type: "string",
      name: "policeOversightDescription",
      label: "Police Oversight Description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "earlyCaseReviewTitle",
      label: "Early Case Review Title",
    },
    {
      type: "string",
      name: "earlyCaseReviewDescription",
      label: "Early Case Review Description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "communityPowerTitle",
      label: "Community Power Title",
    },
    {
      type: "string",
      name: "communityPowerDescription",
      label: "Community Power Description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "rightsEducationTitle",
      label: "Rights Education Title",
    },
    {
      type: "string",
      name: "rightsEducationDescription",
      label: "Rights Education Description",
      ui: {
        component: "textarea",
      },
    },

    // Latest Updates
    {
      type: "string",
      name: "newsHeading",
      label: "Latest Updates Heading",
    },
    {
      type: "string",
      name: "newsDescription1",
      label: "Latest Updates Description 1",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "newsDescription2",
      label: "Latest Updates Description 2",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "newsCta",
      label: "Latest Updates CTA",
    },
    {
      type: "string",
      name: "newsImageAlt",
      label: "Latest Updates Image Alt",
      ui: {
        component: "textarea",
      },
    },
  ],
},
//About
{
  name: "aboutPage",
  label: "About",
  path: "content/pages/en",
  format: "md",
  match: {
    include: "about",
  },
  ui: {
    allowedActions: {
      create: false,
      delete: false,
      createNestedFolder: false,
    },
  },
  fields: [
    {
      type: "string",
      name: "language",
      label: "Language",
    },
    {
      type: "string",
      name: "page",
      label: "Page",
    },
    {
      type: "string",
      name: "heroTitle",
      label: "Hero Title",
    },
    {
      type: "string",
      name: "heroSubtitle",
      label: "Hero Subtitle",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "image",
      name: "heroImageLarge",
      label: "Hero Image — Large",
    },
    {
      type: "image",
      name: "heroImageSmall",
      label: "Hero Image — Small",
    },
    {
      type: "string",
      name: "storyHeading",
      label: "Story Heading",
    },
    {
      type: "string",
      name: "storyDescription",
      label: "Story Description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "visionHeading",
      label: "Vision Heading",
    },
    {
      type: "string",
      name: "visionDescription",
      label: "Vision Description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "missionHeading",
      label: "Mission Heading",
    },
    {
      type: "string",
      name: "missionDescription",
      label: "Mission Description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "goalsHeading",
      label: "Goals Heading",
    },
    {
      type: "string",
      name: "goalsDescription",
      label: "Goals Description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "educationTitle",
      label: "Education Title",
    },
    {
      type: "string",
      name: "educationDescription",
      label: "Education Description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "communicationTitle",
      label: "Communication Title",
    },
    {
      type: "string",
      name: "communicationDescription",
      label: "Communication Description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "advocacyTitle",
      label: "Advocacy Title",
    },
    {
      type: "string",
      name: "advocacyDescription",
      label: "Advocacy Description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "collaborationTitle",
      label: "Collaboration Title",
    },
    {
      type: "string",
      name: "collaborationDescription",
      label: "Collaboration Description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "accountabilityTitle",
      label: "Accountability Title",
    },
    {
      type: "string",
      name: "accountabilityDescription",
      label: "Accountability Description",
      ui: {
        component: "textarea",
      },
    },
  ],
},
/*// Our Work
{
  name: "ourWorkPage",
  label: "Our Work",
  path: "content/pages/en",
  format: "md",
  match: {
    include: "our-work",
  },
  ui: {
    allowedActions: {
      create: false,
      delete: false,
      createNestedFolder: false,
    },
  },
  fields: [
    {
      type: "string",
      name: "language",
      label: "Language",
    },
    {
      type: "string",
      name: "page",
      label: "Page",
    },
    {
      type: "string",
      name: "pageTitle",
      label: "Browser Page Title",
      required: true,
    },
    {
      type: "string",
      name: "title",
      label: "Page Heading",
      isTitle: true,
      required: true,
    },
    {
      type: "string",
      name: "description",
      label: "Page Introduction",
      ui: {
        component: "textarea",
      },
    },

    {
      type: "string",
      name: "counselTitle",
      label: "Counsel at First Appearance — Title",
    },
    {
      type: "string",
      name: "counselDescription",
      label: "Counsel at First Appearance — Description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "counselImageAlt",
      label: "Counsel at First Appearance — Image Alt Text",
      ui: {
        component: "textarea",
      },
    },

    {
      type: "string",
      name: "officeTitle",
      label: "Office of Police Oversight — Title",
    },
    {
      type: "string",
      name: "officeDescription",
      label: "Office of Police Oversight — Description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "officeImageAlt",
      label: "Office of Police Oversight — Image Alt Text",
      ui: {
        component: "textarea",
      },
    },

    {
      type: "string",
      name: "dismissalTitle",
      label: "Dismissal & Diversion Opportunities — Title",
    },
    {
      type: "string",
      name: "dismissalDescription",
      label: "Dismissal & Diversion Opportunities — Description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "dismissalImageAlt",
      label: "Dismissal & Diversion Opportunities — Image Alt Text",
      ui: {
        component: "textarea",
      },
    },

    {
      type: "string",
      name: "communityTitle",
      label: "Community-Powered Support — Title",
    },
    {
      type: "string",
      name: "communityDescription",
      label: "Community-Powered Support — Description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "communityImageAlt",
      label: "Community-Powered Support — Image Alt Text",
      ui: {
        component: "textarea",
      },
    },

    {
      type: "string",
      name: "publicDefendersTitle",
      label: "Public Defenders' Office Support — Title",
    },
    {
      type: "string",
      name: "publicDefendersDescription",
      label: "Public Defenders' Office Support — Description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "publicDefendersImageAlt",
      label: "Public Defenders' Office Support — Image Alt Text",
      ui: {
        component: "textarea",
      },
    },

    {
      type: "string",
      name: "rightsEducationTitle",
      label: "Rights Education & Advocacy — Title",
    },
    {
      type: "string",
      name: "rightsEducationDescription",
      label: "Rights Education & Advocacy — Description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "rightsEducationImageAlt",
      label: "Rights Education & Advocacy — Image Alt Text",
      ui: {
        component: "textarea",
      },
    },
  ],
},
*/
//latest updates
      {
        name: "post",
        label: "Latest Updates",
        path: "content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            name: "posted",
            label: "Date Posted",
            required: true,
          },
          {
            type: "string",
            name: "summary",
            label: "Summary",
            required: true,
            ui: {
              component: "textarea",
            },
          },
          {
            type: "image",
            name: "image",
            label: "Featured Image",
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
