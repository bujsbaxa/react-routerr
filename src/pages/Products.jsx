import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllProducts, productsSelector } from '../store/products/productsSlice'
import { Link } from 'react-router-dom'

const Products = () => {
  
  const { count, products } = useSelector(productsSelector)
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getAllProducts())
  }, [])
  
  
  return (
    <div className="container">
      <h1 className="title">Вы набрали {count} баллов </h1>
      <div className="box">
        {products && products.map((item) => (
          <Link to={`/products/${item.id}`} className="item" key={item.id}>
            <img src={item.thumbnail} alt="" />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Products