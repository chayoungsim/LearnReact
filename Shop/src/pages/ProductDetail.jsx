import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import { formatPrice } from '../utils/formatPrice';

const ProductDetail = () => {
  const {id} = useParams();
  const navigate = useNavigate()

  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  
 const getProductDetail = async () => {
    setLoading(true);
    setError(null)
    try{
      const URL = `https://my-json-server.typicode.com/chayoungsim/react-shop/products/${id}`
      const res = await axios.get(URL)
      setProduct(res.data)
    } catch(err) {
      console.error("데이터로드실패",err)
      setError(err)
    } finally {
      setLoading(false);
    }    
 }


  useEffect(() => {
    getProductDetail();
  },[])


  return (
    <div className='product-detail-wrap'>
      {loading && <p className="loading">로딩중 ...</p>}
      {error && <p className="error">데이터를 불러오지 못했습니다.</p>}
      <div className='product-detail'>
          <div className="photo">
            <img src={product?.img} alt={product?.title} />
            {product?.new == true ? <div className='new'>NEW</div> : ""}
          </div>
          <div className="info">
            <div className="name">{product?.title}</div>
            <div className="price">{product?.price ? `${formatPrice(product.price)}원`:``}</div>
          </div>
      </div>         
      <button type="button" onClick={() => navigate('/')} className='btn'>제품리스트</button>
    </div>
  )
}

export default ProductDetail