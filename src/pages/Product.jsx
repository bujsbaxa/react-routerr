import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getProduct, productsSelector } from '../store/products/productsSlice'
import { useParams } from 'react-router-dom'

const Product = () => {
    
    const { product } = useSelector(productsSelector)
    // const [productImg, setProductImg] = useState(product.thumbnail)
    const dispatch = useDispatch()
    let { id } = useParams()

    useEffect(() => {
        dispatch(getProduct(id))
    }, [])

    return (
        <>
            {product && (
                <div className="container">
                    <div className="item">
                        <div className="item__left">
                            <div className="item__left-box">
                                {product.images.map((img, i) => (
                                    <img src={img} key={i} alt="" className="item__left-img" />
                                ))}
                            </div>
                            <img src={product.thumbnail} alt="" />
                        </div>
                        <div className="item__right">
                            <h2>{product.title}</h2>
                            <h2>{product.description}</h2>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Product