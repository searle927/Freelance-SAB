import React from 'react';
import './WhatWeDo.css';
import WWDBanner from './WWDBanner'

function WhatWeDo() {
    return (
        <>
            <WWDBanner />
            <h2 className="whatIveDone">The work I have done this year.</h2>
            <div className="wwdContainer">
                <h2 className="speaker">KEYNOTE SPEAKER</h2>
                <hr></hr>
                <p className="speakerQuote">"You can speak well if your tongue can deliver the message of your heart"  - John Ford</p><br />
                <img className="speakerPic" src="https://i.imgur.com/c8qta3u.jpg" alt=""></img>
            </div>
            {/* below i added another container. just add and get rid of whatever you need */}
            <div className="wwdContainer2">
                <h2 className="random">ADD INFORMATION</h2>
                <hr></hr>
                <p className="randomQuote">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia consequatur quaerat nobis maiores molestias perspiciatis, quo, harum provident dolorum voluptatibus laboriosam dicta, blanditiis doloribus quis eaque corrupti vel sequi commodi.</p><br />
                <img className="randomPic" src="https://i.imgur.com/c8qta3u.jpg" alt=""></img>
            </div>
        </>
    )
}

export default WhatWeDo
