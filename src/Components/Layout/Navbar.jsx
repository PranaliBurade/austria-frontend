import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <div>
        
    <nav className='navbar navbar-expand-lg p-1 shadow-sm bgdark1 text-light sticky-top'>
        <div className='container-fluid w-75  rounded-5 px-4 p-1 mt-3 navabrcol mobilenavwidth'>
            <div className='navbar-brand'>
               <h1 className='text-light'>AstroFroge</h1>
            </div>
            <button
             className='navbar-toggler'
             type='button'
             data-bs-toggle='collapse'
             data-bs-target='#navbarNav'
             aria-controls='navbarNav'
             aria-expanded='false'
             aria-label='Toggle navigation'
             >
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse justify-content-center' id='navbarNav'>
                <ul className='navbar-nav align-items-lg-center gap-3'>
                    <li className='nav-link fw-semibold text-dark'>
                       <Link className='text-light text-decoration-none' to="/">Home</Link> 
                    </li>
                     <li>
                        <Link className='text-light text-decoration-none' to="/about">About</Link>
                    </li>
                    <li>
                        <Link className='text-light text-decoration-none' to="/feature">Features</Link>
                    </li>
                    <li>
                        <Link className='text-light text-decoration-none' to="/architecture">Architecture</Link>
                    </li>
                    <li>
                        <Link className='text-light text-decoration-none' to="/integration">Integration</Link>
                    </li>
                    <li>
                        <Link className='text-light text-decoration-none' to="/usecases">Use Cases</Link>
                    </li>
                    <li>
                        <Link className='text-light text-decoration-none' to="/contact" >Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </div>
    </>
  )
}

export default Navbar
