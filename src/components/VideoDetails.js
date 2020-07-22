import React from 'react';

function VideoDetails(props){
    return(
        <section className=" video1"> 
            <article><p className="youtubeHeader">{props.title.split('|')[0]}</p></article>
            <iframe src={'https://www.youtube.com/embed/'+props.link + '?rel=0&modestbranding=1&autohide=1&showinfo=0&controls=0'}  width="300" height="200" frameBorder="0" allowFullScreen>
            </iframe>
        </section>
    );
}

export default VideoDetails;