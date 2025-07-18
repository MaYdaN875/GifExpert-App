import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';


export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One punch', 'One Piece']);

  const onAddCategory = () => {
    const newCategory = 'Naruto'; // This could be dynamic, e.g., from an input field
    if (!categories.includes(newCategory)) {
      setCategories([...categories, newCategory]);
    } else {
      console.log('Category already exists');
    }
  }

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory />
      <button onClick={onAddCategory}> Agregar </button>
      <ol>
        {categories.map((categories) => {
          return <li key={categories}>{categories}</li>
        })}
      </ol>
    </>
  )
}
