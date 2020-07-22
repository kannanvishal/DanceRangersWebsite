import React,{useState,useEffect} from 'react';

import config from '../datas/Config';

import VideoDetails from './VideoDetails';

const Videos = () => {

    const [channelVideoDetails, setchannelVideoDetails] = useState();

    useEffect(() => {
        const {api_key, channel_id} = config;
        const apiCall = `https://www.googleapis.com/youtube/v3/activities?part=snippet,contentDetails&channelId=${channel_id}&key=${api_key}&maxResults=50`;
        fetch(apiCall)
        .then(result => result.json())
        .then(data => {
            console.log(data);
            setchannelVideoDetails(data);
            })
    }, []);

    
    return(
        <div className=" videos">
           {channelVideoDetails !== undefined && channelVideoDetails.items.map((videoDetails) => <VideoDetails key = {videoDetails.id} link= {videoDetails.contentDetails.upload.videoId} title={videoDetails.snippet.title}/> )}
        </div>
    );
}

export default Videos;
