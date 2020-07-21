import React from 'react';

import YouTubeCounter from './YoutubeCounter';
import Rangers from './Rangers';
import RangersData from '../datas/RangersData';

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
            <article className="rangersMain row">
                 {RangersData.map((rangers) => <Rangers key = {rangers.id} name = {rangers.name} imgURL = {rangers.imgURL} description = {rangers.description}/> )}
            </article>
        </section>
    );
}

export default About;