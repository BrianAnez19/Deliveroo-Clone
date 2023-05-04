import { useState, useEffect } from 'react';
import { client } from '../sanity';

export default function Restaurant() {
  const [categoriasF, setcategoriasF] = useState([])

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
    ).then((data)=>
    {setcategoriasF(data)})
  }, [])

  return { categoriasF }
}