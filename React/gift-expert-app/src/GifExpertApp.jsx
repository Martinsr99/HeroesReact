import {useState} from 'react'
import { AddCategory } from './components/AddCategory'


export const GifExpertApp = () => {

  const [categories, setcategories] = useState([ 'One Punch', 'Dragon Ball' ])

  const onAddCategory = () => {
    setcategories([...categories,'Valorant'])
  }
  return (
    <>
        <h1>GifExpertApp</h1>


        {/*Listado de Gifs */}
        <AddCategory/>
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
