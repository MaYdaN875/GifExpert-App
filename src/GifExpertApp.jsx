import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One punch', 'One Piece']);

  const onAddCategory = (newCategory) => {

    if (!categories.includes(newCategory)) {
      setCategories([...categories, newCategory]);
    } else {
      console.log('Category already exists');
    }
  }

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory

        onNewCategory={onAddCategory}
      />


      {
        categories.map((category) => {
          return (
            <GifGrid key={category} category={category} />
          )
        }
        )

      }

    </>
  )
}
