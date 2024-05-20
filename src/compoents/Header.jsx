import React from 'react'

const Header = ( props ) => {
    return (
        <header id="headerType" className={`header__wrap ${props.element}`}>
            <div className="header__inner">
                <div className="header__logo">
                    <a href="/">의사파업 <em>지원 프로젝트</em></a>
                </div>
                <nav className="header__menu">
                    <ul>
                        <li><a href="/colorectal-cancer">대장암 진단</a></li>
                        <li><a href="/stomach-cancer">위암 진단</a></li>
                        <li><a href="/kidney-cancer">신장암 진단</a></li>
                        <li><a href="/ambulance">구급차 병원 배정</a></li>
                        {/*<li><a href="/">푸터 영역</a></li>*/}
                    </ul>
                </nav>
                <div className="header__member">
                    <a href="/login">로그인</a>
                    {/*로그인 기능도 구현하고 싶어어어어어!!!! 
                    우선 정보를 입력하면 해당 정보를 받아서 저장하고 싶고 해당 정보가 맞으면 로그인하게 하고 싶고
                    또는 회원가입도 가능하게 만들고 싶어*/}
                </div>
            </div>
        </header>
    )
}

export default Header