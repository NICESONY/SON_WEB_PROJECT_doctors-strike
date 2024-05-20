import React from 'react'

const ImgText = ( props ) => {
    return (
        <section id="imgTextType" className={`imgText__wrap ${props.element}`}>
            <h2 className="blind">{props.title}</h2>
            <div className="imgText__inner container">
                <div className="imgText__txt">
                    <span className="small">이미지 텍스트 유형01</span>
                    <h3 className="title">구급차 - 병원 환자 연계 서비스</h3>
                    <p className="desc">환자를 병원에 지정해주는 서비스 입니다.</p>
                    <ul className="list">
                        <li><a href="/">현재 위치</a></li>
                        <li><a href="/">환자 상태</a></li>
                        <li><a href="/">조치 상황</a></li>
                        <li><a href="/">소요 시간</a></li>
                        <li><a href="/">환자 혈액형</a></li>
                        <li><a href="/">수술 관련 서류작성</a></li>
                    </ul>
                </div>
                <div className="imgText__img img1">
                    <a href="/">위치 정보</a>
                </div>
                <div className="imgText__img img2">
                    <a href="/" className="blue">환자 상태 정보</a>
                </div>
            </div>
        </section>
    )
}

export default ImgText