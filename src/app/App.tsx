// /* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/anchor-is-valid */
import '../css/defaultStyle.css';
import React from 'react';
import { Box } from './components/primitives/Box';

import Header from './components/page/Header';
import Main from './components/page/Main';
import Footer from './components/page/Footer';

export default function App() {
    return (
        <Box
            bg='azure' pl={6}
            pr={5} pt={3}
        >
            <Header />
            <Main />
            <Footer />
        </Box>
    );
}
