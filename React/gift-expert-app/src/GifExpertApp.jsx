import {useState} from 'react'
import { AddCategory } from './components/AddCategory'


export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'One Punch', 'Dragon Ball' ])

  const onAddCategory = (newCategory) => {
    setCategories([newCategory,...categories])
  }
  return (
    <>
        <h1>GifExpertApp</h1>


        {/*Listado de Gifs */}
        <AddCategory 
        //setCategories= {setCategories}
        //onNewCategory = {event =>}
        />
        <button onClick={onAddCategory}>Agregar</button>
        <ol>
          {
          categories.map(category => {
             return <li key={category}>{category}</li>})
          }
        </ol>

    </>
  )
}
