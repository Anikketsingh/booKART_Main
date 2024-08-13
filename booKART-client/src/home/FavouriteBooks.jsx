import React, { useEffect, useState } from 'react'
import BookCards from '../components/BookCards';
const FavouriteBooks = () => {
    const [books,setBooks]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:5001/all-books").then(res=>res.json()).then(data=>setBooks(data.slice(0,9)))
    })
  return (
    <div>
    <BookCards books={books} headline ="Best Seller Books"></BookCards>

    </div>

  )
}

export default FavouriteBooks
