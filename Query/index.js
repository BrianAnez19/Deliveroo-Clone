import { useState, useEffect } from 'react';
import { client } from '../sanity';

export default function FeaturedGen() {
  const [featuredG, setFeaturedG] = useState([])

  useEffect(() => {
    client.fetch(
      `
      *[_type == "featured"] {
        ...,
      restaurants[]->{
        ...,
        dishes[]->
      }
      }
      `
    ).then((data) => { setFeaturedG(data) })
  }, [])

  return { featuredG }
}

export function FeaturedEsp({ id }) {
  const [featuredE, setFeaturedE] = useState([])

  useEffect(() => {
    client.fetch(
      `
      *[_type == "featured" && _id == $id] {
        ...,
        restaurants[]->{
          ...,
          dishes[]->,
          type-> {
            name
          }
        },
      }[0]
      `, { id }
    ).then((data) => { setFeaturedE(data?.restaurants) })
  }, [id])

  return { featuredE }
}

export function CategoriesG() {
  const [categoriesG, setCategoriesG] = useState([])

  useEffect(() => {
    client.fetch(
      `
      *[_type == "category"] 
      `
    ).then((data) => { setCategoriesG(data) })
  }, [])

  return { categoriesG }
}