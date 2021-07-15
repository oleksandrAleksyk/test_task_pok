import React from 'react';
import {Header} from "./components/header/Header";
import {MainArea} from "./components/main-area/MainArea";
//importing style
import './common/styles/default-styles.scss';

const App = () => (
    <>
        <Header/>
        <MainArea />
    </>
)
export default App;
