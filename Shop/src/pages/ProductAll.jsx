import { useState, useEffect } from 'react'
import axios from 'axios'
import ProductCard from '../components/ProductCard'
import { useSearchParams } from 'react-router-dom'


const ProductAll = () => {

  let [productList, setProductList] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null) 

  //URL 쿼리값을 읽기 위한 객체. (useSearchParams()가 반환하는 배열에서 setter를 사용하지 않고 읽기 전용으로 사용 중.)
  const [searchParams] = useSearchParams();

  const getProducts = async () => {

    setLoading(true);
    setError(null)

    try {
      const searchQuery = searchParams.get('q') || '';
      const category = searchParams.get('category') || '';
   
      const params = new URLSearchParams();

 
      if (searchQuery) params.append("q", searchQuery);
      if (category) params.append("category", category);
   

      let URL = `http://localhost:4000/products?${params.toString()}`
      console.log("📡 API 요청:", URL); // 디버깅용

      let res = await axios.get(URL)


      if (searchQuery && res.data.length > 0) {
        const lowered = searchQuery.toLowerCase()
        const filtered = res.data.filter(p => (p.title || '').toLowerCase().includes(lowered))
        if (filtered.length !== res.data.length) {
          console.warn('Applying client-side filter')
          res.data = filtered
        }
      }


      setProductList(res.data) 

    } catch (err) {
      console.error("데이터로드실패",err)
      setError(err.message);
      setProductList([])
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getProducts();
  },[searchParams.toString()]);


  return (
    <div>
      <div style={{padding: '10px', background: '#f5f5f5', marginBottom: '20px'}}>
        <p>검색어: {searchParams.get('q') || '(없음)'}</p>
        <p>카테고리: {searchParams.get('category') || '(전체)'}</p>
        <p>결과: {productList.length}개</p>
      </div>
       {error && <p>{error}</p> }
        {loading && <p>로딩중 ...</p>}
        {!loading && !error && productList.length === 0 && (
          <p>검색 결과가 없습니다.</p>
        )}
      <ul className='product-lists'>       
       

        

        { productList.length > 0 &&
          productList.map(product => (
            <li key={product.id}><ProductCard product={product}/></li>
          ))
        }
        
      </ul>
    </div>
  )
}

export default ProductAll