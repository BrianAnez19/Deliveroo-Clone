import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Restaurant name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'short_description',
      title: 'Short description',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image of the Restaurant',
      type: 'image',
    }),
    defineField({
      name: 'lat',
      title: 'latitude of the Restaurant',
      type: 'number',
    }),
    defineField({
      name: 'long',
      title: 'longitude of the Restaurant',
      type: 'number',
    }),
    defineField({
      name: 'rating',
      title: 'Enter a Rating from (1-5 Stars)',
      type: 'number',
      validation: Rule => Rule.required().min(1).max(5).error("Please enter a Value between 1 and 5"),
    }),
    defineField({
      name: 'type',
      title: 'Category',
      type: 'reference',
      validation: Rule => Rule.required(),
      to: [{type: 'category'}]
    }),
    defineField({
      name: 'dishes',
      title: 'Dishes',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'dish'}]}],
    }),
  ],
})
