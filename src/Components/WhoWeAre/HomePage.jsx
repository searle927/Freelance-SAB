import React from 'react';
import Banner from './Banner';
import './HomePage.css';



function HomePage() {
    return (
        <>
            <div className="wrapper">
                <Banner />
                <div className="hpContainer">
                    <div className="sections">
                        <h1>About Me</h1>
                        <img className="hpPic" src="https://i.imgur.com/zTrQZTV.jpg" alt=""></img>
                            <p className="info">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum maxime molestiae illum laudantium. Deleniti magni sequi veritatis, autem sapiente sit placeat? Provident earum excepturi ut laborum magnam ipsa soluta inventore!<br /><br /><br />
                            </p>
                            <a className="seeMore" href="http://www.google.com">SEE MORE</a>
                    </div><br />
                
                    <div className="sections">
                        <h1>Contact Me</h1>
                        <img className="hpPic" src="https://i.imgur.com/zTrQZTV.jpg" alt=""></img>
                            <p className="info">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt fuga excepturi voluptatibus quae eligendi? Dolorum, repellat iusto maiores, eligendi sit libero perferendis earum quo accusantium, veritatis harum provident iure voluptatibus.<br /><br /><br />
                            </p>
                            <a className="seeMore" href="http://www.google.com">SEE MORE</a>
                    </div><br />        
                    <div className="sections">
                        <h1>Sessions</h1>
                        <img className="hpPic" src="https://i.imgur.com/zTrQZTV.jpg" alt=""></img>
                            <p className="info">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate tempora odit enim porro nisi ipsum provident pariatur mollitia. Commodi sapiente quibusdam aliquam quo natus perferendis accusamus, quis magnam enim non.<br /><br /><br />
                            </p>
                            <a className="seeMore" href="http://www.google.com">SEE MORE</a>
                    </div>    
                    
                </div>
            </div>
            
        </>
    )
}

export default HomePage;
