import React from 'react'
import { Link } from 'react-router-dom'
const NotFound = () => {
  return (
    <div className="error">
        <h1>Error the page is not found</h1>
        <Link to="/">Back Home</Link>
    </div>
  )
}

export default NotFound