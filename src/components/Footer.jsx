import React from 'react'
import logo from '../assets/Logo.svg'

const Footer = () => {
  return (
   <footer>
    <section>
        <div className='company-info'>
            <img src={logo} alt="" />
            <p>We are family owned Mediterraneran resturant,focused on traditional recipes served with modern twist</p>
        </div>

        <div>
            <h3>Important Links</h3>
            <ul>
            <li>
                 <a href="/">Home</a>
                </li>
                <li>
                    <a href="/">About</a>
                </li>
                <li>
                    <a href="/">Services</a>
                </li>
                <li>
                    <a href="/">Menu</a>
                </li>
                <li>
                    <a href="/">Reservations</a>
                </li>
                <li>
                    <a href="/">Order Online</a>
                </li>
                <li>
                    <a href="/">Login</a>
                </li>
            
            </ul>
        </div>
        <div>
            <h3>
                Contact
            </h3>
            <ul>
                <li>Address: <br /> 35 Cape Coast,Ghana</li>
                <li>Phone: <br /> +233 020 6262 1233</li>
                <li>Email: <br />littlelemon2024@gmail.com</li>
           
            </ul>
        </div>
        <div>
            <h3>
                Socail Media Links
            </h3>
            <ul>
            <li>
                    <a href="/">Facebook</a>
                </li>
                <li>
                    <a href="/">Twitter</a>
                </li>
                <li>
                    <a href="/">Instagram</a>
                </li>
            </ul>
        </div>
    </section>

   </footer>
  )
}

export default Footer
