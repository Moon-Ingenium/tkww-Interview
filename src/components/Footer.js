import React from 'react'
import "./Footer.css"

const Footer = () => {
    return (
      <div className="footer">
        {/* Better ways to space things in the style */}
        {/* {" "} */}
        <div className="container">
          <h1>Interview Footer </h1>
        </div>
        <p>
          Built with love <span style={{color: 'red', zoom: 2}}>♥</span> 
          <em>(and <strong>improved</strong> upon by 
          <a href='mailto:crosscripter@gmail.com' title='@crosscripter'>Michael Schutt</a>)</em>
        </p>
      </div>
    )
}

export default Footer