import { defineField, defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "siteName",
      title: "Site Name",
      type: "string",
      initialValue: "CarpetFellows",
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "description",
      title: "Site Description",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "contactEmail",
      title: "Contact Email",
      type: "string",
    }),
    defineField({
      name: "contactPhone",
      title: "Contact Phone",
      type: "string",
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "socialLinks",
      title: "Social Links",
      type: "object",
      fields: [
        { name: "facebook", title: "Facebook", type: "url" },
        { name: "instagram", title: "Instagram", type: "url" },
        { name: "pinterest", title: "Pinterest", type: "url" },
      ],
    }),
    defineField({
      name: "defaultSeo",
      title: "Default SEO",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Default SEO Title",
          type: "string",
        },
        {
          name: "description",
          title: "Default SEO Description",
          type: "text",
          rows: 2,
        },
        {
          name: "ogImage",
          title: "Default Open Graph Image",
          type: "image",
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "siteName",
    },
  },
});
