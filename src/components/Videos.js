import React from 'react';

import $ from 'jquery';

function Videos(){

    var channelID = "UC85-G-adJ6PM0NDP7YWnrcg";
    $.getJSON('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fchannel_id%3D' + channelID, 
    function (data) {
    // change the number how many video you want from your feed
    for (var i = 0; i < 9; i++) {
        var title = data.items[i].title;
        var link = data.items[i].link;
        var thum = data.items[i].thumbnail;
        var id = link.substr(link.indexOf("=") + 1);
        console.log(thum);
        $('.videos').append('<div className="video1"><a href="https://youtube.com/embed/'+ id +'?controls=0&showinfo=0&rel=0"><img className="yt_video" src='+thum+' style="width:300px;height:200px"></img></a></div>');
    }
});
    
    return(
        <div className="videos" id="videos">
           
        </div>
    );
}

export default Videos;
