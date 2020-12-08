import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <>
            <div className="ftcontainer">
                <div className="social">
                    <a href="https://www.linkedin.com/in/shaina-earle-7b8bb6b0/">
                        <img src="https://i.imgur.com/WTHfKj8.png" 
                        alt="linkedIn" className="smedia"></img>
                    </a>
                    <a href="https://github.com/searle927">
                        <img src="https://i.imgur.com/6aHokMw.png" 
                        alt="instagram" className="smedia"></img>
                    </a>
                    <a href="https://github.com/searle927">
                        <img src="https://i.imgur.com/eT2Dilj.png" 
                        alt="email" className="smedia"></img>
                    </a>  
                    <a href="https://codepen.io/dashboard/">
                        <img src="https://i.imgur.com/P7UcleU.png" 
                        alt="facebook" className="smedia"></img>
                    </a>       
                </div>

                <div className="quotecontainer">
                    <h2 className="quote">MICHIGAN TEACHER OF THE YEAR<br />
                    NATIONAL TEACHERS HALL OF FAME INDUCTEE</h2>
                </div>

            </div>   
        </>
    )
}

export default Footer
