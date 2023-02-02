import React from 'react';

import Header from '../header/Header';
import Footer from '../footer/Footer';


type PropsType = {
    children: React.ReactNode;
}

const Layout: React.FC<PropsType> = (
    { children }
) => {
    return (
        <>
            <Header />
                {children}
            <Footer />
        </>
    );
};

export default Layout;