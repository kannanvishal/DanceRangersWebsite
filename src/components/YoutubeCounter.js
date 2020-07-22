import React, {useState, useEffect} from 'react';

import config from '../datas/Config';
import numeral from 'numeral';

const YouTubeCounter = () => {

    const [subscriberCount, setSubscribercount] = useState();
    const [viewCount , setViewCount] = useState();
    const [videoCount , setVideoCount] = useState();

    useEffect(() => {
        const {api_key, channel_id} = config;
        const apiCall = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channel_id}&key=${api_key}`;
        fetch(apiCall)
        .then(result => result.json())
        .then(data => {
            console.log(data);
            const sCount = numeral(data.items[0].statistics.subscriberCount).format(0,0);
            const vieCount = numeral(data.items[0].statistics.viewCount).format(0,0);
            const vidCount = numeral(data.items[0].statistics.videoCount).format(0,0);
            setSubscribercount(sCount);
            setVideoCount(vidCount);
            setViewCount(vieCount);
        })
    },[]);

    return(
        <section className="row youtubeData">
            <article className="col-lg-4 col-md-4 .col-sm- 4 col-xs-12">
                <p>{subscriberCount}+ Subscribers </p>
            </article>
            <article className="col-lg-4 col-md-4 .col-sm- 4 col-xs-12">
                <p>{viewCount}+ Views </p>
            </article>
            <article className="col-lg-4 col-md-4 .col-sm- 4 col-xs-12">
                <p>{videoCount} Total Videos </p>
            </article>
        </section>
    )
}

export default YouTubeCounter;