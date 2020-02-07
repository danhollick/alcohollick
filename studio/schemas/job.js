export default {
  name: 'job',
  title: 'Job',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'place',
      title: 'Place',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
    },
    {
      name: 'startDate',
      title: 'StartDate',
      type: 'date',
      validation: Rule => Rule.required(),
    },
    {
      name: 'endDate',
      title: 'EndDate',
      type: 'date',
    },
  ],
  preview: {
    select: {
      title: 'place',
    },
  },
}
