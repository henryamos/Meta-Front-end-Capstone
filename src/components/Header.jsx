import React from 'react'
import { Link } from 'react-router-dom'
import bannerImg from "../assets/restauranfood.jpg"
const Header = () => {
  return (
  <header className='header'>
    <section>
        {/* Banner Texts */}
        <div className='banner'>
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>We are family owned Mediterraneran resturant,focused on traditional recipes served with modern twist</p>
            <Link to='/booking'><button aria-label='On Click'>Reserve Table</button></Link>
        </div>

        {/* Banner Image */}
        <div className='banner-img'>
            <img src={bannerImg} alt="" />
        </div>
    </section>
  </header>
  )
}

export default Header