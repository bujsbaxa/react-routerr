import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

const User = () => {
  let { id } = useParams()
  
  const [user, setUser] = useState(null)
  
  const getUser = async () => {
    let res = await fetch(`http://dummyjson.com/users/${id}`)
    let data = await res.json()
    setUser(data)
  }
  useEffect(() => {
    getUser()
  }, [])
  
  
    return (
    <>
        {user && 
            <div className="item">
                <img src={user.image} alt="" />
                <h2>Name: {user.firstName}</h2>
                <h2>Lastname: {user.lastName}</h2>
                <h2>Age: {user.age}</h2>
                <h2>Role: {user.role}</h2>
                <Link to={'/users'} className="link">Назад</Link>
            </div>
        }
        
    </>
  )
}

export default User