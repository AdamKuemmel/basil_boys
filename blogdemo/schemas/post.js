export default {
  name: 'post',
  title: 'Recipes',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'Keep the title short!',
      type: 'string',
      validation: (Rule) =>
        Rule.required()
          .max(25)
          .warning('Shorter titles are usually better Lentils'),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: (Rule) =>
        Rule.required()
          .max(60)
          .warning('Shorter descriptions are usually better Lentils'),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'SubPics',
      name: 'subpics',
      type: 'array',
      of: [{ type: 'image' }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'notes',
      title: 'Special Notes',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Steps',
      name: 'steps',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Ingredients',
      name: 'ingredients',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.required(),
    },
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { author } = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}
