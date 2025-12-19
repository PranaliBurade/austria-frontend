import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer';
import Footer1 from './Footer1';


function Layout({children}) {
  return (
    <div>
         <Navbar/>
        <main>
            {children}
        </main>
        {/* <Footer/> */}
        <Footer1/>
        
    </div>
  )
}

export default Layout;
