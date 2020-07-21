import React from 'react';

function Rangers(props){
    return(
        <section className="rangers col-lg-3 col-md-3 .col-sm-3 col-xs-12">
            <img className="aboutImage" src={props.imgURL} alt="avatar" ></img>
            <dl>
                <dt>{props.name}</dt>
                <dd>{props.description}</dd>
            </dl>
        </section>
    );
}

export default Rangers;