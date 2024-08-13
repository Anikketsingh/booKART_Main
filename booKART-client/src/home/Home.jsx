import React from 'react'
import Banner from '../components/Banner'
import FavouriteBooks from './FavouriteBooks'
import FavBook from './FavBook'
import PromoBanner from './PromoBanner'
import OtherBooks from './OtherBooks'
import Reviews from './Reviews'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <FavouriteBooks></FavouriteBooks>
      <FavBook/>
      <PromoBanner></PromoBanner>
      <OtherBooks></OtherBooks>
      <Reviews></Reviews>
     
    </div> 
  )
}

export default Home
