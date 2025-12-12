import React from 'react'
import { useNavigate } from 'react-router-dom'
import { formatPrice } from '../utils/formatPrice'


const ProductCard = ({product}) => {
  const {img, title, price, new:isNew, choice} = product

  const navigate = useNavigate();
  const showProduct = (id) => {
    navigate(`/product/${id}`);
  }

  return (
    <div className='product-card' onClick={() => showProduct(product.id)}>
        <div className='photo'>
          <img src={img} alt={title} />
          {isNew ? <span className='rbn'>New</span> :''}
        </div>
        <div className='info'>
            <div>{choice == true ? <span>CHOICE</span> : ''}</div>
            <div className='name'>{title}</div>
            <div className='price'>{`${formatPrice(product.price)}원`}</div>
        </div>
    </div>
  )
}

export default ProductCard