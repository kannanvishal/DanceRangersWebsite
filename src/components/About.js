import React from 'react';

import YouTubeCounter from '../components/Youtube/YoutubeCounter';

function About(){
    return(
        <section>
            <article className="about" id="about">
                <p className="heading">Dancer | Youtuber | Choreography</p>
                <p className="subHeading">Dance Rangers is a tribe of 4 Dance Souls and we welcome you to our Dance World. We focus on showcasing various dance styles through unique choreography techniques. Do follow and be a member of our Clan in this journey ahead.</p>
            </article>
            <YouTubeCounter/>

            <article className="about">
                <p className="heading">Our Story</p>
                <p className="subHeading">Dance Rangers is a tribe of 4 Dance Souls and we welcome you to our Dance World. We focus on showcasing various dance styles through unique choreography techniques. Do follow and be a member of our Clan in this journey ahead.</p>
            </article>
        </section>
    );
}

export default About;