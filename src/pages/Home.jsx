import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addCount, minusCount, productsSelector } from '../store/products/productsSlice'

const Home = () => {
  
  const { title, count } = useSelector(productsSelector)
  const dispatch = useDispatch()
  
  return (
    <div className="container">
      <h1 className="title">{title}</h1>
      <div className="item">
          <button onClick={() => dispatch(minusCount())}>-</button>
          <span>{count}</span>
          <button onClick={() => dispatch(addCount(5))}>+</button>
      </div>
    </div>
  )
}

export default Home