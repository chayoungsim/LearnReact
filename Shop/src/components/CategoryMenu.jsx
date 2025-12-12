
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useSearchParams } from 'react-router-dom'

const CategoryMenu = () => {
  const [categories, setCategories] = useState([])
  const [searchParams, setSearchParams] = useSearchParams();
  const active = searchParams.get("category") || "";



  const getCategory = async () => {
    try {
      let res = await axios.get('http://localhost:4000/categories')
      setCategories(res.data)
    } catch(err) {
      console.error("데이터로드실패",err)
    } 
  }

  useEffect(() => {
    getCategory();
  },[])

  const goCategory = (slug) => {
    const params = new URLSearchParams(searchParams);   
    if(!slug) {
      params.delete('category');
    } else {
      params.set('category', slug);
    }
    setSearchParams(params);
  }


  return (
    <nav>
      <ul className='menu'>
          <li>
            <button onClick={() => goCategory("")}
             className={active === "" ? "active" : "" }
              >All</button>
          </li>
        {categories.map((category) => (
          <li key={category.id}>
            <button onClick={() => goCategory(category.slug)}
              className={active === `${category.slug}` ? "active" : "" }
              >
              {category.name}
            </button>
          </li>
        ))}
        
      </ul>
    </nav>
  )
}

export default CategoryMenu