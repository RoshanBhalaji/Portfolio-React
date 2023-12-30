import React from 'react'
import './footer.css'
function Footer() {
    const currentDate = new Date().getFullYear();
  return (
        <footer className="footer">
            Copyright &#169; {currentDate} Roshan All right received
        </footer>

  )
}

export default Footer