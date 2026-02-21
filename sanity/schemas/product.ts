import { defineField, defineType } from "sanity";

export default defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "price",
      title: "Price (€)",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "salePrice",
      title: "Sale Price (€)",
      type: "number",
      description: "Leave empty if not on sale",
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative text",
              description: "Important for SEO and accessibility",
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "material",
      title: "Material",
      type: "string",
      options: {
        list: [
          { title: "Villa", value: "villa" },
          { title: "Puuvilla", value: "puuvilla" },
          { title: "Synteettinen", value: "synteettinen" },
          { title: "Juutti", value: "juutti" },
          { title: "Sisal", value: "sisal" },
          { title: "Silkki", value: "silkkki" },
          { title: "Bambu", value: "bambu" },
        ],
      },
    }),
    defineField({
      name: "size",
      title: "Size",
      type: "string",
      description: "E.g., 160x230 cm",
    }),
    defineField({
      name: "color",
      title: "Color",
      type: "string",
      options: {
        list: [
          { title: "Beige", value: "beige" },
          { title: "Harmaa", value: "harmaa" },
          { title: "Valkoinen", value: "valkoinen" },
          { title: "Musta", value: "musta" },
          { title: "Ruskea", value: "ruskea" },
          { title: "Sininen", value: "sininen" },
          { title: "Vihreä", value: "vihrea" },
          { title: "Terrakotta", value: "terrakotta" },
          { title: "Keltainen", value: "keltainen" },
          { title: "Punainen", value: "punainen" },
        ],
      },
    }),
    defineField({
      name: "stock",
      title: "Stock",
      type: "number",
      initialValue: 0,
      validation: (Rule) => Rule.min(0).integer(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
    }),
    defineField({
      name: "featured",
      title: "Featured Product",
      type: "boolean",
      initialValue: false,
      description: "Show this product on the homepage",
    }),
    defineField({
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
      description: "Title for search engines (50-60 characters recommended)",
      validation: (Rule) => Rule.max(60).warning("SEO titles should be under 60 characters"),
    }),
    defineField({
      name: "seoDescription",
      title: "SEO Description",
      type: "text",
      rows: 2,
      description: "Description for search engines (150-160 characters recommended)",
      validation: (Rule) => Rule.max(160).warning("SEO descriptions should be under 160 characters"),
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "images.0",
      price: "price",
      stock: "stock",
    },
    prepare({ title, media, price, stock }) {
      return {
        title,
        subtitle: `${price?.toFixed(2)} € - Stock: ${stock || 0}`,
        media,
      };
    },
  },
});
