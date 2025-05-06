import React from 'react';
import Contact from "../components/contactUs/contact.jsx";
import ConnectToYt from "../components/contactUs/connectToYt.jsx";
import LetsTalk from "../components/contactUs/letsTalk.jsx";
import Header from "../components/global/header.jsx";
import bgimage from '../assets/images/global/header/831c2714b328fccede3d32794e839d583281f838.jpg'

function Contactus() {
    return (
        <>
            <Header heading={'Let’s Connect!'}
                    subtext={'Whether you\'re a brand, distributor, or curious snack lover — we’re here to help.'}
                    buttonText={'Home'}
                    img={bgimage}
                    bgcolor={'rgba(254, 195, 85, 0.4)'}
                    path={'/'}
            />
            <Contact/>
            <ConnectToYt/>
            <LetsTalk/>
        </>
    );
}

export default Contactus;