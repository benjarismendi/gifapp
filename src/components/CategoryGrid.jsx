import React from 'react'
import { useEffect, useState } from 'react'
import { getCategories } from '../helpers/getCategories'
import { CategoryItem } from './CategoryItem'

export const CategoryGrid = ( {addSearch} ) => {

    const [categories, setCategories] = useState([])

    const getCats = async () => {
        const cats = await getCategories();
        setCategories(cats);
    }

    useEffect(() => {
        getCats();
    }, [])
  
  
  
    return (
    <>
            <h3>Categorias</h3>
            {
                categories.map(category => <CategoryItem key={category.id} {...category} addSearch={addSearch} />)
            }
    </>
  )
}
