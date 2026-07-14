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
      {
        name: "post",
        label: "Posts",
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
      {
        name: "aboutPage",
        label: "About Page",
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
    ],
  },
});
