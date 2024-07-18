import React from "react";

import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import Routers from '../../router/Routers';
// import Homes from "../../pages/Homes";
const Layout=()=>{
    return (
        <>
            <Header/>
              <Routers /> 
             {/* <Homes/> */}
            <Footer/> 

        </>
    )
};

export default Layout;