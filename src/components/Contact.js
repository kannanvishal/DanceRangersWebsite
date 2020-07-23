import React from 'react';

function Contact(){
    return(
        <section className="ContactMain">
            <section className ="Contact">
                <article className = "contactHeader">Let's Make something awesome together</article>
                <article className ="ContactSubHeader">Collaboration | Business Enquiry | Classes</article>
            </section>
            <section>
                <article className="container">
                    <div className="chevron"></div>
                    <div className="chevron"></div>
                    <div className="chevron"></div>
                </article>
             </section>
             <section className="logo">
                 <article className="contactHeader">Send us Message</article>
                    <a href="https://wa.me/9514203698?text=I'm%20interested%20in%20your%20webiste"><span className="iconify contactLogo" data-icon="ion-logo-whatsapp" data-inline="false"></span></a>
                    <a href="https://www.instagram.com/dancerangers/?hl=en"><span className="iconify contactLogo" data-icon="uil:instagram-alt" data-inline="false"></span></a>
                    <a href="https://www.facebook.com/dancerangers04/"><span className="iconify contactLogo" data-icon="ant-design:facebook-filled" data-inline="false"></span></a>
                    <a href="mailto:dancerangers04@gmail.com"><span className="iconify contactLogo" data-icon="carbon:email" data-inline="false"></span></a> 
            </section>
        </section>
    );
}

export default Contact;