import React, { useEffect, useState } from 'react'
import Loader from '../components/Loader'
import { Link } from 'react-router-dom'

const Users = () => {
    
    const [users, setUsers] = useState(null)
    const [search, setSearch] = useState('')
    const getUsers = async () => {
        let res = await fetch(`http://dummyjson.com/users/search?q=${search}`)
        let data = await res.json()
        setUsers(data.users)
    }
    useEffect(() => {
      getUsers()
    }, [])
    
    const submit = (event) => {
      event.preventDefault()
      getUsers()
      
    }
    
    return (
    <>
      <div className="container">
          <h2 className="title">Users</h2>
          
          {users ? (
            <>
              <form onSubmit={(event) => submit(event)} className="form">
                <input 
                type="text" 
                placeholder='Введите имя' 
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                />
                <button>Искать</button>
              </form>
            <div className="box">
              {users.map((user) => (
                <div className="item" key={user.id}>
                  <img src={user.image} alt="" />
                  <h2>Name: {user.firstName}</h2>
                  <h2>Age: {user.age}</h2>
                  <h2>City: {user.address.city}</h2>
                  <Link to={`/users/${user.id}`} className='link'>Подробнее</Link>
                </div>
              ))}
            </div>
          </>
          ) : <Loader/>}
          

            
      </div>
    </>
  )
}

export default Users