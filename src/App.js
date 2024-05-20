import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './assets/css/reset.css';
import './assets/css/style.css';
//import './assets/css/login.css';

import Header from './components/Header';
import Main from './components/Main';
// import Footer from './components/Footer';
import Slider from './components/Slider';
// import Image from './components/Image';  // 윤진이꺼 추가할때 사용
import ImgText from './components/ImgText';
import Card from './components/Card';
import Banner from './components/Banner';
import Signup from './components/Singup';

// 페이지 컴포넌트들
import Colorectal_Cancer from './pages/Colorectal_Cancer';
import Kidney_Cancer from './pages/Kidney_Cancer';
import Stomach_Cancer from './pages/Stomach_Cancer';
import Ambulance from './pages/Ambulance';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
// import Text from './components/Text';



import ColorectalCancerPage from './pages/ColorectalCancerPage'; // 이 부분을 해당 페이지 컴포넌트의 경로로 수정해야 합니다.


const App = () => {
    return (
        <Router>
            <Header element="nexon" />
            <Main>
                <Routes>
                    <Route path="/colorectal-cancer" element={<Colorectal_Cancer />} />
                    <Route path="/kidney-cancer" element={<Kidney_Cancer />} />
                    <Route path="/stomach-cancer" element={<Stomach_Cancer />} />
                    <Route path="/ambulance" element={<Ambulance />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/singup" element={<Signup />} />
                    {/*<Route path="/colorectal-cancer" component={ColorectalCancerPage} />*/}
                    {/* 다른 페이지 라우트들 */}
                    <Route exact path="/" element={
                        <>
                            <Slider element="nexon" />
                            <ImgText element="section nexon gray" title="이미지 텍스트 유형" />
                            <Card element="section nexon" title="암진단 더 쉽고 정확하게" />
                            <Banner element="nexon" title="배너 영역" />

                        </>
                    } />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Main>
            {/* <Footer element="nexon section gray" /> */}
        </Router>
    );
}

export default App;
