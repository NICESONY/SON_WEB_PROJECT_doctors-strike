import React from 'react'

const Banner = ( props ) => {
    return (
        <section id="bannerType" className={`banner__wrap ${props.element}`}>
            <h2 className="blind">{props.title}</h2>
            <div className="banner__inner">
                <h3 className="title">AI_RUNNER 의료파업 지원 웹 프로젝트</h3>
                <p className="desc">
                    많은 사람들에게 더 편리한 의료서비스를 제공하도록 노력하겠습니다.
                    {/*<a href="/" title="유튜브 페이지 이동">youtube.com/c/Webstoryboy</a>*/}
                    {/* 이것은 JSX 내에서 한 줄 주석입니다. */}
                </p>
                <span className="underline">Email : songunhee5426@gmail.com</span>
                {/*large: 큰 크기의 텍스트를 나타내는 클래스
                bold: 굵은 글씨체를 사용하는 클래스
                italic: 이탤릭체로 표시하는 클래스
                underline: 밑줄을 그어주는 클래스
                uppercase: 텍스트를 대문자로 변환하는 클래스
                capitalize: 텍스트의 첫 글자를 대문자로 변환하는 클래스
                text-red, text-blue, text-green 등: 텍스트 색상을 지정하는 클래스
                text-center, text-left, text-right: 텍스트 정렬을 지정하는 클래스*/}
            </div>
        </section>
    )
}

export default Banner