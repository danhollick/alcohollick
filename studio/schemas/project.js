export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'description',
      title: 'description',
      type: 'string',
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: Rule =>
        Rule.uri({
          allowRelative: true,
          scheme: ['https', 'http', 'mailto', 'tel'],
        }),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
}
